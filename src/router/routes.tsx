import WalletsPage from "@pages/WalletsPage";
import PostsPage from "@pages/PostsPage";
import SettingsPage from "@pages/SettingsPage";
import { RouteObject } from "react-router";

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

export const paths = {
    POSTS: {
        id: PathsTitles.POSTS,
        path: BasePaths.POSTS,
    },
    WALLETS: {
        id: PathsTitles.WALLETS,
        path: BasePaths.WALLETS,
    },
    SETTINGS: {
        id: PathsTitles.SETTINGS,
        path: BasePaths.SETTINGS,
    },
    NOT_FOUND: {
        id: "notFound",
        path: "*",
    },
};

const routes: RouteObject[] = [
    {
        ...paths.POSTS,
        element: <PostsPage />,
    },
    {
        ...paths.WALLETS,
        element: <WalletsPage />,
    },
    {
        ...paths.SETTINGS,
        element: <SettingsPage />,
    },
    {
        ...paths.NOT_FOUND,
        element: <></>,
    }
];

export default routes;
