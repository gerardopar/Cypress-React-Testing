import React from "react";

import DoggieItem from "./DoggiesItem";

import "./Doggies.scss";

type Doggie = {
  id?: string;
  name?: string;
  url?: string;
};

const DoggiesList: React.FC<{ doggies: Doggie[] }> = ({ doggies }) => {
  return (
    <div className="doggies">
      <div className="doggies__results">
        <h3 className="doggies__results--text">Results found {doggies.length}</h3>
      </div>

      <div className="doggies__wrap">
        {doggies.length > 0 ? (
          doggies.map((doggie) => <DoggieItem doggie={doggie} />)
        ) : (
          <p>Search A doggie breed :)</p>
        )}
      </div>
    </div>
  );
};

export default DoggiesList;
