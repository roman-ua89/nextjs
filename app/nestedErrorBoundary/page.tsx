import { Info } from '@/app/_components/Info';
import { redirect } from 'next/navigation';

export default function NestedErrorBoundaryPage() {

    const goToPage = async () => {
        'use server'
        redirect('/nestedErrorBoundaryPage');
    }

    return (
        <>
            <h1>Nested Error Boundary</h1>
            <Info>
                <p>Next.js uses error boundaries to handle uncaught exceptions. Error boundaries catch errors in their child components and display a fallback UI instead of the component tree that crashed.</p>
                <p>Errors will bubble up to the nearest parent error boundary. This allows for granular error handling by placing error.tsx files at different levels in the route hierarchy.</p>
            </Info>
            <Info>
                <p>Error boundaries <b>don’t catch errors inside event handlers</b>. They’re designed to catch errors during rendering</p>
                <p>In general, errors in event handlers or async code aren’t handled by error boundaries because they run after rendering.</p>
            </Info>
            <button className="btn btn-primary" onClick={goToPage}>Go to page with run time error</button>
        </>
    )
}