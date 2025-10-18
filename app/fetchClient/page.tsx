import { Suspense } from 'react';
import { Posts } from '@/app/fetchClient/Posts';
import { IPostItem } from '@/app/types';
import { Info } from '@/app/_components/Info';

export default function FetchClient() {
    const data = fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(data => data.json() as Promise<IPostItem[]>);

    return (
        <>
            <Info>
                <p>Server component does not have async/await</p>
            </Info>
            <Suspense fallback={<div>Client component is loading</div>}>
                <Posts data={data} />
            </Suspense>
        </>
    )
}