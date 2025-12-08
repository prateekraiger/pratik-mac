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
  ContactWindow,
} from "#windows";
import Home from "#components/Home";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <FinderWindow />
      <TextWindow />
      <ContactWindow />
    </main>
  );
};

export default App;
