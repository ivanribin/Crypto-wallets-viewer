import LocalStorageService from "@services/LocalStorageService";
import { createSlice, type Slice } from "@reduxjs/toolkit";
import { DEFAULT_THEME_NAME } from "@styles/theme";
import { DEFAULT_LOAD_POSTS_COUNT, DEFAULT_CARDANO_STATUS, settingsFieldsIdList, LocalStorageKeys, type IApplicationSliceState } from "./meta";
import { DEFAULT_FONT_FAMILY } from "@styles/fontFamilies";
import { DEFAULT_FONT_SIZE } from "@styles/fontSizes";
import { SettingsConfigKeys } from "@services/SettingsService/meta";

const defaultState: IApplicationSliceState = {
    theme: DEFAULT_THEME_NAME,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: DEFAULT_FONT_SIZE,
    loadPostsCount: DEFAULT_LOAD_POSTS_COUNT,
    isCardanoActive: DEFAULT_CARDANO_STATUS,
    isLoading: false,
};

const getSavedApplicationState = (): IApplicationSliceState => {
    const savedApplicationState: IApplicationSliceState = defaultState;

    settingsFieldsIdList.forEach((settingId) => {
        const settingValue = LocalStorageService.getLocalStorageRecord(settingId);

        if (!settingValue) {
            return;
        };

        savedApplicationState[settingId] = settingValue;
    });

    return savedApplicationState;
};

const initialState = getSavedApplicationState();

const ApplicationSlice: Slice<IApplicationSliceState> = createSlice({
    name: "Application Slice",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            const newTheme = action.payload;

            state.theme = newTheme;
            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.THEME, newTheme);
        },
        setFontFamily: (state, action) => {
            const newFontFamily = action.payload;

            state.fontFamily = newFontFamily;
            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.FONT_FAMILY, newFontFamily);
        },
        setFontSize: (state, action) => {
            const newFontSize = action.payload;

            state.fontSize = newFontSize;
            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.FONT_SIZE, newFontSize);
        },
        setLoadPostsCount: (state, action) => {
            const newLoadPostsCount = action.payload;

            state.loadPostsCount = newLoadPostsCount;
            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.LOAD_POSTS_COUNT, newLoadPostsCount)
        },
        setIsCardanoActive: (state, action) => {
            const newCardanoStatus = action.payload;

            state.isCardanoActive = newCardanoStatus;
            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.IS_CARDANO_ACTIVE, newCardanoStatus);
        },
        resetSettings: (state) => {
            state.theme = DEFAULT_THEME_NAME;
            state.fontFamily = DEFAULT_FONT_FAMILY;
            state.fontSize = DEFAULT_FONT_SIZE;
            state.loadPostsCount = DEFAULT_LOAD_POSTS_COUNT;
            state.isCardanoActive = DEFAULT_CARDANO_STATUS;

            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.THEME, DEFAULT_THEME_NAME);
            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.FONT_FAMILY, DEFAULT_FONT_FAMILY);
            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.FONT_SIZE, DEFAULT_FONT_SIZE);
            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.LOAD_POSTS_COUNT, DEFAULT_LOAD_POSTS_COUNT)
            LocalStorageService.setLocalStorageRecord(SettingsConfigKeys.IS_CARDANO_ACTIVE, DEFAULT_CARDANO_STATUS);
        },
        setIsLoading: (state, action) => {
            const newIsLoading = action.payload;

            state.isLoading = newIsLoading;
            LocalStorageService.setLocalStorageRecord(LocalStorageKeys.IS_LOADING, newIsLoading);
        },
    },
});

export const { setTheme, setFontFamily, setFontSize, setLoadPostsCount, setIsCardanoActive, resetSettings, setIsLoading } = ApplicationSlice.actions;

export default ApplicationSlice.reducer;



