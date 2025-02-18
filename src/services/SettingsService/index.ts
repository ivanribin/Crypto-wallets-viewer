<<<<<<< HEAD
import { TSettingsConfig, SettingsConfigKeys } from "../../pages/Settings/meta";
=======
import { TSettingsConfig, SettingsConfigIds } from "../../pages/Settings/meta";
>>>>>>> 0dcff36d7033773a14efcbb264cdb0a45a9de962
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
<<<<<<< HEAD
                id: SettingsConfigKeys.THEME,
=======
                id: SettingsConfigIds.THEME,
>>>>>>> 0dcff36d7033773a14efcbb264cdb0a45a9de962
                keysList: themesKeysList,
                selectedKey: currentApplicationState.theme,
                setValue: setTheme,
            },
            {
<<<<<<< HEAD
                id: SettingsConfigKeys.FONT_FAMILY,
=======
                id: SettingsConfigIds.FONT_FAMILY,
>>>>>>> 0dcff36d7033773a14efcbb264cdb0a45a9de962
                keysList: fontFamiliesKeysList,
                selectedKey: currentApplicationState.fontFamily,
                setValue: setFontFamily,
            },
            {
<<<<<<< HEAD
                id: SettingsConfigKeys.FONT_SIZE,
=======
                id: SettingsConfigIds.FONT_SIZE,
>>>>>>> 0dcff36d7033773a14efcbb264cdb0a45a9de962
                keysList: fontSizesKeysList,
                selectedKey: currentApplicationState.fontSize,
                setValue: setFontSize,
            },
            {
<<<<<<< HEAD
                id: SettingsConfigKeys.LOAD_POSTS_COUNT,
=======
                id: SettingsConfigIds.LOAD_POSTS_COUNT,
>>>>>>> 0dcff36d7033773a14efcbb264cdb0a45a9de962
                keysList: countsLoadPostsKeysList,
                selectedKey: currentApplicationState.loadPostsCount,
                setValue: setLoadPostsCount,
            },
            {
<<<<<<< HEAD
                id: SettingsConfigKeys.IS_CARDANO_ACTIVE,
=======
                id: SettingsConfigIds.IS_CARDANO_ACTIVE,
>>>>>>> 0dcff36d7033773a14efcbb264cdb0a45a9de962
                keysList: cardanoStatesKeysList,
                selectedKey: currentApplicationState.isCardanoActive,
                setValue: setIsCardanoActive,
            },
        ];

        return settingsConfig;
    }
}