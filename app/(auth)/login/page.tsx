// app/(auth)/login/page.tsx
"use client";
import { useState } from "react";
import Button from "@/components/ui/Button"; // مسیر را بر اساس پروژه‌ات تنظیم کن

export default function LoginPage() {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const [error, setError] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        const res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error);
            return;
        }

        localStorage.setItem("token", data.token);
        // redirect یا router.push در صورت نیاز
    }

    return (
        <form
            onSubmit={handleLogin}
            className="p-6 flex flex-col rounded-md border border-slate-200 shadow-md space-y-3 bg-card w-[360px]"
        >
            <input
                className="border p-2 w-full rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                className="border p-2 w-full rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {error && <p className="text-red-500">{error}</p>}
            <Button variant="primary" type="submit" className="px-12 mt-3 self-center">
                Login
            </Button>
        </form>
    );
}
