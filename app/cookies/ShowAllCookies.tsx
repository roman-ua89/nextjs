import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { isCookieRemovable } from '@/app/utils/isCookieRemovable';
import { RemoveLink } from '@/app/cookies/RemoveLink';

export const ShowAllCookies = ({ cookies }: { cookies: RequestCookie[] }) => {

    return (
        <>
            <h1>Show all cookies</h1>
            <ul>
                {cookies.map(async(cookie, index) => {
                    const { name, value } = cookie;
                    return (
                        <li
                            className={`px-4 py-2 bg-gray-100 mb-2 rounded-sm hover:bg-gray-200 flex justify-between`}
                            key={name}>
                            <span>{name} : {value}</span>
                            {await isCookieRemovable(name) ? (
                                <RemoveLink name={name} />
                            ) : null}

                        </li>
                    )
                })}
            </ul>
        </>
    )
}