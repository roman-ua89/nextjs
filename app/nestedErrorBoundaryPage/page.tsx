'use client'

import { useEffect } from 'react';

export default function NestedErrorBoundaryPgae() {

    useEffect(() => {
        throw new Error('Error during runtime')
    }, [])

    return (
        <>smth</>
    )
}