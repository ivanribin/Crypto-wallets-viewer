import Post from "../Post";
import { type ReactElement } from "react";
import { type TPosts } from "./meta";
import "./style.css";

export interface IPostsProps {
    postsList: TPosts;
}

const Posts = ({ postsList }: IPostsProps): ReactElement =>
    !postsList.length ? (
        <div className="no-posts">Posts not found</div>
    ) : (
        <div className="posts-container">
            {postsList.map((postData) => (
                <Post
                    key={`UserID: ${postData.id} ID: ${postData.id}`}
                    postData={postData}
                />
            ))}
        </div>
    );
export default Posts;
