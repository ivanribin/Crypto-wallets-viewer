import NavigationBar from "@components/NavigationBar";
import { type ReactElement } from "react";

const Header = (): ReactElement => (
    <header className="application-header">
        <NavigationBar />
    </header>
)

export default Header;