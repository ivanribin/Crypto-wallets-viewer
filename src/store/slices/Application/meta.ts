export interface IApplicationSliceState {
    theme: string;
    fontFamily: string;
    fontSize: string;
    loadPostsCount: string;
    isCardanoActive: string;
    isLoading: string;
}

export type TCountLoadPosts = number;

export enum CountsLoadPostsKeys {
    FEW = "few",
    MEDIUM = "medium",
    LARGE = "large",
};

export const countsLoadPostsLabelsMap: { [key in CountsLoadPostsKeys]: string } = {
    "few": "10 posts per page",
    "medium": "20 posts per page",
    "large": "30 posts per page",
};

export const countsLoadPostsValuesMap: { [key in CountsLoadPostsKeys]: TCountLoadPosts } = {
    "few": 10,
    "medium": 20,
    "large": 30,
};

export enum CardanoStatesKeys {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export type TCardanoState = boolean;

export const cardanoStatesLabelsMap: { [key in CardanoStatesKeys]: string } = {
    "active": "Cardano active",
    "inactive": "Cardano inactive",
} 

export const cardanoStatesValuesMap: { [key in CardanoStatesKeys]: TCardanoState} = {
    "active": true,
    "inactive": false,
};

export const enum IsLoadingKeys {
    TRUE = "true",
    FALSE = "false",
};

export const isLoadingValuesMap: { [key in IsLoadingKeys]: boolean } = {
    "true": true,
    "false": false,
}

