"use client";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const [error, setError] = useState("");

    async function handleLogin(e: any) {
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

    }

    return (
        <form onSubmit={handleLogin} className="p-4 max-w-sm mx-auto space-y-3">
            <input className="border p-2 w-full" value={email} onChange={e=>setEmail(e.target.value)} />
            <input className="border p-2 w-full" value={password} onChange={e=>setPassword(e.target.value)} />
            {error && <p className="text-red-500">{error}</p>}
            <button className="bg-blue-600 text-white p-2 rounded w-full">Login</button>
        </form>
    );
}
