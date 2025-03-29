import { type ReactElement } from "react";
import { useDispatch } from "react-redux";
import { SelectButtonStyles } from "@utils/constants";

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
            ? SelectButtonStyles.SELECT
            : SelectButtonStyles.UNSELECT;

    return (
        <button
            className={`menu-button ${buttonStyle}`}
            title={label}
            onClick={() => {
                dispatch(setValue(value));
            }}
        >
            {label}
        </button>
    );
};

export default SettingsFieldButton;
