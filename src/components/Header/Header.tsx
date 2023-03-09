import React from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as IconAdd } from 'src/assets/icon-add-task-mobile.svg';
import { ReactComponent as IconVerticalEllipsis } from 'src/assets/icon-vertical-ellipsis.svg';
import Button from '../Button';
import Heading from '../Heading';

import styles from './Header.module.scss';
const cx = classNames.bind(styles);

const Header: React.FC = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('left')}>
        <Heading variant='xl'>Platform Launch</Heading>
      </div>
      <div className={cx('right')}>
        <Button variant='primary'>
          <IconAdd />
          Add New Task
        </Button>
        <IconVerticalEllipsis />
      </div>
    </div>
  );
};

export default Header;
