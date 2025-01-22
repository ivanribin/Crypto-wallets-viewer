import { TSettingsConfig, SettingsConfigIdList } from "../../pages/Settings/meta";
import { IApplicationSliceState } from "../../store/slides/Application/meta";
import { setTheme, setFontFamily, setFontSize, setCountLoadPosts, setIsCardanoActive, countsLoadPostsNamesList, cardanoStatesNamesList, countsLoadPostsList, cardanoStatesList } from "../../store/slides/Application";
import { themesList, themesNamesList } from "../../styles/theme";
import { fontFamiliesList, fontFamiliesNamesList } from "../../styles/fontFamilies";
import { fontSizesList, fontSizesNamesList } from "../../styles/fontSizes";

export class SettingsService {
    public static getSettingsConfig(currentApplicationState: IApplicationSliceState): TSettingsConfig {
        const settingsConfig: TSettingsConfig = [
            {
                id: SettingsConfigIdList.THEME,
                valuesNamesList: themesNamesList,
                valuesList: themesList,
                selectedValue: currentApplicationState.theme,
                setValue: setTheme,
            },
            {
                id: SettingsConfigIdList.FONT_FAMILY,
                valuesNamesList: fontFamiliesNamesList,
                valuesList: fontFamiliesList,
                selectedValue: currentApplicationState.fontFamily,
                setValue: setFontFamily,
            },
            {
                id: SettingsConfigIdList.FONT_SIZE,
                valuesNamesList: fontSizesNamesList,
                valuesList: fontSizesList,
                selectedValue: currentApplicationState.fontSize,
                setValue: setFontSize,
            },
            {
                id: SettingsConfigIdList.COUNT_LOAD_POSTS,
                valuesNamesList: countsLoadPostsNamesList,
                valuesList: countsLoadPostsList,
                selectedValue: currentApplicationState.countLoadPosts,
                setValue: setCountLoadPosts,
            },
            {
                id: SettingsConfigIdList.IS_CARDANO_ACTIVE,
                valuesNamesList: cardanoStatesNamesList,
                valuesList: cardanoStatesList,
                selectedValue: currentApplicationState.isCardanoActive,
                setValue: setIsCardanoActive,
            },
        ];

        return settingsConfig;
    }
}