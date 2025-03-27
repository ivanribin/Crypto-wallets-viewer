export enum ThemesKeys {
    DARK = "dark",
    LIGHT = "light",
    PURPLE = "purple",
};

export const themesLabelsMap: { [key in ThemesKeys]: string } = {
    "dark": "Dark",
    "light": "Light",
    "purple": "Purple",
};

export const themesValuesMap: { [key in ThemesKeys]: string } = {
    "dark": "dark",
    "light": "light",
    "purple": "purple",
};

export const DEFAULT_THEME_NAME = ThemesKeys.DARK;