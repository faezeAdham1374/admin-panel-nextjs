export default function Footer() {
    return (
        <footer className="bg-card text-muted-foreground mt-10 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm">© 2025 All rights reserved</p>
                <div className="flex gap-4 text-sm">
                    <a href="#" className="hover:text-primary transition">About</a>
                    <a href="#" className="hover:text-primary transition">Contact</a>
                    <a href="#" className="hover:text-primary transition">Privacy</a>
                </div>
            </div>
        </footer>
    );
}