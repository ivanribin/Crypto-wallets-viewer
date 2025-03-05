import ApplicationRouter from "../../router";
import { type ReactElement } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../../store";
import { FontFamiliesKeys, fontFamiliesValuesMap } from "../../styles/fontFamilies";
import { themesValuesMap } from "../../styles/theme";
import { ThemesKeys } from "../../styles/theme/meta";
import { FontSizesKeys, fontSizesValuesMap } from "../../styles/fontSizes";
import "../../domains/Theme/style.css";
import "./style.css";

const Application = (): ReactElement => {
    const {theme, fontFamily, fontSize} = useSelector(
        (state: TRootState) => state.application
    );

    const themeClass: string = themesValuesMap[theme as ThemesKeys]!;
    const fontFamilyClass: string = fontFamiliesValuesMap[fontFamily as FontFamiliesKeys]!;
    const fontSizeClass: string = fontSizesValuesMap[fontSize as FontSizesKeys]!;

    return (
        <div className={`application-container ${themeClass} ${fontFamilyClass} ${fontSizeClass}`}>
            <ApplicationRouter />
        </div>
    );
};

export default Application;
