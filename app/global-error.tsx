'use client'; // Error boundaries must be Client Components

import Link from 'next/link';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.log('error', error);

    return (
        // global-error must include html and body tags
        <html>
            <body>
                <h2>Something went wrong! on a Global level {error.message}</h2>
                <button onClick={() => reset()} className="btn btn-primary">Try again</button>
                <div>
                    <Link href={'/'}>To Home</Link>
                </div>
            </body>
        </html>
    );
}
