import { NextResponse } from 'next/server';

export function middleware() {
	let response = NextResponse.next();
	response.clearCookie('userToken');

	return response;
}
