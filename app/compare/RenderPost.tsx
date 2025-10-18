import {IPostItem} from "@/app/types";

export const RenderPost = ({post}: { post: IPostItem }) => {
    const { title, body } = post;

    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}