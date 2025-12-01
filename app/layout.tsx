import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
    title: "Dashboard Layout",
    description: "Modern layout with light & dark theme",
};


export default function RootLayout({ children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-background text-foreground flex flex-col min-h-screen transition-colors">
        <Header/>
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}