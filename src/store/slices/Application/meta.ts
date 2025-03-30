import { SettingsConfigKeys } from "@services/SettingsService/meta";

export interface IApplicationSliceState {
    theme: string;
    fontFamily: string;
    fontSize: string;
    loadPostsCount: string;
    isCardanoActive: string;
    isLoading: boolean;
}

export type TCountLoadPosts = number;

export enum CountsLoadPostsKeys {
    FEW = "few",
    MEDIUM = "medium",
    LARGE = "large",
};

export const countsLoadPostsLabelsMap: { [key in CountsLoadPostsKeys]: string } = {
    "few": "5 posts per page",
    "medium": "10 posts per page",
    "large": "15 posts per page",
};

export const countsLoadPostsValuesMap: { [key in CountsLoadPostsKeys]: TCountLoadPosts } = {
    "few": 5,
    "medium": 10,
    "large": 15,
};

export const DEFAULT_LOAD_POSTS_COUNT = CountsLoadPostsKeys.FEW;

export enum CardanoStatesKeys {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export type TCardanoState = boolean;

export const cardanoStatesLabelsMap: { [key in CardanoStatesKeys]: string } = {
    "active": "Cardano active",
    "inactive": "Cardano inactive",
}

export const cardanoStatesValuesMap: { [key in CardanoStatesKeys]: TCardanoState } = {
    "active": true,
    "inactive": false,
};

export const DEFAULT_CARDANO_STATUS = CardanoStatesKeys.INACTIVE;

export enum LocalStorageKeys {
    THEME = "theme",
    FONT_FAMILY = "fontFamily",
    FONT_SIZE = "fontSize",
    LOAD_POSTS_COUNT = "loadPostsCount",
    IS_CARDANO_ACTIVE = "isCardanoActive",
    IS_LOADING = "isLoading",
    POSTS_QUERY = "postsQuery",
}

export const settingsFieldsIdList = Object.values(SettingsConfigKeys);

