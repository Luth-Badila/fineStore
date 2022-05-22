import React from "react";
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import logo from '../public/flogo.png';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./flogo.png"/>
        <title>fineStore</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
