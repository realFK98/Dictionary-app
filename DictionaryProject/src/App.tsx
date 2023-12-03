import './index.css';
import ContainerApp from './components/ContainerApp';
import Navbar from './components/Navbar/Navbar';
import ChengFont from './components/Navbar/ChengFont';
import SwitchMode from './components/Navbar/SwitchMode';
import Display from './components/Display/Display';
import Search from './components/Navbar/Search';
import logo from '/assets/images/logo.svg';
import KeyWord from './components/Display/KeyWord';
import Info from './components/Display/Info';
import Source from './components/Display/Source';
import searchIcon from '/assets/images/icon-search.svg';
import { useState } from 'react';

type DataWord = {
  phonetic: string;
  word: string;
  sourceUrls: string[];
  meanings?:
    | {
        partOfSpeech: string;
        definitions: { definition: string }[];
        synonyms: string[];
      }[]
    | null;
  phonetics: {
    text: string;
    audion: string;
    sourceUrl: string;
  }[];
};

function App() {
  const [inputSearch, setInputSearch] = useState('');
  const [data, setdata] = useState<DataWord | null>(null);
  async function getData(keyword: string) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    );
    if (!response.ok) {
      setdata(null);
      return;
    }
    const [data]: [DataWord] = await response.json();
    setdata(data);
  }
  // getData();
  const handleClickSearch = () => {
    getData(inputSearch);
  };

  return (
    <ContainerApp>
      <Navbar>
        <img className="h-[32px]" src={logo} alt="bookIcon" />
        <ChengFont /> | <SwitchMode />
      </Navbar>
      <div className="w-[85%] flex flex-col">
        <Search>
          <input
            pattern="Search..."
            className="bg-primary-light-100 h-full w-10/12 pl-[24px] font-bold "
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
        </Search>
        <Display className={data ? '' : 'hidden'}>
          <KeyWord word={data?.word} phonetic={data?.phonetic} />
          {data?.meanings?.map(({ partOfSpeech, definitions, synonyms }) => (
            <Info
              partOfSpeech={partOfSpeech}
              definitions={definitions}
              synonyms={synonyms}
            />
          ))}
          <Source sources={data?.sourceUrls} />
        </Display>
      </div>
    </ContainerApp>
  );
}

export default App;
