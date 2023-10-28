import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="havanese" />
      <Pet name="pepper" animal="bird" breed="cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mixed" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
