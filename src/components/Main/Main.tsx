import React from 'react';
import classNames from 'classnames/bind';
// import { Routes, Route } from 'react-router-dom';

import { ReactComponent as IconAdd } from 'src/assets/icon-add-task-mobile.svg';
import Button from '../Button';
import Heading from '../Heading';

import styles from './Main.module.scss';
const cx = classNames.bind(styles);

const Main: React.FC = () => {
  return (
    <div className={cx('container')}>
      <Heading variant='lg'>
        This board is empty. Create a new column to get started.
      </Heading>
      <Button variant='primary'>
        <IconAdd />
        Add a column
      </Button>
    </div>
  );
};

export default Main;
