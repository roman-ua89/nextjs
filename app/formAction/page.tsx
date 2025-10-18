import { Info } from '@/app/_components/Info';
import { createPostService } from '@/app/services/createPostService';
import { PostsWrapper } from '@/app/_components/PostsWrapper';

export default function FormAction() {

    return (
        <>
            <h1>Form Action</h1>
            <Info>
                <p>React extends the HTML `form` element to allow Server Function to be invoked with the HTML action prop.</p>
                <p>When invoked in a form, the function automatically receives the FormData object. You can extract the data using the native FormData methods:</p>
            </Info>
            <form action={createPostService}>
                <div className="mb-4">
                    <label htmlFor="post-title">Post title</label>
                    <input type="text" id="post-title" name="title" />
                </div>
                <div className="mb-4">
                    <label htmlFor="post-title">Post body</label>
                    <textarea id="post-body" name="body" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <PostsWrapper />
        </>
    )
}