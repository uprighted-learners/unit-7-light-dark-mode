import { useState } from "react";
import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const lightMode = {
  backgroundColor: "white",
  color: "black",
};

const darkMode = {
  backgroundColor: "black",
  color: "white",
};

function App() {
  const [styleMode, setStyleMode] = useState(lightMode);

  return (
    <div style={styleMode}>
      <button
        type="button"
        onClick={() =>
          setStyleMode(
            styleMode.backgroundColor === "white" ? darkMode : lightMode
          )
        }
      >
        Toggle Modes
      </button>
      <Header styleMode={styleMode} />
      <Content styleMode={styleMode} />
      <Footer styleMode={styleMode} />
    </div>
  );
}

export default App;
