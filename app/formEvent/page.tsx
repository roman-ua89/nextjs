import { PostsWrapper } from '@/app/_components/PostsWrapper';
import { CreatePostForm } from '@/app/formEvent/CreatePostForm';
import { Info } from '@/app/_components/Info';

export default function FormEvent() {

    return (
        <>
            <h1>Form Event</h1>
            <Info>
                <p>After performing an update, you can revalidate the Next.js cache and show the updated data by calling revalidatePath or revalidateTag within the Server Function.</p>
                <p><b>revalidatePath</b> allows you to invalidate cached data on-demand for a specific path. Can be called in Server Functions and Route Handlers.</p>
                <p><b>revalidatePath</b> cannot be called in Client Components or Middleware, as it only works in server environments.</p>
                <p><b>revalidateTag</b> invalidates data with specific tags across all pages that use those tags, while revalidatePath invalidates specific page or layout paths. Can be called in Server Functions and Route Handlers.</p>
                <p>You can add tags to fetch as follows: <i>{`fetch(url, { next: { tags: [...] } });`}</i></p>
            </Info>
            <CreatePostForm />
            <PostsWrapper />
        </>

    )
}