import type { AppProps } from 'next/app';

import { AuthContext } from '../context';
import { useAuth, useRouterGuard } from '../hooks';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  const { user, isLoggedIn, isLoading, methods } = useAuth();
  useRouterGuard({ isLoggedIn, isLoading });

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        methods
      }}
    >
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
export default App;
