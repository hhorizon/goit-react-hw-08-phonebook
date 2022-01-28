import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PrivatRoute from 'views/PrivatRoute';
import PublicRoute from 'views/PublicRoute';
import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';
import RegistrationPage from 'views/RegisterPage';
import ContactsPage from 'views/ContactsPage';

import { authOperations, authSelectors } from 'redux/auth';

export function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
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
              <RegistrationPage />
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
    )
  );
}
