/*
* The global-not-found.js file lets you define a 404 page for your entire application.
* Unlike not-found.js, which works at the route level, this is used when a requested URL doesn't match any route at all.
*
* The global-not-found.js file bypasses your app's normal rendering,
* which means you'll need to import any global styles, fonts, or other dependencies that your 404 page requires.
* */

import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
    return (
        <html lang="en" className={inter.className}>
        <body>
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
        </body>
        </html>
    )
}

