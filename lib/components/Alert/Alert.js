import React, { useContext } from 'react';
import classNames from 'classnames';

import { ErrOut, ThemeContext } from '../Util';

const Alert = React.forwardRef((props, ref) => {
  const {
    children,
    variant = 'default',
    type = 'default',
    className,
    ...rest
  } = props;

  if (!children) {
    ErrOut(
      'Unable to find children which serves as message fo the Alert. Make sure you have passed it.'
    );
    return null;
  }

  const IconMap = {
    info: InfoIcon,
    error: ErrorIcon,
    warning: WarnIcon,
    success: SuccessIcon,
    default: BellIcon,
  };

  const IconComponent = IconMap[type];

  const {
    theme: { alert },
  } = useContext(ThemeContext);

  const classes = classNames(
    alert.base,
    alert.variant[variant][type],
    className
  );

  return (
    <div className={classes} ref={ref} {...rest}>
      <span className='h-6 w-6 mr-4'>
        <IconComponent />
      </span>
      {children}
    </div>
  );
});

const InfoIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const WarnIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
    />
  </svg>
);

const ErrorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const SuccessIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const BellIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
    />
  </svg>
);

export default Alert;
