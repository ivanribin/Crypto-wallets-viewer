export enum FontFamiliesKeys {
    ARIAL = "arial",
    GEORGIA = "georgia",
    COURIER_NEW = "courier new",
};

export const fontFamiliesLabelsMap: { [key in FontFamiliesKeys]: string } = {
    "arial": "Arial",
    "georgia": "Georgia",
    "courier new": "Courier New",
};

export const fontFamiliesValuesMap: { [key in FontFamiliesKeys]: string } = {
    "arial": "arial",
    "georgia": "georgia",
    "courier new": "courier-new",
};

// export const fontFamiliesKeysList = Object.keys(fontFamiliesMap);
// export const fontFamiliesValuesList = Object.values(fontFamiliesMap);

export const DEFAULT_FONT_FAMILY = FontFamiliesKeys.ARIAL;