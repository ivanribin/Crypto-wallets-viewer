import { type ReactElement } from "react";
import SettingsFieldButton from "../SettingsFieldButton";
import { ISettingsConfigItem } from "../../pages/SettingsPage/meta";
import "./style.css";

export interface ISettingsFieldMenuProps {
    settingsFieldConfig: ISettingsConfigItem;
}

const SettingsFieldMenu = ({
    settingsFieldConfig,
}: ISettingsFieldMenuProps): ReactElement => {
    const keysList = settingsFieldConfig.keysList;
    const selectedKey = settingsFieldConfig.selectedKey;
    const setValue = settingsFieldConfig.setValue;

    return (
        <div className="settings-field-container">
            {keysList.map((key, index) => (
                <SettingsFieldButton
                    key={key}
                    selectedKey={selectedKey}
                    value={key}
                    setValue={setValue}
                />
            ))}
        </div>
    );
};

export default SettingsFieldMenu;
