/*
* The not-found file is used to render UI when the notFound function is thrown within a route segment.
* */

import Link from 'next/link'
import { Info } from '@/app/_components/Info';

export default function NotFound() {
    return (
        <>
            <Info>
                <p>Invoking the notFound() function throws a NEXT_HTTP_ERROR_FALLBACK;404 error and terminates rendering of the route segment in which it was thrown. Specifying a not-found file allows you to gracefully handle such errors by rendering a Not Found UI within the segment.</p>
            </Info>
            <div className="bg-orange-100 p-2 rounded-md">
                <h2>Not Found</h2>
                <p>This a custom UI component</p>
                <p>In case the Post id was not found this page can be shown</p>
                <Link href="/">Return Home</Link>
            </div>
        </>
    )
}