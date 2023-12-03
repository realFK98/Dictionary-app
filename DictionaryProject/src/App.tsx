import './index.css';
import ContainerApp from './components/ContainerApp';
import Navbar from './components/Navbar';
import ChengFont from './components/ChengFont';
import SwitchMode from './components/SwitchMode';

// interface DataWord {
//   phonetic: string;
//   word: string;
//   sourceUrls: string[];
//   meanings: {
//     partOfSpeech: string;
//     definitions: {
//       definition: string;
//       synonyms: string[];
//       antonyms: string[];
//       example: string | string[] | null;
//     };
//     synonyms: string[];
//   }[];
//   phonetics: {
//     text: string;
//     audion: string;
//     sourceUrl: string;
//   }[];
// }

function App() {
  // async function getData() {
  //   const response = await fetch(
  //     `https://api.dictionaryapi.dev/api/v2/entries/en/fish`
  //   );
  //   if (response.ok) {
  //     const [data] = await response.json();
  //     const dataWord: DataWord = {
  //       meanings: data.meanings,
  //       phonetics: data.phonetics,
  //       word: data.word,
  //       phonetic: data.phonetic,
  //       sourceUrls: data.sourceUrls,
  //     };
  //   }
  // }

  return (
    <ContainerApp>
      <Navbar>
        <ChengFont /> | <SwitchMode />
      </Navbar>
    </ContainerApp>
  );
}

export default App;
