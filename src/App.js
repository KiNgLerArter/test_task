import React from 'react';

import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';

import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
