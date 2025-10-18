import { Info } from '@/app/_components/Info';
import { IPostItem } from '@/app/types';

export default async function FetchPage() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await data.json() as IPostItem[];

    return (
        <main className="">
            <Info>
                <p>To fetch data with the fetch API, turn your component into an asynchronous function, and await the fetch call.</p>
            </Info>
            <ul className="list-decimal pl-5">
                {posts.map(post => {
                    const { id, title } = post;
                    return (
                        <li key={id}>{title}</li>
                    )
                })}
            </ul>
        </main>
    )
}