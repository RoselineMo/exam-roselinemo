import {useState} from "react";

const ErrorComponent = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("An error has occured.");
  }
  return (
    <div>
      <button onClick={() => setHasError(true)}>ErrorTester</button>
    </div>
  );
};

export default ErrorComponent;
