import SettingsFieldMenu from "@components/SettingsFieldMenu";
import { SettingsService } from "@services/SettingsService";
import { useSelector, useDispatch } from "react-redux";
import { resetSettings } from "@store/slices/Application";
import { type ReactElement } from "react";
import { type TRootState } from "@store/index";
import { type IApplicationSliceState } from "@store/slices/Application/meta";
import { type TSettingsConfig } from "@services/SettingsService/meta";
import "./style.css";

const RESET_BUTTON_TEXT: string = "Reset Settings";

const SettingsPage = (): ReactElement => {
    const dispatch = useDispatch();

    const applicationState: IApplicationSliceState = useSelector(
        (state: TRootState) => state.application
    );

    const settingsConfig: TSettingsConfig =
        SettingsService.getSettingsConfig(applicationState);

    return (
        <div className="settings-page">
            <div className="settings">
                {settingsConfig.map((settingsField) => (
                    <SettingsFieldMenu
                        key={settingsField.id}
                        settingsFieldConfig={settingsField}
                    />
                ))}
            </div>
            <button
                className="reset"
                onClick={() => {
                    dispatch(resetSettings(true));
                }}
            >
                {RESET_BUTTON_TEXT}
            </button>
        </div>
    );
};

export default SettingsPage;
