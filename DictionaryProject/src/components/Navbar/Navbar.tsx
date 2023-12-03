import React from 'react';

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[85%] h-[32px]  flex my-[24px] items-center gap-5">
      {children}
    </div>
  );
};

export default Navbar;
