export enum ThemesNames {
    DARK = "dark",
    LIGHT = "light",
    PIRPLE = "pirple",
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