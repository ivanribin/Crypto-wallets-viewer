export const enum SettingsConfigIdList {
    THEME = "theme",
    FONT_FAMILY = "font-family",
    FONT_SIZE = "font-size",
    COUNT_LOAD_POSTS = "count-load-posts",
    IS_CARDANO_ACTIVE = "is-cardano-active",
};

export interface ISettingsConfigItem {
    id: string;
    valuesNamesList: string[];
    valuesList: any[];
    selectedValue: any;
    setValue: any;
};

export type TSettingsConfig = ISettingsConfigItem[];