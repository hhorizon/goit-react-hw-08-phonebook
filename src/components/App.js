import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';

import PrivatRoute from 'views/PrivatRoute';
import PublicRoute from 'views/PublicRoute';
import Loader from './Loader';
import { authOperations, authSelectors } from 'redux/auth';
import { themeSelectors } from 'redux/theme';

const HomePage = lazy(() =>
  import('views/HomePage' /* webpackChunkName: "HomePage" */)
);
const LoginPage = lazy(() =>
  import('views/LoginPage' /* webpackChunkName: "LoginPage" */)
);
const RegisterPage = lazy(() =>
  import('views/RegisterPage' /* webpackChunkName: "RegisterPage" */)
);
const ContactsPage = lazy(() =>
  import('views/ContactsPage' /* webpackChunkName: "ContactsPage" */)
);

export function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  const theme = useSelector(themeSelectors.getTheme);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted>
                <HomePage />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          ></Route>

          <Route
            path="/contacts"
            element={
              <PrivatRoute>
                <ContactsPage />
              </PrivatRoute>
            }
          ></Route>
        </Routes>
      </Suspense>

      <Toaster />
    </ThemeProvider>
  );
}
