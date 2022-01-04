import { NextRequest, NextResponse } from 'next/server';

export function middleware(
	request: NextRequest
) {
	if (request.cookies && !request.cookies.userToken) {
		return NextResponse.redirect("/login");
	} else {
		return NextResponse.next();
	}
}
