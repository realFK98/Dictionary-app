import React from 'react';
import logo from '/assets/images/logo.svg';

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary-light-100 w-[85%] h-[32px] px-2 flex my-[24px] items-center">
      <img src={logo} alt="bookIcon" />
      {children}
    </div>
  );
};

export default Navbar;
