import { type ReactElement } from "react";
import { useDispatch } from "react-redux";
import { SettingsFieldButtonStyles } from "./meta";
import "./style.css";

export interface ISettingsFieldButtonProps {
    value: string;
    selectedValue: string;
    label: string;
    setValue: any;
}

const SettingsFieldButton = ({
    value,
    selectedValue,
    label,
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
            {label}
        </button>
    );
};

export default SettingsFieldButton;
