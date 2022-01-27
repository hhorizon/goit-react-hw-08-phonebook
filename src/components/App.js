import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PrivatRoute from 'views/PrivatRoute';
import PublicRoute from 'views/PublicRoute';
import HomePage from 'views/HomePage';
import ContactsPage from 'views/ContactsPage/ContactsPage';
import LoginPage from 'views/LoginPage/LoginPage';
import RegistrationPage from 'views/RegisterPage/RegistrerPage';

import { authOperations } from 'redux/auth';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <button type="click" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>

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
    </>
  );
}
