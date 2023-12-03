import React from 'react';

const Info = ({
  partOfSpeech,
  definitions,
  synonyms,
}: {
  partOfSpeech: string;
  definitions?: { definition: string }[];
  synonyms?: string[];
}) => {
  return (
    <div className="mb-[33px]">
      <p className="font-bold text-bm flex items-center">
        {partOfSpeech}
        <hr className=" ml-[16px] w-full   border-primary-light-100" />
      </p>
      <p className="mt-[31px] text-[16px] text-primary-dark-500">Meaning</p>
      <ul className="list-disc ml-5 my-[17px] text-[15px] flex flex-col gap-[13px]">
        {definitions?.map(({ definition }) => (
          <li>{definition}</li>
        ))}
      </ul>

      {synonyms?.length ? (
        <span className="text-primary-dark-500 mr-[26px]">Synonyms</span>
      ) : (
        ''
      )}
      {synonyms?.map((synonym) => (
        <span className="text-nature-100 font-bold">{synonym} </span>
      ))}
    </div>
  );
};

export default Info;
