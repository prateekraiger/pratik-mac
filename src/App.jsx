import Dock from "#components/Dock";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import React from "react";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import TerminalWindow from "#windows/Terminal";
import Safari from "#windows/Safari";
import Resume from "#windows/Resume";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
      <Safari />
      <Resume />
    </main>
  );
};

export default App;
