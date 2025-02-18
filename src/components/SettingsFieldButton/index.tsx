import { type ReactElement } from "react";
import { useDispatch } from "react-redux";
import { SettingsFieldButtonStyles } from "./meta";
import "./style.css";

export interface ISettingsFieldButtonProps {
    selectedKey: string;
    value: string;
    setValue: any;
}

const SettingsFieldButton = ({
    selectedKey,
    value,
    setValue,
}: ISettingsFieldButtonProps): ReactElement => {
    const dispatch = useDispatch();

    const buttonStyle: string =
        selectedKey === value
            ? SettingsFieldButtonStyles.SELECT
            : SettingsFieldButtonStyles.UNSELECT;

    return (
        <button
            className={`menu-button ${buttonStyle}`}
            onClick={() => {
                dispatch(setValue(value));
            }}
        >
            {value}
        </button>
    );
};

export default SettingsFieldButton;
