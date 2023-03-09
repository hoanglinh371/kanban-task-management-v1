import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'src/assets/logo.svg';
import { ReactComponent as IconBoard } from 'src/assets/icon-board.svg';
import Heading from '../Heading';

import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

const Sidebar: React.FC = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('logo-container')}>
        <Logo />
      </div>
      <div className={cx('menu-container')}>
        <ul className={cx('menu')}>
          <li className={cx('menu-item', 'active')}>
            <Link to='/' className={cx('menu-item-link')}>
              <IconBoard />
              <Heading variant='md'>Platform Launch</Heading>
            </Link>
          </li>
          <li className={cx('menu-item')}>
            <Link to='/' className={cx('menu-item-link')}>
              <IconBoard />
              <Heading variant='md'>Marketing Plan</Heading>
            </Link>
          </li>
          <li className={cx('menu-item')}>
            <Link to='/' className={cx('menu-item-link')}>
              <IconBoard />
              <Heading variant='md'>Roadmap</Heading>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
