import ApplicationRouter from "@router/index";
import FullScreenLoader from "@components/FullScreenLoader";
import { useSelector } from "react-redux";
import { FontFamiliesKeys, fontFamiliesValuesMap } from "@styles/fontFamilies";
import { ThemesKeys, themesValuesMap } from "@styles/theme";
import { FontSizesKeys, fontSizesValuesMap } from "@styles/fontSizes";
import { type TRootState } from "@store/index";
import { type ReactElement } from "react";
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

    return (
        <div
            className={`application-container ${themeClass} ${fontFamilyClass} ${fontSizeClass}`}
        >
            <ApplicationRouter />
            {isLoading && <FullScreenLoader />}
        </div>
    );
};

export default Application;
