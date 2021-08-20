import React from "react";

import './Doggies.scss';

type Doggie = {
  id?: string;
  name?: string;
  url?: string;
};

const DoggieItem: React.FC<{ doggie: Doggie }> = ({ doggie }) => {
  return (
    <div className="doggiesItem">
      <img className="doggiesItem__img" src={doggie.url} alt="dog" />
    </div>
  );
};

export default DoggieItem;
