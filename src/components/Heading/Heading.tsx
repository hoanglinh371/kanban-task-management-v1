import React from 'react';
import classNames from 'classnames/bind';

import styles from './Heading.module.scss';
const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
  variant: string;
}

interface HeadingType {
  [key: string]: string;
}

const HEADING_TYPE: HeadingType = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const Heading: React.FC<Props> = ({ children, variant }) => {
  return <h3 className={cx('heading', HEADING_TYPE[variant])}>{children}</h3>;
};

export default Heading;
