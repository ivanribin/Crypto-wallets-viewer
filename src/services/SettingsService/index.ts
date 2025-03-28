import { SettingsConfigKeys, settingsConfigTitles, type TSettingsConfig } from "@pages/SettingsPage/meta";
import { setTheme, setFontFamily, setFontSize, setLoadPostsCount, setIsCardanoActive } from "@store/slices/Application";
import { fontFamiliesLabelsMap } from "@styles/fontFamilies";
import { themesLabelsMap } from "@styles/theme";
import { fontSizesLabelsMap } from "@styles/fontSizes";
import { cardanoStatesLabelsMap, countsLoadPostsLabelsMap, type IApplicationSliceState } from "@store/slices/Application/meta";

export class SettingsService {
    public static getSettingsConfig(currentApplicationState: IApplicationSliceState): TSettingsConfig {
        const settingsConfig: TSettingsConfig = [
            {
                id: SettingsConfigKeys.THEME,
                title: settingsConfigTitles.theme,
                labelsMap: themesLabelsMap,
                selectedValue: currentApplicationState.theme,
                setValue: setTheme,
            },
            {
                id: SettingsConfigKeys.FONT_FAMILY,
                title: settingsConfigTitles.fontFamily,
                labelsMap: fontFamiliesLabelsMap,
                selectedValue: currentApplicationState.fontFamily,
                setValue: setFontFamily,
            },
            {
                id: SettingsConfigKeys.FONT_SIZE,
                title: settingsConfigTitles.fontSize,
                labelsMap: fontSizesLabelsMap,
                selectedValue: currentApplicationState.fontSize,
                setValue: setFontSize,
            },
            {
                id: SettingsConfigKeys.LOAD_POSTS_COUNT,
                title: settingsConfigTitles.loadPostsCount,
                labelsMap: countsLoadPostsLabelsMap,
                selectedValue: currentApplicationState.loadPostsCount,
                setValue: setLoadPostsCount,
            },
            {
                id: SettingsConfigKeys.IS_CARDANO_ACTIVE,
                title: settingsConfigTitles.isCardanoActive,
                labelsMap: cardanoStatesLabelsMap,
                selectedValue: currentApplicationState.isCardanoActive,
                setValue: setIsCardanoActive,
            },
        ];

        return settingsConfig;
    }
}