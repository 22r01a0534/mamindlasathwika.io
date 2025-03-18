import type { Viewport } from 'next'

export const viewport = {
    themeColor: "#ffffff", // Example color
    colorScheme: "light dark", // Updated to a single value for clarity
};
export const metadata = {
    title: 'Portfolio - Sathwika', // Capitalized 'Sathwika' for consistency
    description: "Welcome to my portfolio website! I'm currently pursuing my B.Tech and am passionate about connecting with like-minded individuals. Let's discuss how we can collaborate on exciting projects!",
    
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-100">{children}</body> {/* Added a background color for better visibility */}
        </html>
    );
}
