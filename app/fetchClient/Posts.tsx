'use client'

import { IPostItem } from '@/app/types';
import { use } from 'react';

export const Posts = ({data}: {data: Promise<IPostItem[]>}) => {
    const posts = use(data);

    return (
        <main>
            <h1>Client component which renders posts</h1>
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