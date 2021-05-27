import React from 'react';
import { Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import Videos from '../videos/Videos';
import VideosForm from '../videos/VideosForm';
import VideosShow from '../videos/VideosShow';
import Profile from '../users/Profile';
import SignUp from '../users/SignUp';
import SignIn from '../users/SignIn';
// import { logOut } from '../store/user';
import { useSelector } from 'react-redux';

let NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Ir a videos</Link>
      <h1>Esta página aún no está lista</h1>
    </>
  );
}

let Error404 = () => {
  return (
    <>
      <Link to="/">Regresar al inicio</Link>
      <h1>Esta página no existe - 404</h1>
    </>
  );
}

let AppRoutes = (props) => {
  let user = useSelector(state => state.user.user );
  return(
    <Routes>
      <Route path="/" element={user ? <Navigate to="/videos" /> : <Outlet />} />

      <Route path="/users" element={user ? <Navigate to="/videos" /> : <Outlet />}>
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
      </Route>
      
      <Route path="/" element={user ? <Outlet /> : <Navigate to="/users/login" />  }>

        <Route path="users/myprofile" element={<Profile />} />
        <Route path="users/:id/videos" element={<NotImplemented />} />

        <Route path="/videos">
          <Route path="/" element={<Videos />} />
          <Route path=":id" element={<VideosShow />} />
          <Route path="new" element={<VideosForm />} />
        </Route>
      </Route>

      <Route path="*" element={<Error404 />}> </Route>


    </Routes>
  )
}

export default AppRoutes;