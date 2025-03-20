import ApplicationRouter from "@router/index";
import { type ReactElement } from "react";
import { useSelector } from "react-redux";
import { type TRootState } from "@store/index";
import { FontFamiliesKeys, fontFamiliesValuesMap } from "@styles/fontFamilies";
import { themesValuesMap } from "@styles/theme";
import { ThemesKeys } from "@styles/theme/meta";
import { FontSizesKeys, fontSizesValuesMap } from "@styles/fontSizes";
import "@domains/Theme/style.css";
import "./style.css";

const Application = (): ReactElement => {
    const { theme, fontFamily, fontSize, isLoading } = useSelector(
        (state: TRootState) => state.application
    );

    const themeClass: string = themesValuesMap[theme as ThemesKeys]!;
    const fontFamilyClass: string =
        fontFamiliesValuesMap[fontFamily as FontFamiliesKeys]!;
    const fontSizeClass: string =
        fontSizesValuesMap[fontSize as FontSizesKeys]!;

    console.log("IS LOADING: ", isLoading);

    return (
        <div
            className={`application-container ${themeClass} ${fontFamilyClass} ${fontSizeClass}`}
        >
            {/* {isLoading && <div className="loading"></div>} */}
            <ApplicationRouter />
        </div>
    );
};

export default Application;
