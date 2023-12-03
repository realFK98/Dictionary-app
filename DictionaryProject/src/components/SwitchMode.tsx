import React from 'react';
import moonIcon from '/assets/images/icon-moon.svg';
const SwitchMode = () => {
  return (
    <div>
      <label className="flex item-center gap-4">
        <div className="relative inline-flex items-center  cursor-pointer ">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-[30px] h-[18px] bg-primary-dark-500  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-primary-light-100 after:content-[''] after:absolute after:top-[3px] after:start-[2px] after:bg-primary-light-100 after:border-primary-light-100 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-nature-100"></div>
        </div>
        <img className="h-[18px]" src={moonIcon} alt="moonIcon" />
      </label>
    </div>
  );
};

export default SwitchMode;
