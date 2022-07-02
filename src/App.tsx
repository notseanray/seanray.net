import type { Component } from 'solid-js';

import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router"

import * as styles from "./index.scss";

import Home from "./components/Home";

import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Skills = lazy(() => import("./components/Skills"));
const Music = lazy(() => import("./components/Music"));
const Projects = lazy(() => import("./components/Projects"));

const App: Component = () => {
  return (
    <main class="h-screen">
      <div class="flex-block text-center justify-center">
      <p class="pt-2 font-bold text-4xl text-blue-400 tracking-widest">
        Sean Ray
      </p>
      <a
        class="text-xs font-semibold text-red-400 tracking-widest hover:underline"
        href="https://github.com/notseanray/seanray.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        @notseanray
      </a>
      <Navbar />
      <header>
        <div class="mb-2" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </header>
      <Footer />
      </div>
    </main>
  );
};

export default App;
