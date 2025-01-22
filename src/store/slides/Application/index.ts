import { createSlice, type Slice } from "@reduxjs/toolkit";
import { defaultTheme } from "../../../styles/theme";
import { IApplicationSliceState, CountsLoadPosts, TCountLoadPosts } from "./meta";
import { DEFAULT_FONT_FAMILY } from "../../../styles/fontFamilies";
import { DEFAULT_FONT_SIZE } from "../../../styles/fontSizes";

export const countsLoadPostsMap: { [key in CountsLoadPosts]: TCountLoadPosts } = {
    "10": 10,
    "20": 20,
    "30": 30,
};

export const countsLoadPostsNamesList = Object.keys(countsLoadPostsMap);
export const countsLoadPostsList = Object.values(countsLoadPostsMap);


export enum CardanoStates {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export type TCardanoState = boolean;

export const cardanoStatesMap: { [key in CardanoStates]: TCardanoState} = {
    "active": true,
    "inactive": false,
};

export const cardanoStatesNamesList = Object.keys(cardanoStatesMap);
export const cardanoStatesList = Object.values(cardanoStatesMap);

const initialState: IApplicationSliceState = {
    theme: defaultTheme,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: DEFAULT_FONT_SIZE,
    countLoadPosts: countsLoadPostsMap[CountsLoadPosts.FEW],
    isCardanoActive: cardanoStatesMap[CardanoStates.INACTIVE],
};

const ApplicationSlice: Slice<IApplicationSliceState> = createSlice({
    name: "Application Slice",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setFontFamily: (state, action) => {
            state.fontFamily = action.payload;
        },
        setFontSize: (state, action) => {
            state.fontSize = action.payload;
        },
        setCountLoadPosts: (state, action) => {
            state.countLoadPosts = action.payload;
        },
        setIsCardanoActive: (state, action) => {
            state.isCardanoActive = action.payload;
        }
    },
});

export const { setTheme, setFontFamily, setFontSize, setCountLoadPosts, setIsCardanoActive } = ApplicationSlice.actions;

export default ApplicationSlice.reducer;

