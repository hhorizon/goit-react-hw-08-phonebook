import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { authOperations, authSelectors } from 'redux/auth';

export default function HomePage() {
  return (
    <>
      <h1>Contacts</h1>

      <ul>
        <li>
          <Link to="/login">Sing in</Link>
        </li>
        <li>
          <Link to="/register">Sing up</Link>
        </li>
      </ul>
    </>
  );
}
