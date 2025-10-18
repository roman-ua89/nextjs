'use server'

import { AddCookieForm } from '@/app/cookies/AddCookieForm';
import { ShowAllCookies } from '@/app/cookies/ShowAllCookies';
import { getAllCookiesAction } from '@/app/cookies/actions';


export default async function CookiesPage() {
    const allCookies = await getAllCookiesAction();

    return (
        <>
            <h1>Cookies</h1>
            <AddCookieForm />
            <ShowAllCookies cookies={allCookies} />
        </>
    )
}