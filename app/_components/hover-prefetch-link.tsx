'use client'

import Link from 'next/link'
import { useState } from 'react'

export function HoverPrefetchLink({
           href,
           children,
            ...other
       }: {
    href: string
    children: React.ReactNode
}) {
    const [active, setActive] = useState(false)

    return (
        <Link
            {...other}
            href={href}
            prefetch={active ? null : false}
            onMouseEnter={() => setActive(true)}
        >
            {children}
        </Link>
    )
}