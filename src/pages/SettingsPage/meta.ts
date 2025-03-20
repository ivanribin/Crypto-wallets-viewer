import { IApplicationSliceState } from "../../store/slices/Application/meta";

export enum SettingsConfigKeys {
    THEME = "theme",
    FONT_FAMILY = "fontFamily",
    FONT_SIZE = "fontSize",
    LOAD_POSTS_COUNT = "loadPostsCount",
    IS_CARDANO_ACTIVE = "isCardanoActive",
};

export const IS_LOADING_LOCAL_STORAGE_KEY: string = "isLoading";

export const settingsIdList = Object.values(SettingsConfigKeys);

export interface ISettingsConfigItem {
    id: string;
    labelsMap: any; 
    selectedValue: string;
    setValue: any;
};

export type TSettingsConfig = ISettingsConfigItem[];