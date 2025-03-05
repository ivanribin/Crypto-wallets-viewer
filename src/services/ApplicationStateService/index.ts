import { IApplicationSliceState } from "../../store/slices/Application/meta";
import { FontFamiliesKeys  } from "../../styles/fontFamilies";
import { FontSizesKeys } from "../../styles/fontSizes";
import { ITheme, ThemesKeys } from "../../styles/theme/meta";

export class ApplicationStateService {
    public static setTheme(selectedApplicationState: IApplicationSliceState, applicationBody: HTMLElement): void {
        const selectedThemeName = selectedApplicationState.theme as ThemesKeys;
        const selectedFontFamilyName = selectedApplicationState.fontFamily as FontFamiliesKeys;
        const selectedFontSizeName = selectedApplicationState.fontSize as FontSizesKeys;

        // if (!(selectedThemeName in themesMap) || !(selectedFontFamilyName in fontFamiliesMap) || !(selectedFontSizeName in fontSizesMap)) {
        //     throw new Error("Cannot update application state, some selected key is uncorrect");
        // }

        // const selectedTheme: ITheme = themesMap[selectedThemeName];
        // const selectedFontFamily = fontFamiliesMap[selectedFontFamilyName];
        // const selectedFontSize = fontSizesMap[selectedFontSizeName];

        // applicationBody.style.color = selectedTheme.text;
        
        // applicationBody.style.backgroundColor = selectedTheme.background;
        // applicationBody.style.fontFamily = selectedFontFamily;
        // applicationBody.style.fontSize = selectedFontSize;
    }
}