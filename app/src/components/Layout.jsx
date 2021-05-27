import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LayoutContainer } from '../theme';
import Footer from './Footer';
import Header from './Header';


let Layout = (props) => {
  return(
    <LayoutContainer>
      <nav>
        <Routes>
          <Route path="/videos" element={<nav></nav>} />
          <Route path="/users/login" element={<nav></nav>} />
          <Route path="/users/register" element={<nav></nav>} />
          <Route path="*" element={<Header></Header>} />
        </Routes>
      </nav>
      <main>
        {props.children}
      </main>
      <Footer></Footer>
    </LayoutContainer>
  )
}

export default Layout;