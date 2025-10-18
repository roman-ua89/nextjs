'use server'

import { cookies } from 'next/headers';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { revalidatePath } from 'next/cache';

export const setCookieAction = async (formData: FormData): Promise<void> => {
    const name = formData.get('name') as string;
    const value = formData.get('value') as string;

    const cookieStore = await cookies();
    cookieStore.set(name, value);
    revalidatePath('/cookies')
}

export const getAllCookiesAction = async (): Promise<RequestCookie[]> => {
    const cookieStore = await cookies();
    return cookieStore.getAll();
}

export const removeCookieAction = async (name: string) => {

    (await cookies()).delete(name)
    // (await cookies()).set(name, '')
    // (await cookies()).set('name', 'value', { maxAge: 0 })
    revalidatePath('/cookies')
    // try {
    //
    // } catch (e) {
    //     const errorMsg = e instanceof Error ? e.message : String(e);
    //     throw new Error(errorMsg);
    // }
}