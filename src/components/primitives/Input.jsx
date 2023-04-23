import React from 'react';

import PlaySvg from './svg/Play';

const Input = ({ placeholder, inputValue, setInputValue, buttonFunction }) => {
  return (
    <div className="border-[1px] border-solid border-gray-300 rounded-full p-2.5 bg-white shadow-lg">
      <div className="w-96 h-12 flex items-center">
        <input
          className="w-[calc(100%-3rem)] h-full pl-2.5 text-lg bg-transparent outline-0 font-sans"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={buttonFunction}
          className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-700"
        >
          <PlaySvg />
        </button>
      </div>
    </div>
  );
};

export default Input;
