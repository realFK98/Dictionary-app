import React from 'react';
import Info from './Info';

type propInfos = {
  meanings?:
    | {
        partOfSpeech: string;
        definitions: { definition: string }[];
        synonyms: string[];
      }[]
    | null;
};
const Infos = ({ meanings }: propInfos) => {
  return (
    <>
      {meanings?.map(({ partOfSpeech, definitions, synonyms }) => (
        <Info
          partOfSpeech={partOfSpeech}
          definitions={definitions}
          synonyms={synonyms}
        />
      ))}
    </>
  );
};

export default Infos;
