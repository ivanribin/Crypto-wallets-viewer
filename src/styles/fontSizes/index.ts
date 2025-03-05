export enum FontSizesKeys {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
};

export const fontSizesLabelsMap: {[key in FontSizesKeys]: string} = {
    "small": "Small font size",
    "medium": "Medium font size",
    "large": "Large font size",
};

export const fontSizesValuesMap: {[key in FontSizesKeys]: string} = {
    "small": "small-font",
    "medium": "medium-font",
    "large": "large-font",
};

export const DEFAULT_FONT_SIZE = FontSizesKeys.SMALL;
