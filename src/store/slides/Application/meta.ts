import { ITheme } from "../../../styles/theme/meta";
import { TFontFamily } from "../../../styles/fontFamilies";
import { TFontSize } from "../../../styles/fontSizes";

export interface IApplicationSliceState {
    theme: ITheme;
    fontFamily: TFontFamily;
    fontSize: TFontSize;
    countLoadPosts: number;
    isCardanoActive: boolean;
};

export type TCountLoadPosts = number;

export enum CountsLoadPosts {
    FEW = "10",
    MEDIUM = "20",
    LARGE = "30",
};