export enum ThemesKeys {
    DARK = "dark",
    LIGHT = "light",
    purple = "purple",
};

export interface ITheme {
    text: string;
    background: string;
    componentBackground: string;
    border: string;
    info: string;
    infoBackground: string;
    danger: string;
    dangerBackground: string;
};