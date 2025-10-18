'use client';

import { useActionState, startTransition } from 'react';
import { updateLikesService } from '@/app/services/updateLikesService';
import { LikeAction } from '@/app/types';

interface IProps {
    initialValue: number;
    postId: string;
}

export const Likes = ({ initialValue, postId }: IProps) => {
    const [likes, likesAction, isPending] = useActionState(
        updateLikesService,
        initialValue,
    );

    const updateLikes = (action: LikeAction) => {
        startTransition(() => {
            likesAction({ likes, action, postId });
        });
    };

    return (
        <div className="flex gap-1 text-sm text-gray-400">
            <button
                disabled={isPending}
                className="btn-like"
                onClick={() => updateLikes('up')}
            >
                Up
            </button>
            <span className={`${likes < 0 ? 'text-red-400' : 'text-blue-400'}`}>
                {likes}
            </span>
            <button
                disabled={isPending}
                className="btn-like"
                onClick={() => updateLikes('down')}
            >
                Down
            </button>
        </div>
    );
};
