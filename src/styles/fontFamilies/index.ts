export enum FontFamiliesKeys {
    ARIAL = "Arial",
    GEORGIA = "Georgia",
    COURIER_NEW = "Courier New",
};

export const fontFamiliesMap: { [key in FontFamiliesKeys]: string } = {
    "Arial": "Arial",
    "Georgia": "Georgia",
    "Courier New": "Courier New",
};

export const fontFamiliesKeysList = Object.keys(fontFamiliesMap);

// export const DEFAULT_FONT_FAMILY = fontFamiliesMap[FontFamilies.ARIAL];
export const DEFAULT_FONT_FAMILY = FontFamiliesKeys.ARIAL;