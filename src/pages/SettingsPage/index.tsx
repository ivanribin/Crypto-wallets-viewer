import { useState, type ReactElement } from "react";
import "./style.css";
import { TRootState } from "../../store";
import { useSelector } from "react-redux";
import { IApplicationSliceState } from "../../store/slices/Application/meta";
import { TSettingsConfig } from "./meta";
import { SettingsService } from "../../services/SettingsService";
import SettingsFieldMenu from "../../components/SettingsFieldMenu";

const SettingsPage = (): ReactElement => {
    const applicationState: IApplicationSliceState = useSelector(
        (state: TRootState) => state.application
    );

    const settingsConfig: TSettingsConfig =
        SettingsService.getSettingsConfig(applicationState);

    return (
        <div className="settings main-container">
            <h1>Settings</h1>
            <div className="settings-container">
                {settingsConfig.map((settingsField) => (
                    <SettingsFieldMenu
                        key={settingsField.id}
                        settingsFieldConfig={settingsField}
                    />
                ))}
            </div>
        </div>
    );
};

export default SettingsPage;
