import { NextRequest, NextResponse } from 'next/server';

export function middleware(
	request: NextRequest
) {
	const searchParams = request.nextUrl.searchParams as any;

	if (searchParams.get("userToken")) {
		let response = NextResponse.next();
		response.cookie('userToken', searchParams.get("userToken"), {
			path: '/',
			maxAge: 1000 * 60 * 60 * 24 * 7,
		});

		return response;
	} else if (request.cookies && !request.cookies.userToken) {
		return NextResponse.redirect("/login");
	}

	return NextResponse.next();
}
