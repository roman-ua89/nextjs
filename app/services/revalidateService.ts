'use server'

import { revalidatePath } from 'next/cache';

export const revalidatePathService = async () => {
    revalidatePath('/fetchRevalidate')
}