import { ITheme } from "../../../styles/theme/meta";
import { TFontFamily } from "../../../styles/fontFamilies";
import { TFontSize } from "../../../styles/fontSizes";

export interface IApplicationSliceState {
    theme: ITheme;
    fontFamily: TFontFamily;
    fontSize: TFontSize;
    loadPostsCount: number;
    isCardanoActive: boolean;
};

export type TCountLoadPosts = number;

export enum CountsLoadPosts {
    FEW = "10",
    MEDIUM = "20",
    LARGE = "30",
};

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