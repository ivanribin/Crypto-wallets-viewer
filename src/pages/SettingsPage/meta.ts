export enum SettingsConfigKeys {
    THEME = "theme",
    FONT_FAMILY = "fontFamily",
    FONT_SIZE = "fontSize",
    LOAD_POSTS_COUNT = "loadPostsCount",
    IS_CARDANO_ACTIVE = "isCardanoActive",
};

export const settingsConfigTitles: Record<SettingsConfigKeys, string> = {
    theme: "Application theme",
    fontFamily: "Font type",
    fontSize: "Font size",
    loadPostsCount: "Posts count in one page (Posts Page setting)",
    isCardanoActive: "Cardano block status (Wallets Page setting)",
}

export const IS_LOADING_LOCAL_STORAGE_KEY: string = "isLoading";

export const settingsIdList = Object.values(SettingsConfigKeys);

export interface ISettingsConfigItem {
    id: string;
    title: string;
    labelsMap: any; 
    selectedValue: string;
    setValue: any;
};

export type TSettingsConfig = ISettingsConfigItem[];