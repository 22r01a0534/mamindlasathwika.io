import React from "react";

export async function generateStaticParams() {
    return [{ not_found: [] }];
}

export default function NotFoundPage() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}
