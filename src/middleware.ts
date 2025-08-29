import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ["/checkout", "/cart"];

export async function middleware(request: NextRequest) {
  console.log("=== MIDDLEWARE EXECUTING ===");
  console.log("URL:", request.nextUrl.pathname);
  console.log("Method:", request.method);
  console.log("Headers:", Object.fromEntries(request.headers.entries()));

  // Test if this is the checkout route
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    console.log("Checkout route detected, checking authentication...");

    try {
      const token = await getToken({ req: request });
      console.log("Token found:", !!token);

      if (!token) {
        console.log("No token, redirecting to login");
        return NextResponse.redirect(new URL("/login", request.url));
      }

      console.log("Token valid, allowing access to checkout");
      return NextResponse.next();
    } catch (error) {
      console.error("Error in middleware:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  console.log("Not checkout route, allowing access");
  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout", "/cart"],
};
