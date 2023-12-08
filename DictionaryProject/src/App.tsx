import './index.css';
import ContainerApp from './components/ContainerApp';
import Navbar from './components/Navbar/Navbar';
import ChengFont from './components/Navbar/ChengFont';
import SwitchMode from './components/Navbar/SwitchMode';
import Display from './components/Display/Display';
import Search from './components/Navbar/Search';
import KeyWord from './components/Display/KeyWord';

import Source from './components/Display/Source';
import { useState } from 'react';
import Infos from './components/Display/Infos';
import React from 'react';

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
  const [data, setdata] = useState<DataWord | null>(null);
  const [font, setFont] = useState<string>('Serif');
  const [darkMode, setDarkMode] = useState(false);
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
  React.useEffect(() => {
    document
      .querySelector('html')
      ?.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  });
  // getData();

  return (
    <ContainerApp font={font}>
      <Navbar>
        <ChengFont setFont={setFont} /> |
        <SwitchMode setDarkMode={setDarkMode} darkMode={darkMode} />
      </Navbar>
      <div className="w-[85%] flex flex-col">
        <Search darkMode={darkMode} getData={getData} />
        <Display className={data ? '' : 'hidden'}>
          <KeyWord word={data?.word} phonetic={data?.phonetic} />
          <Infos meanings={data?.meanings} />
          <Source sources={data?.sourceUrls} />
        </Display>
      </div>
    </ContainerApp>
  );
}

export default App;
