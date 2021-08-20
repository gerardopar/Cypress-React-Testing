import React, { useState } from "react";

import "./InputForm.scss";

const InputForm: React.FC<{ handleSubmit: (breed: string) => void }> = ({
  handleSubmit,
}) => {
  const [input, setInput] = useState<string>("");

  const handleSearchDoggie = () => {
    handleSubmit(input);
    setInput('');
  };

  return (
    <div data-testid="app-inputForm" className="form__container">
      <div className="form__wrap">
        <div className="form">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="form__input"
            placeholder="Enter Dog breed"
            type="text"
          />
          <button
            onClick={handleSearchDoggie}
            className="form__btn"
            type="submit"
          >
            Searcb
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
