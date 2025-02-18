import ApplicationRouter from "../../router";
import { type ReactElement } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../../store";
import { ApplicationStateService } from "../../services/ApplicationStateService";
import { IApplicationSliceState } from "../../store/slices/Application/meta";
import "./style.css";

const Application = (): ReactElement => {
    const currentApplicationState: IApplicationSliceState = useSelector(
        (state: TRootState) => state.application
    );

    // console.log(currentApplicationState);

    ApplicationStateService.updateApplicationState(currentApplicationState, document.body);

    return <ApplicationRouter />;
};

export default Application;
