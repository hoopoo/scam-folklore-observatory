import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const submitEnabled = process.env.NEXT_PUBLIC_ENABLE_SUBMIT === "true";

  if (!submitEnabled && request.nextUrl.pathname.startsWith("/submit")) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/submit/:path*",
};
