/*
* run code on the server before a request is completed. Then, based on the incoming request,
* you can modify the response by rewriting, redirecting, modifying the request or response headers,
* or responding directly.
*
* Middleware executes before routes are rendered. It's particularly useful
* for implementing custom server-side logic like authentication, logging, or handling redirects.
* */

// Example of default export
export default function middleware() {
    // Middleware logic
}