import { IApplicationSliceState } from "../../store/slices/Application/meta";

export enum SettingsConfigIds {
    THEME = "theme",
    FONT_FAMILY = "fontFamily",
    FONT_SIZE = "fontSize",
    LOAD_POSTS_COUNT = "loadPostsCount",
    IS_CARDANO_ACTIVE = "isCardanoActive",
};

export const settingsIdList = Object.values(SettingsConfigIds);

export interface ISettingsConfigItem {
    id: string;
    keysList: string[];
    selectedKey: string;
    setValue: any;
};

export type TSettingsConfig = ISettingsConfigItem[];