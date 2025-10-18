'use client'

import { removeCookieAction } from '@/app/cookies/actions';

export const RemoveLink = ({name}: {name: string}) => {

    return (
        <a href="#" onClick={() => removeCookieAction(name)}>Remove</a>
    )
}