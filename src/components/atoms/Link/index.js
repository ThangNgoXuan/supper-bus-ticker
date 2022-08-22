import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Link = ({
  children,
  href,
  search,
  useExternal,
  customClassName,
  ...props
}) => {
  if (!href) return <span {...props}>{children}</span>;

  if (href.includes('http') || useExternal) {
    return (
      <a {...props} href={href} rel="noreferrer" className={`a-link ${customClassName || ''}`}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      {...props}
      to={{
        pathname: href,
        search,
      }}
      className={`a-link ${customClassName || ''}`}
      aria-label="label"
    >
      {children}
    </RouterLink>
  );
};

export default Link;

Link.prototype ={
    href: PropTypes.string,
    search: PropTypes.string,
    useExternal: PropTypes.bool,
    customClassName: PropTypes.string,
}