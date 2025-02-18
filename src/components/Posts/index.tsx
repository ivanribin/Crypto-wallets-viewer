import { ReactElement } from "react";
import { TPosts } from "../../types";
import "./style.css";
import Post from "../Post";

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
