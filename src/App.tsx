import { useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const upCount = () => setCount((aCount) => aCount + 1);
  return (
    <div className={"App"}>
      <header className={"App-header"}>
        <Logo className={"App-logo"} fill={"green"} title={"logo"} />
        <p>{"Hello Vite + React!"}</p>
        <p>
          <button onClick={upCount} type={"button"}>
            {"count is: "}
            {count}
          </button>
        </p>
        <p>
          {"Edit "}
          <code>{"App.tsx"}</code> {"and save to test HMR updates."}
        </p>
        <p>
          <a
            className={"App-link"}
            href={"https://reactjs.org"}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            {"Learn React"}
          </a>
          {" | "}
          <a
            className={"App-link"}
            href={"https://vitejs.dev/guide/features.html"}
            rel={"noopener noreferrer"}
            target={"_blank"}
          >
            {"Vite Docs"}
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
