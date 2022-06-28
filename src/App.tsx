import type { Component } from 'solid-js';

import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router"

import * as styles from "./index.scss";

import Home from "./components/Home";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
// import Skills from './components/Skills';

const Skills = lazy(() => import("./components/Skills"));

const App: Component = () => {
  return (
    <main class="h-screen">
      <div class="flex-block text-center justify-center">
      <p class="pt-2 text-4xl text-red-400 tracking-widest">
        Sean Ray
      </p>
      <a
        class="text-xs text-blue-400 tracking-widest"
        href="https://github.com/notseanray/seanray.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        @notseanray
      </a>
      <Navbar />
      <header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </header>
      <Footer />
      </div>
    </main>
  );
};

export default App;
