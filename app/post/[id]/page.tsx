import {getPost} from "@/app/services/getPost";
import {notFound} from "next/navigation";
import {getPostsService} from "@/app/services/getPostsService";
import { Likes } from '@/app/_components/Likes';
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
    params: Promise<{id: string}>
}

export const dynamicParams = true; // true | false
// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
// true (default): Dynamic segments not included in generateStaticParams are generated on demand.
// false: Dynamic segments not included in generateStaticParams will return a 404.

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).id

    // fetch post information
    const post = await fetch(`http://localhost:5001/posts/${id}`).then((res) =>
        res.json()
    )

    return {
        title: post.title,
    }
}

// make all posts on server static
export async function generateStaticParams() {
    const posts = await getPostsService();

    return posts.map((post) => ({
        id: String(post.id),
    }))
}

export default async function Post({params}: Props) {
    const { id } = await params;
    const post = await getPost(id);
    const { title, body, likes } = post;

    if (!title || !body) {
        notFound();
    }

    return (
        <>
            <h1>Post page</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <Likes initialValue={likes} postId={id} />
        </>
    )
}