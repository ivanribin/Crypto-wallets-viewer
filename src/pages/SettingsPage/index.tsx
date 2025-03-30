import SettingsFieldMenu from "@components/SettingsFieldMenu";
import { SettingsService } from "@services/SettingsService";
import { useSelector } from "react-redux";
import { type ReactElement } from "react";
import { type TRootState } from "@store/index";
import { type IApplicationSliceState } from "@store/slices/Application/meta";
import { type TSettingsConfig } from "@services/SettingsService/meta";
import "./style.css";

const SettingsPage = (): ReactElement => {
    const applicationState: IApplicationSliceState = useSelector(
        (state: TRootState) => state.application
    );

    const settingsConfig: TSettingsConfig =
        SettingsService.getSettingsConfig(applicationState);

    return (
        <div className="settings-page">
            {settingsConfig.map((settingsField) => (
                <SettingsFieldMenu
                    key={settingsField.id}
                    settingsFieldConfig={settingsField}
                />
            ))}
        </div>
    );
};

export default SettingsPage;
