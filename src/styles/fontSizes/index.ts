export type TFontSize = string;

export enum FontSizes {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
};

export const fontSizesMap: {[key in FontSizes]: TFontSize} = {
    "small": "14px",
    "medium": "18px",
    "large": "20px",
};

export const fontSizesNamesList = Object.keys(fontSizesMap);
export const fontSizesList = Object.values(fontSizesMap);

export const DEFAULT_FONT_SIZE = fontSizesMap[FontSizes.SMALL];