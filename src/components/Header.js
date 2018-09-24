import React from 'react';

const Header = (props) => {
  return (
      <div className = "header">
          <h1 className ="header__title">{props.title}</h1>
          <h2>{props.subTitle}</h2>
          </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
  subTitle : 'Put your life in the hands of a computer'
};
export default Header;