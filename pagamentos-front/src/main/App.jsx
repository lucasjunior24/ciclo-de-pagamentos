import React from 'react';

import '../common/template/dependencias'

import Footer from '../common/template/Footer';
import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar';
import Routes from './routes'
import Messages from '../common/msg/messages'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <div className='content-wrapper'>
          <Routes />
      </div>
      <Footer />
      <Messages />
    </div>
  );
}

export default App;
