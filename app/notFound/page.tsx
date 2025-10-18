import { notFound } from 'next/navigation';

export default async function NotFoundPage() {
    const res = await fetch('http://localhost:5001/post/111111'); // not existing it

    if (!res.ok) {
        notFound();
    }

    return (
        <div>This part will not be shown</div>
    )
}