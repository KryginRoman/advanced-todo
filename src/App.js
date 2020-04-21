import React from 'react';

import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';

import './App.scss';

export default () => {
  return (
    <div className="app">
      <SideBar />
      <Main />
    </div>
  );
}
