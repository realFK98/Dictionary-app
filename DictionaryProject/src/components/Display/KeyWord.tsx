import React from 'react';
import PlayIcon from '/assets/images/icon-play.svg';
const KeyWord = ({ word, phonetic }: { word?: string; phonetic?: string }) => {
  return (
    <div className="my-[24px] w-full flex justify-between">
      <div className="flex flex-col">
        <p className="font-bold text-[32px]">{word ? word : ''}</p>
        <p className="text-nature-100 text-bm">{phonetic ? phonetic : ''}</p>
      </div>
      <img className="w-[48px]" src={PlayIcon} alt="PlayIcon" />
    </div>
  );
};

export default KeyWord;
