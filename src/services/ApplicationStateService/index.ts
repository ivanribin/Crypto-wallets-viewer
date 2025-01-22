import { IApplicationSliceState } from "../../store/slides/Application/meta";

export class ApplicationStateService {
    public static updateApplicationState(selectedApplicationState: IApplicationSliceState, applicationBody: HTMLElement): void {
        const selectedTheme = selectedApplicationState.theme;
        const selectedFontFamily = selectedApplicationState.fontFamily;
        const selectedFontSize = selectedApplicationState.fontSize;

        applicationBody.style.color = selectedTheme.text;
        applicationBody.style.backgroundColor = selectedTheme.background;
        applicationBody.style.fontFamily = selectedFontFamily;
        applicationBody.style.fontSize = selectedFontSize;
    }
}