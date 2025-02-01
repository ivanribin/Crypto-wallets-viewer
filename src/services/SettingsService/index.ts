import { TSettingsConfig, SettingsConfigIds } from "../../pages/Settings/meta";
import { IApplicationSliceState } from "../../store/slides/Application/meta";
import { setTheme, setFontFamily, setFontSize, setLoadPostsCount, setIsCardanoActive } from "../../store/slides/Application";
import { countsLoadPostsList, countsLoadPostsNamesList, cardanoStatesList, cardanoStatesNamesList } from "../../store/slides/Application/meta";
import { themesList, themesNamesList } from "../../styles/theme";
import { fontFamiliesList, fontFamiliesNamesList } from "../../styles/fontFamilies";
import { fontSizesList, fontSizesNamesList } from "../../styles/fontSizes";

export class SettingsService {
    public static getSettingsConfig(currentApplicationState: IApplicationSliceState): TSettingsConfig {
        const settingsConfig: TSettingsConfig = [
            {
                id: SettingsConfigIds.THEME,
                valuesNamesList: themesNamesList,
                valuesList: themesList,
                selectedValue: currentApplicationState.theme,
                setValue: setTheme,
            },
            {
                id: SettingsConfigIds.FONT_FAMILY,
                valuesNamesList: fontFamiliesNamesList,
                valuesList: fontFamiliesList,
                selectedValue: currentApplicationState.fontFamily,
                setValue: setFontFamily,
            },
            {
                id: SettingsConfigIds.FONT_SIZE,
                valuesNamesList: fontSizesNamesList,
                valuesList: fontSizesList,
                selectedValue: currentApplicationState.fontSize,
                setValue: setFontSize,
            },
            {
                id: SettingsConfigIds.LOAD_POSTS_COUNT,
                valuesNamesList: countsLoadPostsNamesList,
                valuesList: countsLoadPostsList,
                selectedValue: currentApplicationState.loadPostsCount,
                setValue: setLoadPostsCount,
            },
            {
                id: SettingsConfigIds.IS_CARDANO_ACTIVE,
                valuesNamesList: cardanoStatesNamesList,
                valuesList: cardanoStatesList,
                selectedValue: currentApplicationState.isCardanoActive,
                setValue: setIsCardanoActive,
            },
        ];

        return settingsConfig;
    }
}