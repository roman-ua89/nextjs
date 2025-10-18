'use client';

import {useState} from "react";

export default function Dashboard () {
    const [error, setError] = useState(false);

    if (error) {
        throw new Error('Manually generated error')
    }

    return (
        <>
            <h1>Dashboard</h1>
            <button className="bg-amber-800" onClick={() => setError(true)}>throw error</button>
        </>
    )
}