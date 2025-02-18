import { ReactElement } from "react";
import { TPosts } from "./meta";
import Post from "../Post";
import "./style.css";

export interface IPostsProps {
    postsList: TPosts;
}

const Posts = ({ postsList }: IPostsProps): ReactElement => (
    <div className="posts-container">
        {postsList.map((postData) => (
            <Post key={`UserID: ${postData.id} ID: ${postData.id}`} postData={postData} />
        ))}
    </div>
);

export default Posts;
