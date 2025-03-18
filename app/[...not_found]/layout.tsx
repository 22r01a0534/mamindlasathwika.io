export const metadata = {
    title: 'Portfolio - sathwika',
    description: 'Welcome to my portfolio website! I’m currently pursuing my B.Tech and am passionate about connecting with like-minded individuals. Let’s discuss how we can collaborate on exciting projects!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}