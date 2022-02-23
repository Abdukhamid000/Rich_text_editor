import "./App.css";

import Editor from "./components/Editor";
import ExampleDocument from "./utils/ExampleDocument";
import React from "react";
import { useState } from "react";

function App() {
  const [document, updateDocument] = useState(ExampleDocument);

  return (
    <>
      <div className="App">
        <Editor document={document} onChange={updateDocument} />
      </div>
    </>
  );
}

export default App;
