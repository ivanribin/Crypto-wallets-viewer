import NavigationBar from "@components/NavigationBar";
import applicationRoutes from "./routes";
import { type ReactElement } from "react";
import {
    Route,
    Routes,
    BrowserRouter as Router,
    type RouteObject,
} from "react-router-dom";

const ApplicationRouter = (): ReactElement => (
    <Router>
        <NavigationBar />

        <Routes>
            {applicationRoutes.map((route: RouteObject) => (
                <Route
                    key={route.id}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    </Router>
);

export default ApplicationRouter;
