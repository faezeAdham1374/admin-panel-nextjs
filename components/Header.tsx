"use client"

import Link from "next/link";
export default function Header() {
    function toggleTheme() {
        if (typeof window !== "undefined") {
            document.documentElement.classList.toggle("dark");
        }
    }

    return (
        <header className="bg-card shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">☰</span>
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                </div>
                <nav className="flex items-center gap-6 text-muted-foreground">
                    <Link href="/dashboard" className="hover:text-primary transition">Dashboard</Link>
                    <Link href="/products" className="hover:text-primary transition">Products</Link>
                    <Link href="/users" className="hover:text-primary transition">Users</Link>
                </nav>
                <button onClick={toggleTheme} className="p-2 rounded hover:bg-accent transition text-lg ">
                    <span className="dark:hidden">🌞</span>
                    <span className="hidden dark:inline">🌙</span>
                </button>
            </div>
        </header>
    );
}