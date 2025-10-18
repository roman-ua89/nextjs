import {getPostsService} from "@/app/services/getPostsService";
import Link from "next/link";

export const PostsWrapper = async () => {
    const posts = await getPostsService();

    return (
        <>
            <h2>Posts</h2>
            <ol className="">
                {posts.map(post => {
                    const { title, id } = post;

                    return (
                        <li key={id} className="mb-1">
                            <Link
                                href={`/post/${id}`}
                                className="text-xl underline hover:no-underline">{title}</Link>
                        </li>
                    )
                })}
            </ol>
        </>
    )
}