import { ColorPalette } from "../colorPalette";
import { ITheme, ThemesKeys  } from "./meta";

export const lightTheme: ITheme = {
    text: ColorPalette.DRYADBARK,
    background: ColorPalette.ERRIGAL_WHITE,
    componentBackground: ColorPalette.WHITE,
    border: ColorPalette.GAINSBORO,
    info: ColorPalette.VEGETATION,
    infoBackground: ColorPalette.SOFT_PETALS,
    danger: ColorPalette.CORAL_RED,
    dangerBackground: ColorPalette.TRANSLUCENT_UNICORN,
};

export const darkTheme: ITheme = {
    text: ColorPalette.WHITE,
    background: ColorPalette.ASWAD_BLACK,
    componentBackground: ColorPalette.WASHED_BLACK,
    border: ColorPalette.ASTROGRANITE_DEBRIS,
    info: ColorPalette.VEGETATION,
    infoBackground: ColorPalette.SOFT_PETALS,
    danger: ColorPalette.CORAL_RED,
    dangerBackground: ColorPalette.TRANSLUCENT_UNICORN,
};

export const purpleTheme: ITheme = {
    text: ColorPalette.WHITE,
    background: ColorPalette.DARK_VIOLET,
    componentBackground: ColorPalette.LIGHT_VIOLET,
    border: ColorPalette.MEDIUM_VIOLET,
    info: ColorPalette.VEGETATION,
    infoBackground: ColorPalette.SOFT_VIOLET,
    danger: ColorPalette.CORAL_RED,
    dangerBackground: ColorPalette.TRANSLUCENT_UNICORN,
};

export const themesMap: { [key in ThemesKeys]: ITheme } = {
    "dark": darkTheme,
    "light": lightTheme,
    "purple": purpleTheme,
};

export const themesKeysList = Object.keys(themesMap);

export const DEFAULT_THEME_NAME = ThemesKeys.DARK;

// export const DEFAULT_THEME: ITheme = themesMap[DEFAULT_THEME_NAME];