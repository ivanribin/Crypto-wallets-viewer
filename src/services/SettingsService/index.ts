import { TSettingsConfig, SettingsConfigKeys } from "../../pages/SettingsPage/meta";
import { setTheme, setFontFamily, setFontSize, setLoadPostsCount, setIsCardanoActive } from "../../store/slices/Application";
import { fontFamiliesLabelsMap } from "../../styles/fontFamilies";
import { themesLabelsMap } from "../../styles/theme";
import { fontSizesLabelsMap } from "../../styles/fontSizes";
import { cardanoStatesLabelsMap, countsLoadPostsLabelsMap, IApplicationSliceState } from "../../store/slices/Application/meta";

export class SettingsService {
    public static getSettingsConfig(currentApplicationState: IApplicationSliceState): TSettingsConfig {
        const settingsConfig: TSettingsConfig = [
            {
                id: SettingsConfigKeys.THEME,
                labelsMap: themesLabelsMap,
                selectedValue: currentApplicationState.theme,
                setValue: setTheme,
            },
            {
                id: SettingsConfigKeys.FONT_FAMILY,
                labelsMap: fontFamiliesLabelsMap,
                selectedValue: currentApplicationState.fontFamily,
                setValue: setFontFamily,
            },
            {
                id: SettingsConfigKeys.FONT_SIZE,
                labelsMap: fontSizesLabelsMap,
                selectedValue: currentApplicationState.fontSize,
                setValue: setFontSize,
            },
            {
                id: SettingsConfigKeys.LOAD_POSTS_COUNT,
                labelsMap: countsLoadPostsLabelsMap,
                selectedValue: currentApplicationState.loadPostsCount,
                setValue: setLoadPostsCount,
            },
            {
                id: SettingsConfigKeys.IS_CARDANO_ACTIVE,
                labelsMap: cardanoStatesLabelsMap,
                selectedValue: currentApplicationState.isCardanoActive,
                setValue: setIsCardanoActive,
            },
        ];

        return settingsConfig;
    }
}