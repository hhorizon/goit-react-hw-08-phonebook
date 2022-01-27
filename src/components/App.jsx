
// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import PrivatRoute from 'views/PrivatRoute';
// import PublicRoute from 'views/PublicRoute';
// import HomePage from 'views/HomePage';
// import ContactsPage from 'views/ContactsPage/ContactsPage';
// import LoginPage from 'views/LoginPage/LoginPage';
// import RegistrationPage from 'views/RegisterPage/RegistrerPage';

// import { authOperations, authSelectors } from 'redux/auth';


export function App() {
  // const dispatch = useDispatch();

  // useEffect(()=> {
  //   dispatch(authOperations.refreshCurrentUser())
  // }, [dispatch])
  
  return (<>
    {/* <button type='click' onClick={() => dispatch(authOperations.logOut())}>Log out</button> */}

    <Routes>
      <Route path='/' element={<p>Home</p>}></Route>
      <Route path='/login' element={<p>Login</p>}></Route>
      <Route path='/register' element={<p>Register</p>}></Route>
      <Route path='/contacts' element={<p>Contacts</p>}></Route>
    </Routes>
  </>);
};