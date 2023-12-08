import React from 'react';
import arrowDownIcon from '/assets/images/icon-arrow-down.svg';
interface propFont {
  setFont: (inputFont: string) => void;
}
const ChengFont = ({ setFont }: propFont) => {
  return (
    <select
      onChange={({ target }) => setFont(target.value)}
      className="h-[24px]  ml-auto flex items-center select max-w-xs"
    >
      <option disabled selected value={'SansSerif'}>
        Sans-Serif
      </option>
      <option>Serif</option>
      <option>Mono</option>
      <img className="h-[6px]" src={arrowDownIcon} alt="arrowDownIcon" />
    </select>
  );
};

export default ChengFont;
