import Contact from "../components/Contact";
import { useState } from "react";
function Tests() {
  const [count, setCount] = useState(1);
  const increase = (incraseAmount) => setCount(incraseAmount + count);
  return (
    <div className="text-txt-base">
      COUNTER :{count}
      <button onClick={() => increase(3)}>CLICK </button>
    </div>
  );
}

export default Tests;
