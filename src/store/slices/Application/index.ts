import LocalStorageService from "../../../services/LocalStorageService";
import { createSlice, type Slice } from "@reduxjs/toolkit";
import { DEFAULT_THEME_NAME } from "../../../styles/theme";
import { IApplicationSliceState, CountsLoadPostsKeys, CardanoStatesKeys, IsLoadingKeys } from "./meta";
import { DEFAULT_FONT_FAMILY } from "../../../styles/fontFamilies";
import { DEFAULT_FONT_SIZE } from "../../../styles/fontSizes";
import { IS_LOADING_LOCAL_STORAGE_KEY, SettingsConfigKeys, settingsIdList } from "../../../pages/SettingsPage/meta";

const defaultState: IApplicationSliceState = {
    theme: DEFAULT_THEME_NAME,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: DEFAULT_FONT_SIZE,
    loadPostsCount: CountsLoadPostsKeys.FEW,
    isCardanoActive: CardanoStatesKeys.INACTIVE,
    isLoading: IsLoadingKeys.FALSE,
};

const getSavedApplicationState = (): IApplicationSliceState => {
    const savedApplicationState: IApplicationSliceState = defaultState;
    
    settingsIdList.forEach((settingId) => {
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
        setIsLoading: (state, action) => {
            const newIsLoading = action.payload;

            console.log(newIsLoading);
            
            state.isLoading = newIsLoading;
            LocalStorageService.setLocalStorageRecord(IS_LOADING_LOCAL_STORAGE_KEY, newIsLoading);
        }
    },
});

export const { setTheme, setFontFamily, setFontSize, setLoadPostsCount, setIsCardanoActive, setIsLoading } = ApplicationSlice.actions;

export default ApplicationSlice.reducer;



