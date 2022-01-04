import { useState, useEffect } from 'react';
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

			document.cookie = `userToken=${didToken}; max-age=900; Secure`

			const userData = await magic!.user.getMetadata();
			setUser(userData);
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
		document.cookie = "userToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
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
