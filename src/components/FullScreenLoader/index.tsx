import { type ReactElement } from "react";
import "./style.css";

const FullScreenLoader = (): ReactElement => (
    <div className="full-screen-loader">
        <div className="loader"></div>
    </div>
);

export default FullScreenLoader;
