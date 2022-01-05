import { NextRequest, NextResponse } from 'next/server';

export function middleware(
	request: NextRequest
) {
	console.log(request.cookies.userToken);

	if (request.cookies && request.cookies.userToken) {
		return NextResponse.redirect("/app/dashboard");
	} else {
		return NextResponse.next();
	}
}
