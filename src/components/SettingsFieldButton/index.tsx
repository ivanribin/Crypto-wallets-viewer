import { type ReactElement } from "react";
import { useDispatch } from "react-redux";
import { SettingsFieldButtonStyles } from "./meta";
import "./style.css";

export interface ISettingsFieldButtonProps {
    selectedValue: any;
    valueName: string;
    value: string;
    setValue: any;
}

const SettingsFieldButton = ({
    selectedValue,
    valueName,
    value,
    setValue,
}: ISettingsFieldButtonProps): ReactElement => {
    const dispatch = useDispatch();

    const buttonStyle: string =
        selectedValue === value
            ? SettingsFieldButtonStyles.SELECT
            : SettingsFieldButtonStyles.UNSELECT;

    return (
        <button
            className={`menu-button ${buttonStyle}`}
            onClick={() => {
                dispatch(setValue(value));
            }}
        >
            {valueName}
        </button>
    );
};

export default SettingsFieldButton;
