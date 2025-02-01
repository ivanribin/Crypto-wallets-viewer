import { IApplicationSliceState } from "../../store/slides/Application/meta";

export enum SettingsConfigIds {
    THEME = "theme",
    FONT_FAMILY = "font-family",
    FONT_SIZE = "font-size",
    LOAD_POSTS_COUNT = "load-posts-count",
    IS_CARDANO_ACTIVE = "is-cardano-active",
};

export const settingsIdList = Object.values(SettingsConfigIds);

export interface ISettingsConfigItem {
    id: string;
    valuesNamesList: string[];
    valuesList: any[];
    selectedValue: any;
    setValue: any;
};

export type TSettingsConfig = ISettingsConfigItem[];