import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import MovieInfo from './pages/MovieInfo';
import styles from './App.module.scss';

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <>
          <main className={styles.main}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:movieID" component={MovieInfo} />
          </main>
        </>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
