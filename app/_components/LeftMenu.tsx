import { ContainerLabel } from '@/app/_components/ContainerLabel';
import Link from 'next/link';

export const LeftMenu = () => {

    return (
        <aside>
            <ContainerLabel name="Left menu">
                <ul>
                    <li><Link href="/streaming">Streaming</Link></li>
                    <li><Link href="/fetchServer">Fetch Server</Link></li>
                    <li><Link href="/fetchClient">Fetch Client</Link></li>
                    <li><Link href="/formAction">Form Action</Link></li>
                    <li><Link href="/formEvent">Form Event</Link></li>
                    <li><Link href="/cookies">Cookies</Link></li>
                    <li><Link href="/connection">Connection</Link></li>
                    <li><Link href="/fetchRevalidate">Fetch Revalidate</Link></li>
                    <li><Link href="/notFound">Not found</Link></li>
                    <li><Link href="/notFound1">Global Not found</Link></li>
                    <li><Link href="/nestedErrorBoundary">Nested Error Boundary</Link></li>
                    <li><Link href="/globalErrorBoundary">Global Error Boundary</Link></li>
                    <li><Link href="/compare/1/2">Compare posts IDs 1 and 2</Link></li>
                    <li><Link href="/imageOptimization">Image optimization</Link></li>
                </ul>

            </ContainerLabel>
        </aside>
    )
}