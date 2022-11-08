import { useState, useEffect } from 'react';
import Router from 'next/router';
import { Magic, RPCErrorCode, RPCError, MagicUserMetadata } from 'magic-sdk';

let magic: Magic | null = null;

const useAuth = () => {
	const [user, setUser] = useState<MagicUserMetadata | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null | unknown>(null);

	useEffect(() => {
		magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY || '');

		const preloadMagic = () => {
			try {
				magic!.preload();
			} catch (error) {
				console.log(error);
			}
		}

		const checkUser = async () => {
			setIsLoading(true);

			try {
				const userData = await magic!.user.getMetadata();

				if (userData) {
					setUser(userData);
				} else {
					setUser(null);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}

		checkUser();
		preloadMagic();
	}, []);

	const loginWithEmail = async (email: string): Promise<void> => {
		setIsLoading(true);

		try {
			const didToken = await magic!.auth.loginWithMagicLink({
				email,
			});

			// Validate didToken with server
			const res = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + didToken,
				},
			});

			if (res.status === 200) {
				const userData = await magic!.user.getMetadata();
				setUser(userData);

				Router.replace(`/app/dashboard?userToken=${didToken}`);
			}
		} catch (error) {
			console.error(error);

			if (error instanceof RPCError) {
				setError(error.message);
				switch (error.code) {
					case RPCErrorCode.MagicLinkFailedVerification:
					case RPCErrorCode.MagicLinkExpired:
					case RPCErrorCode.MagicLinkRateLimited:
					case RPCErrorCode.UserAlreadyLoggedIn:
						break;
				}
			}
		} finally {
			setIsLoading(false);
		}
	}

	const logout = async (): Promise<void> => {
		await magic!.user.logout();
		setUser(null);
		Router.replace("/");
	}

	return {
		user,
		isLoggedIn: !!user,
		isLoading,
		error,
		methods: {
			setUser,
			logout,
			loginWithEmail,
		}
	};
}

export default useAuth;
