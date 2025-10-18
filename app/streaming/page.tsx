import { Info } from '@/app/_components/Info';
import { Suspense } from 'react';
import { Skeleton } from '@/app/_components/Skeleton';
import { DynamicComponent } from '@/app/_components/DynamyrComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Streaming',
    description: 'description about streaming',
}

export default function Streaming () {

    return (
        <main className="">
            <Info>
                <p>Streaming allows the server to send parts of a dynamic route to the client as soon as they're ready, rather than waiting for the entire route to be rendered. This means users see something sooner, even if parts of the page are still loading.</p>
                <p>For dynamic routes, it means they can be partially prefetched. That is, shared layouts and loading skeletons can be requested ahead of time.</p>
            </Info>
            <div className="bg-purple-100 border-1 border-purple-200 rounded-sm p-2">
                <p>Static area on server</p>
                <Suspense fallback={<Skeleton />}>
                    <DynamicComponent type="resolve" delay={500} />
                </Suspense>
                <Suspense fallback={<Skeleton />}>
                    <DynamicComponent type="resolve" delay={800} />
                </Suspense>
                <Suspense fallback={<Skeleton />}>
                    <DynamicComponent type="resolve" delay={1100} />
                </Suspense>

            </div>
        </main>
    )
}