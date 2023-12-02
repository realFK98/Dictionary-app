import React from 'react';
import arrowDownIcon from '/assets/images/icon-arrow-down.svg';

const ChengFont = () => {
  return (
    <div className="h-[24px] ml-auto flex items-center gap-2 ">
      <p className="font-display">serif</p>
      <img className="h-3" src={arrowDownIcon} alt="arrowDownIcon" />
    </div>
  );
};

export default ChengFont;
