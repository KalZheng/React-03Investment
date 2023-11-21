import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUsetInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUsetInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: newValue };
    });
  };

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
