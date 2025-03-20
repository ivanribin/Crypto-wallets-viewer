import SettingsFieldButton from "@components/SettingsFieldButton";
import { type ReactElement } from "react";
import { type ISettingsConfigItem } from "@pages/SettingsPage/meta";
import "./style.css";

export interface ISettingsFieldMenuProps {
    settingsFieldConfig: ISettingsConfigItem;
}

const SettingsFieldMenu = ({
    settingsFieldConfig,
}: ISettingsFieldMenuProps): ReactElement => {
    const selectedValue = settingsFieldConfig.selectedValue;
    const setValue = settingsFieldConfig.setValue;
    const labelsMap = settingsFieldConfig.labelsMap;
    const valuesList = Object.keys(labelsMap);

    const getSettingLabelByValue = (value: string): string => {
        return labelsMap[value]!;
    };

    return (
        <div className="settings-field-container">
            {valuesList.map((value) => (
                <SettingsFieldButton
                    key={value}
                    value={value}
                    selectedValue={selectedValue}
                    label={getSettingLabelByValue(value)}
                    setValue={setValue}
                />
            ))}
        </div>
    );
};

export default SettingsFieldMenu;
