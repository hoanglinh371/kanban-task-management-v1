import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
  variant: string;
}

interface ButtonType {
  [key: string]: string;
}

const BUTTON_TYPE: ButtonType = {
  primary: 'primary',
  secondary: 'secondary',
  destructive: 'destructive',
};

const Button: React.FC<Props> = ({ children, variant }) => {
  return (
    <button type='button' className={cx('btn', BUTTON_TYPE[variant])}>
      {children}
    </button>
  );
};

export default Button;
