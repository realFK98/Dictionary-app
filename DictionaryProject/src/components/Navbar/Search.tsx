import React from 'react';

const Search = ({ children }: { children: React.ReactNode }) => {
  return (
    <label className="h-[48px] w-full bg-primary-light-100 flex rounded-xl overflow-hidden items-center">
      {children}
    </label>
  );
};

export default Search;
