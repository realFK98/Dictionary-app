import React from 'react';
import newWinIcon from '/assets/images/icon-new-window.svg';

const Source = ({ sources }: { sources?: string[] }) => {
  return (
    <div className="mb-[84px]">
      <hr className=" pb-1 border-primary-light-100 " />
      <p className="underline mb-[8px] text-primary-dark-500 text-bs mt-[24px]">
        Source
      </p>
      {sources?.map((source) => (
        <a className=" text-primary-dark-500 text-bs flex gap-2" href={source}>
          {source} <img src={newWinIcon} alt="newWinIcon" />
        </a>
      ))}
    </div>
  );
};

export default Source;
