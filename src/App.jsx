import Dock from "#components/Dock";
import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import React from "react";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import {
  TerminalWindow,
  SafariWindow,
  ResumeWindow,
  FinderWindow,
  TextWindow,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <FinderWindow />
      <TextWindow />
    </main>
  );
};

export default App;
