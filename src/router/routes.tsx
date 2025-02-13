import { RouteObject } from "react-router-dom";
import PostsPage from "../pages/Posts";
import SettingsPage from "../pages/Settings";
import WalletsPage from "../pages/Wallets";

export enum PathsTitles {
    POSTS = "posts",
    WALLETS = "wallets",
    SETTINGS = "settings",
}

export enum BasePaths {
    POSTS = "/",
    WALLETS = "/wallets",
    SETTINGS = "/settings",
}

const applicationRoutes: RouteObject[] =[
    {
        id: PathsTitles.POSTS,
        path: BasePaths.POSTS,
        element: <PostsPage />
    },
    {
        id: PathsTitles.WALLETS,
        path: BasePaths.WALLETS,
        element: <WalletsPage />
    },
    {
        id: PathsTitles.SETTINGS,
        path: BasePaths.SETTINGS,
        element: <SettingsPage />
    },
];

export default applicationRoutes;

