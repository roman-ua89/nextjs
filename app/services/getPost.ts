import { IPost } from '@/app/types';

export const getPost = async (id: string): Promise<IPost> => {
    return await fetch(`http://localhost:5001/posts/${id}`).then(data => data.json());
}