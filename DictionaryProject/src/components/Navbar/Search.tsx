import { useState } from 'react';
import searchIcon from '/assets/images/icon-search.svg';

interface propSearch {
  getData: (inputSearch: string) => void;
  darkMode: boolean;
}
const Search = ({ getData, darkMode }: propSearch) => {
  const [inputSearch, setInputSearch] = useState('');
  const handleClickSearch = () => {
    getData(inputSearch);
  };

  return (
    <label
      className={`h-[48px] w-full ${
        !darkMode && 'bg-primary-light-100'
      } flex rounded-xl overflow-hidden items-center`}
    >
      <input
        pattern="Search..."
        className={`${
          !darkMode && 'bg-primary-light-100'
        }  h-full w-10/12 pl-[24px] font-bold `}
        type="text"
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
      />
      <img
        onClick={handleClickSearch}
        className="h-[15px] mx-auto"
        src={searchIcon}
        alt="searchIcon"
      />
    </label>
  );
};

export default Search;
