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
			const url = request.nextUrl.clone();
			url.pathname = '/login';
			return NextResponse.redirect(url);
		}

		return NextResponse.next();
	}

	if (request.nextUrl.pathname.startsWith('/login')) {
		if (request.cookies && request.cookies.has("userToken")) {
			const url = request.nextUrl.clone();
			url.pathname = '/app/projects';
			return NextResponse.redirect(url);
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
