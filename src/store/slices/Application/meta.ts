import { fontFamiliesMap } from "../../../styles/fontFamilies";
import { fontSizesMap } from "../../../styles/fontSizes";
import { themesMap } from "../../../styles/theme";

// export interface IApplicationSliceState {
//     theme: ITheme;
//     fontFamily: TFontFamily;
//     fontSize: TFontSize;
//     loadPostsCount: number;
//     isCardanoActive: boolean;
// };

export interface IApplicationSliceState {
    theme: string;
    fontFamily: string;
    fontSize: string;
    loadPostsCount: string;
    isCardanoActive: string;
}

export type TCountLoadPosts = number;

export enum CountsLoadPostsKeys {
    FEW = "few",
    MEDIUM = "medium",
    LARGE = "large",
};

export const countsLoadPostsMap: { [key in CountsLoadPostsKeys]: TCountLoadPosts } = {
    "few": 10,
    "medium": 20,
    "large": 30,
};

export const countsLoadPostsKeysList = Object.keys(countsLoadPostsMap);

export enum CardanoStatesKeys {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export type TCardanoState = boolean;

export const cardanoStatesMap: { [key in CardanoStatesKeys]: TCardanoState} = {
    "active": true,
    "inactive": false,
};

export const cardanoStatesKeysList = Object.keys(cardanoStatesMap);