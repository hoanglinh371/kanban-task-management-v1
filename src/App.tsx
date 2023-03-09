import React from 'react';
import classNames from 'classnames/bind';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import styles from './App.module.scss';
const cx = classNames.bind(styles);

const App: React.FC = () => {
  return (
    <div className={cx('container')}>
      <header>
        <Header />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Main />
      </main>
    </div>
  );
};

export default App;
