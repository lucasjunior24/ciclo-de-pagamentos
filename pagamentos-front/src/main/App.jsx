import React from 'react';

import '../common/template/dependencias'

import Footer from '../common/template/Footer';
import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar';
import Messages from '../common/msg/messages'

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <div className='content-wrapper'>
          {props.children}
      </div>
      <Footer />
      <Messages />
    </div>
  );
}

export default App;
