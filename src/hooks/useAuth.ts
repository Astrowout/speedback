import { useState, useEffect } from 'react';
import { Magic, RPCErrorCode, RPCError, MagicUserMetadata } from 'magic-sdk';

let magic: Magic | null = null;

const useAuth = () => {
	const [user, setUser] = useState<MagicUserMetadata | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null | unknown>(null);

	useEffect(() => {
		setIsLoading(true);

		magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY || '');

		const preloadMagic = async() => {
			try {
				await magic!.preload();
			} catch (error) {
				console.log(error);
			}
		}

		const checkUser = async() => {
			try {
				const isLoggedIn = await magic!.user.isLoggedIn();

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

		preloadMagic();
		checkUser();
	}, []);

	const loginWithEmail = async (email: string): Promise<void> => {
		setIsLoading(true);

		try {
			const didToken = await magic!.auth.loginWithMagicLink({
				email,
				redirectURI: `${window.location.origin}/callback`
			});

			if (didToken) {
				const userData = await magic!.user.getMetadata();

				setUser(userData);
			} else {
				setUser(null);
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

	const loginWithCredential = async (): Promise<void> => {
		setIsLoading(true);

		try {
			const isLoggedIn = await magic!.user.isLoggedIn();

			if (isLoggedIn) {
				return;
			}

			await magic!.auth.loginWithCredential();
		} catch (error) {
			console.error(error);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	}

	const logout = async (): Promise<void> => {
		await magic!.user.logout();
		setUser(null);
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
			loginWithCredential,
		}
  	};
}

export default useAuth;
