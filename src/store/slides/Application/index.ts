import LocalStorageService from "../../../services/LocalStorageService";
import { createSlice, type Slice } from "@reduxjs/toolkit";
import { DEFAULT_THEME } from "../../../styles/theme";
import { IApplicationSliceState, CountsLoadPosts, countsLoadPostsMap, CardanoStates, cardanoStatesMap } from "./meta";
import { DEFAULT_FONT_FAMILY } from "../../../styles/fontFamilies";
import { DEFAULT_FONT_SIZE } from "../../../styles/fontSizes";
import { SettingsConfigIds, settingsIdList } from "../../../pages/Settings/meta";

const defaultState: IApplicationSliceState = {
    theme: DEFAULT_THEME,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: DEFAULT_FONT_SIZE,
    loadPostsCount: countsLoadPostsMap[CountsLoadPosts.FEW],
    isCardanoActive: cardanoStatesMap[CardanoStates.INACTIVE],
};

const getSavedApplicationState = (): IApplicationSliceState => {
    const savedApplicationState: IApplicationSliceState = defaultState;
    const applicationStateFieldsKeysList = Object.keys(savedApplicationState);
    
    settingsIdList.forEach((settingId) => {
        const settingValue = LocalStorageService.getLocalStorageRecord(settingId);

        if (!settingValue) {
            return;
        };

        savedApplicationState["font-family"] = DEFAULT_THEME;

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
            LocalStorageService.setLocalStorageRecord(SettingsConfigIds.THEME, newTheme);
        },
        setFontFamily: (state, action) => {
            const newFontFamily = action.payload;

            state.fontFamily = newFontFamily;
            LocalStorageService.setLocalStorageRecord(SettingsConfigIds.FONT_FAMILY, newFontFamily);
        },
        setFontSize: (state, action) => {
            const newFontSize = action.payload;

            state.fontSize = newFontSize;
            LocalStorageService.setLocalStorageRecord(SettingsConfigIds.FONT_SIZE, newFontSize);
        },
        setLoadPostsCount: (state, action) => {
            const newLoadPostsCount = action.payload;

            state.loadPostsCount = newLoadPostsCount;
            LocalStorageService.setLocalStorageRecord(SettingsConfigIds.LOAD_POSTS_COUNT, newLoadPostsCount)
        },
        setIsCardanoActive: (state, action) => {
            const newCardanoStatus = action.payload;

            state.isCardanoActive = newCardanoStatus;
            LocalStorageService.setLocalStorageRecord(SettingsConfigIds.IS_CARDANO_ACTIVE, newCardanoStatus);
        }
    },
});

export const { setTheme, setFontFamily, setFontSize, setLoadPostsCount, setIsCardanoActive } = ApplicationSlice.actions;

export default ApplicationSlice.reducer;


const exampleObject = {
    id: 1,
    value: 1000,
}

const fieldsKeysList = Object.keys(exampleObject) as (keyof typeof exampleObject)[];

fieldsKeysList.forEach((key) => {
    exampleObject[key] = 5;
})



