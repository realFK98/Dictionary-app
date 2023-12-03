import React from 'react';
import logo from '/assets/images/logo.svg';

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[85%] h-[32px] px-2 flex my-[24px] items-center gap-2">
      <img className="h-[32px]" src={logo} alt="bookIcon" />
      {children}
    </div>
  );
};

export default Navbar;
