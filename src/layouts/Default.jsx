import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import './style.scss';

const Default = () => {
   return (
      <>
         <Header></Header>
         <main className="wrapper min-h-[800px]">
            <Outlet></Outlet>
         </main>
         <Footer></Footer>
      </>
   );
};

export default Default;
