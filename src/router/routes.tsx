import { RouteObject } from "react-router-dom";
import PostsPage from "../pages/PostsPage";
import SettingsPage from "../pages/SettingsPage";
import WalletsPage from "../pages/WalletsPage";

export const enum BasePaths {
    POSTS = "/",
    WALLETS = "/wallets",
    SETTINGS = "/settings",
}

const applicationRoutes: RouteObject[] =[
    {
        id: "posts",
        path: BasePaths.POSTS,
        element: <PostsPage />
    },
    {
        id: "wallets",
        path: BasePaths.WALLETS,
        element: <WalletsPage />
    },
    {
        id: "settings",
        path: BasePaths.SETTINGS,
        element: <SettingsPage />
    },
];

export default applicationRoutes;

