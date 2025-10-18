'use client' // Error boundaries must be Client Components

/*
* error.js wraps a route segment and its nested children in a React Error Boundary.
* When an error throws within the boundary, the error component shows as the fallback UI.
* */

import { useEffect } from 'react'

export default function Error({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Custom Something went wrong! {error.message}</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}