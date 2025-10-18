import { Info } from '@/app/_components/Info';
import { redirect } from 'next/navigation';

export default function Page() {

    const goToPage = async () => {
        'use server'
        redirect('/globalErrorBoundaryPage')
    }

    return (
        <>
            <h1>Global errors</h1>
            <Info>
                <p>While less common, you can handle errors in the root layout using the global-error.js file, located in the root app directory, even when leveraging internationalization. Global error UI must define its own 'html' and 'body' tags, since it is replacing the root layout or template when active.</p>
            </Info>
            <button onClick={goToPage} className="btn btn-primary">Go to page with error</button>
        </>
    )
}