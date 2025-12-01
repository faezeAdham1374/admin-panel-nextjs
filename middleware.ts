import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    const isProtectedPath =
        req.nextUrl.pathname.startsWith("/dashboard") ||
        req.nextUrl.pathname.startsWith("/panel") ||
        req.nextUrl.pathname.startsWith("/admin");

    if (isProtectedPath && !token) {
        // redirect
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/panel/:path*", "/admin/:path*"],
};
