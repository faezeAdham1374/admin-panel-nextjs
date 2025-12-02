"use client";
import { useState } from "react";
import Button from "../../components/ui/Button";

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
        <div className="w-full min-h-screen flex justify-center items-center">
            <form
                onSubmit={handleLogin}
                className="p-6 m-auto flex flex-col justify-center rounded-md border border-slate-100 space-y-3"
            >
                <input
                    className="border p-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border p-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500">{error}</p>}

                <Button variant="primary" type="submit" className="px-12 mt-5">
                    Login
                </Button>
            </form>
        </div>
    );
}
