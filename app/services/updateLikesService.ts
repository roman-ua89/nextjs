'use server'

import { LikeAction } from '@/app/types';
import { getPost } from '@/app/services/getPost';

interface IProps {
    likes: number;
    action: LikeAction;
    postId: string;
}

export const updateLikesService = async (initialValue: number, data: IProps): Promise<number> => {
    const { likes: prevLikesNumber, action, postId } = data;
    let nextLikesNumber = 0;

    if (action === 'up') {
        nextLikesNumber = prevLikesNumber + 1;
    } else if (action === 'down') {
        nextLikesNumber = prevLikesNumber - 1;
    }

    const patchResult = await fetch(`http://localhost:5001/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({likes: nextLikesNumber})
    });

    if (!patchResult.ok) {
        // TODO: handle error
        throw new Error('Can\'t update likes')
    }

    const post = await getPost(postId);

    return post.likes;
}