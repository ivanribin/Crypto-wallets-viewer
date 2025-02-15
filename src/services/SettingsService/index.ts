import { TSettingsConfig, SettingsConfigIds } from "../../pages/Settings/meta";
import { IApplicationSliceState } from "../../store/slices/Application/meta";
import { setTheme, setFontFamily, setFontSize, setLoadPostsCount, setIsCardanoActive } from "../../store/slices/Application";
import { countsLoadPostsKeysList, cardanoStatesKeysList } from "../../store/slices/Application/meta";
import { themesKeysList } from "../../styles/theme";
import { fontFamiliesKeysList } from "../../styles/fontFamilies";
import { fontSizesKeysList } from "../../styles/fontSizes";

export class SettingsService {
    public static getSettingsConfig(currentApplicationState: IApplicationSliceState): TSettingsConfig {
        const settingsConfig: TSettingsConfig = [
            {
                id: SettingsConfigIds.THEME,
                keysList: themesKeysList,
                selectedKey: currentApplicationState.theme,
                setValue: setTheme,
            },
            {
                id: SettingsConfigIds.FONT_FAMILY,
                keysList: fontFamiliesKeysList,
                selectedKey: currentApplicationState.fontFamily,
                setValue: setFontFamily,
            },
            {
                id: SettingsConfigIds.FONT_SIZE,
                keysList: fontSizesKeysList,
                selectedKey: currentApplicationState.fontSize,
                setValue: setFontSize,
            },
            {
                id: SettingsConfigIds.LOAD_POSTS_COUNT,
                keysList: countsLoadPostsKeysList,
                selectedKey: currentApplicationState.loadPostsCount,
                setValue: setLoadPostsCount,
            },
            {
                id: SettingsConfigIds.IS_CARDANO_ACTIVE,
                keysList: cardanoStatesKeysList,
                selectedKey: currentApplicationState.isCardanoActive,
                setValue: setIsCardanoActive,
            },
        ];

        return settingsConfig;
    }
}