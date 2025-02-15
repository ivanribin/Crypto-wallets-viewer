export enum FontSizesKeys {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
};

export const fontSizesMap: {[key in FontSizesKeys]: string} = {
    "small": "14px",
    "medium": "18px",
    "large": "20px",
};

export const fontSizesKeysList = Object.keys(fontSizesMap);

// export const DEFAULT_FONT_SIZE = fontSizesMap[FontSizes.SMALL];
export const DEFAULT_FONT_SIZE = FontSizesKeys.SMALL;
