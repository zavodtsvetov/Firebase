import { useState } from "react";

import { useEffect } from "react";

function UseEffectVariants() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Первый - " + counter);
    return () => console.log("Второй - " + counter);
  });
  return (
    <>
      <h1>2</h1>
      <button onClick={() => setCounter(counter + 1)}> + 1 </button>
    </>
  );
}

export default UseEffectVariants;
