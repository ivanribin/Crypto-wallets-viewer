import { type ReactElement } from "react";
import ApplicationRouter from "../../router";
import "./style.css";
import NavigationBar from "../NavigationBar";

const Application = (): ReactElement => (
    <div>
        <ApplicationRouter />
    </div>
);

export default Application;
