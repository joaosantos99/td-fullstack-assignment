import React from 'react';

const List = ({ list }) => {
  return (
    <ul aria-label="items">
      {list.map((item, key) => (
        <li key={key} className="pb-3 font-sans text-xl">
          {item.pA} + {item.pB} = {item.sum}
        </li>
      ))}
    </ul>
  );
};

export default List;
