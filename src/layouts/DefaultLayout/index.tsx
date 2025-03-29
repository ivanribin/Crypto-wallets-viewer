import Header from "@components/Header";
import { type ReactNode, type ReactElement } from "react";
import "./style.css";

export interface IDefaultLayoutProps {
    children: ReactElement | ReactNode;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): ReactElement => (
    <div className="default-layout">
        <Header />
        <div className="content-container">{children}</div>
    </div>
);

export default DefaultLayout;
