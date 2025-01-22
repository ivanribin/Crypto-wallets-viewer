export type TFontFamily = string;

export enum FontFamilies {
    ARIAL = "Arial",
    GEORGIA = "Georgia",
    COURIER_NEW = "Courier New",
};

export const fontFamiliesMap: { [key in FontFamilies]: TFontFamily } = {
    "Arial": "Arial",
    "Georgia": "Georgia",
    "Courier New": "Courier New",
};

export const fontFamiliesNamesList = Object.keys(fontFamiliesMap);
export const fontFamiliesList = Object.values(fontFamiliesMap);


export const DEFAULT_FONT_FAMILY = fontFamiliesMap[FontFamilies.ARIAL];