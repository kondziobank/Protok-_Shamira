import { useState } from "react";
import TrivialMethod from "./TrivialMethod";
import TrivialSecret from "./TrivialSecret";
import ShamirMethod from "./ShamirMethod";
import ShamirSecret from "./ShamirSecret";

const App = () => {
  let [u, setU]: any = useState("");
  let [sekret, setSekret]: any = useState("");
  let [uS, setUS]: any = useState("");
  let [pS, setPS]: any = useState("");
  let [sS, setSS]: any = useState("");
  let [sekretS, setSekretS]: any = useState("");

  return (
    <div className="App">
      <TrivialMethod u={u} setU={setU} />
      <TrivialSecret sekret={sekret} setSekret={setSekret} />
      <ShamirMethod uS={uS} pS={pS} setUS={setUS} setPS={setPS} sS={sS} setSS={setSS} />
      <ShamirSecret sekretS={sekretS} setSekretS={setSekretS} sS={sS} />
    </div>
  );
};

export default App;
