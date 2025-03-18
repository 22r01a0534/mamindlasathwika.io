export default function NotFoundPage() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

// Fix: Add this function for static export
export function generateStaticParams() {
    return [{ not_found: [] }]; // Empty array to handle catch-all route
}
