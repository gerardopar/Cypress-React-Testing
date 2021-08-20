import React from "react";

import './Doggies.scss';

type Doggie = {
  url?: string;
};

const DoggieItem: React.FC<{ doggie: Doggie }> = ({ doggie }) => {
  return (
    <div data-testid="app-doggie-item" className="doggiesItem">
      <img className="doggiesItem__img" src={doggie.url} alt="dog" />
    </div>
  );
};

export default DoggieItem;
