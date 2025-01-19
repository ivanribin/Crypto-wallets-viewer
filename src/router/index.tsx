import { type ReactElement } from "react";
import {
    Route,
    Routes,
    BrowserRouter as Router,
    type RouteObject,
} from "react-router-dom";
import applicationRoutes from "./routes";

const ApplicationRouter = (): ReactElement => (
    <Router>
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
