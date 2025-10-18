import {getComparedPosts} from "@/app/services/getComparedPosts";
import {RenderPost} from "@/app/compare/RenderPost";

interface Props {
    params: Promise<{ids: string[]}>
}
// [[...slug]] - Optional Catch-all Segments

export default async function ComparePosts({params}: Props) {
    const { ids } = await params;
    const result = await getComparedPosts(ids);

    return (
        <>
            <h1 className="mb-5">Compare page</h1>
            <div className="flex grow bg-gray-50 rounded-2xl border-1 border-gray-300 p-3 gap-6">
                {result.map(post => {
                    return (
                        <RenderPost key={post.id} post={post} />
                    )
                })}
            </div>
        </>
    )
}