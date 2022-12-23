import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(
	request: NextRequest
) {
	if (request.nextUrl.pathname.startsWith('/app')) {
		const searchParams = request.nextUrl.searchParams as any;

		if (searchParams.get("userToken")) {
			let response = NextResponse.next();
			response.cookies.set('userToken', searchParams.get("userToken"), {
				path: '/',
				maxAge: 1000 * 60 * 60 * 24 * 7,
			});

			return response;
		} else if (request.cookies && !request.cookies.has("userToken")) {
			return NextResponse.redirect("/login");
		}

		return NextResponse.next();
	}

	if (request.nextUrl.pathname.startsWith('/login')) {
		if (request.cookies && request.cookies.has("userToken")) {
			return NextResponse.redirect("/app/projects");
		} else {
			return NextResponse.next();
		}
	}

	if (request.nextUrl.pathname.startsWith('/logout')) {
		let response = NextResponse.next();
		response.cookies.delete('userToken');

		return response;
	}
}

export const config = {
	matcher: ['/app/:path*', '/login', '/logout'],
  }
