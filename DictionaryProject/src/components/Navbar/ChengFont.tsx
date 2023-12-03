import React from 'react';
import arrowDownIcon from '/assets/images/icon-arrow-down.svg';

const ChengFont = () => {
  return (
    <div className="h-[24px] ml-auto flex items-center gap-3 ">
      <p className="font-bold">Sans Serif</p>
      <img className="h-[6px]" src={arrowDownIcon} alt="arrowDownIcon" />
    </div>
  );
};

export default ChengFont;