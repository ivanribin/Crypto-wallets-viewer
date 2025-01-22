import { type ReactElement } from "react";
import SettingsFieldButton from "../SettingsFieldButton";
import { ISettingsConfigItem } from "../../pages/Settings/meta";
import "./style.css";

export interface ISettingsFieldMenuProps {
    settingsFieldConfig: ISettingsConfigItem;
}

const SettingsFieldMenu = ({
    settingsFieldConfig,
}: ISettingsFieldMenuProps): ReactElement => {
    const valuesList = settingsFieldConfig.valuesList;
    const valuesNamesList = settingsFieldConfig.valuesNamesList;
    const selectedValue = settingsFieldConfig.selectedValue;
    const setValue = settingsFieldConfig.setValue;

    return (
        <div className="settings-field-container">
            {valuesList.map((value, index) => (
                <SettingsFieldButton
                    key={valuesNamesList[index]}
                    selectedValue={selectedValue}
                    valueName={valuesNamesList[index]}
                    value={value}
                    setValue={setValue}
                />
            ))}
        </div>
    );
};

export default SettingsFieldMenu;
