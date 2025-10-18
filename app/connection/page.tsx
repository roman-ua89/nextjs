'use server';

import { connection } from 'next/server';
import { Info } from '@/app/_components/Info';

export default async function ConnectionPage() {
    await connection();
    const rand = Math.random();

    return (
        <>
            <h1>Connection</h1>
            <Info>
                <p>
                    The connection() function allows you to indicate rendering
                    should wait for an incoming user request before continuing.
                </p>
                <p>
                    t's useful when a component doesn’t use Dynamic APIs, but
                    you want it to be dynamically rendered at runtime and not
                    statically rendered at build time. This usually occurs when
                    you access external information that you intentionally want
                    to change the result of a render, such as Math.random() or
                    new Date().
                </p>
            </Info>
            <span>
                Random number: <b>{rand}</b>
            </span>
        </>
    );
}
