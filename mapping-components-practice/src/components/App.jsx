import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojipedia) {
  return (
    <Entry
      Key={emojipedia.id}
      img={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="Dictionary"> {emojipedia.map(createEntry)} </dl>
    </div>
  );
}

export default App;
