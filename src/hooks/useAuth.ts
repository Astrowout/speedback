import { useState, useEffect } from 'react';
import { Magic, RPCErrorCode, RPCError, MagicUserMetadata } from 'magic-sdk';

let magic: Magic | null = null;

const useAuth = () => {
	const [user, setUser] = useState<MagicUserMetadata | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [error, setError] = useState<string | null | unknown>(null);

	useEffect(() => {
		setIsLoading(true);

		magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY || '');

		const checkUser = async() => {
			try {
				const isLoggedIn = await magic!.user.isLoggedIn();

				setIsLoggedIn(isLoggedIn);

				if (isLoggedIn) {
					const userData = await magic!.user.getMetadata();

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

		const preloadMagic = async() => {
			try {
				await magic!.preload();
			} catch (error) {
				console.log(error);
			}
		}

		preloadMagic();
		checkUser();
	}, []);

	const loginWithEmail = async (email: string): Promise<void> => {
		try {
			await magic!.auth.loginWithMagicLink({
				email,
				redirectURI: `${window.location.origin}/callback`
			});

			// if (didToken) {
			// 	await authenticate(didToken);
			// }
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
		}
	}

	const loginWithCredential = async (): Promise<void> => {
		try {
			const isLoggedIn = await magic!.user.isLoggedIn();

			if (isLoggedIn) {
				return;
			}

			await magic!.auth.loginWithCredential();
		} catch (error) {
			console.error(error);
			setError(error);
		}
	}

	const authenticate = async (didToken: string): Promise<void> => {
		try {
			await fetch('/api/login', {
				headers: {
				  'Content-Type': 'application/json',
				  Authorization: 'Bearer ' + didToken,
				},
			});
		} catch (error) {
			console.error(error);
			setError(error);
		}
	}

	const logout = async (): Promise<void> => {
		await magic!.user.logout();
		setUser(null);
		setIsLoggedIn(false);
	}

	return {
		user,
		isLoggedIn,
		isLoading,
		error,
		methods: {
			logout,
			loginWithEmail,
			loginWithCredential,
			authenticate,
		}
  	};
}

export default useAuth;
