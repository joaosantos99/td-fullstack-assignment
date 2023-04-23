import React, { useEffect, useState } from 'react';

import Input from './primitives/Input';
import List from './primitives/List';
import { calculateResult } from '../utils';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [sumList, setSumList] = useState([]);
  const [error, setError] = useState('');

  const calculateResultFunc = () => {
    const { input, result, error } = calculateResult(inputValue);

    const list = result.map(({ pA, pB, sum }) => ({
      pA: input[pA],
      pB: input[pB],
      sum: input[sum],
    }));

    setSumList(list);
    setError(error);
  };

  return (
    <div className="mt-[calc(50vh-48px)] flex flex-col justify-center items-center">
      <div className="mb-8">
        <Input
          placeholder="Ex: 1,2,3"
          inputValue={inputValue}
          setInputValue={setInputValue}
          buttonFunction={() => calculateResultFunc()}
        />
        {error && (
          <div className="font-sans text-red-500 text-base font-medium text-center mt-2.5">
            {error}
          </div>
        )}
      </div>
      <div>
        <List list={sumList} />
      </div>
    </div>
  );
};

export default Calculator;
