import { type ReactElement } from "react";
import { type IPost } from "./meta";
import "./style.css";

export interface IPostProps {
    postData: IPost;
}

const Post = ({ postData }: IPostProps): ReactElement => {
    const { userId, id, title, body } = postData;

    return <div className="post-container">
        <div className="post user-id">
            <h2>User ID</h2>
            {userId}
        </div>
        <div className="post id">
            <h2>ID</h2>
            {id}
        </div>
        <div className="post title">
            <h2>Title</h2>
            {title}
        </div>
        <div className="post body">
            <h2>Body</h2>
            {body}
        </div>
    </div>;
};

export default Post;
