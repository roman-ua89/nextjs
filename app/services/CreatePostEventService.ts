'use server'

import { IFetchOperationStatus, IPost } from '@/app/types';
import { revalidatePath } from 'next/cache';

export const createPostEventService = async (_: any, formData: FormData): Promise<IFetchOperationStatus> => {
    const title = formData.get('title')
    const body = formData.get('body')

    const result = await fetch('http://localhost:5001/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body, likes: 0 })
    });

    revalidatePath('/formEvent');

    if (!result.ok) {
        return {
            success: false,
            message: 'Can not create a new post.' + result.statusText
        }
    }

    return {
        success: true,
        message: 'New post created.'
    }


}