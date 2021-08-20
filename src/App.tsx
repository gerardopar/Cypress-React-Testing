import React, { useState } from "react";

import Header from "./Components/Header/Header";
import InputForm from "./Components/InputForm/InputForm";
import DoggiesList from "./Components/Doggies/DoggiesList";

import "./App.css";
import "./App.scss";

type Doggie = {
  url?: string;
};

const App: React.FC = () => {
  const [doggies, setDoggies] = useState<Doggie[]>([]);

  // fetch doggies
  const handleSubmit = (breed: string) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
      .then((res) => res.json())
      .then((data) => {
        console.log("doggies??", data);

        const { message } = data;

        const _doggies =
          message?.length > 0
            ? message.map((url: string) => {
                return {
                  url,
                };
              })
            : [];

        setDoggies(_doggies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <InputForm handleSubmit={handleSubmit} />
      <DoggiesList doggies={doggies} />
    </div>
  );
};

export default App;
