import React from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { ScrollProgressBar } from './components/ScrollProgressBar/ScrollProgressBar';

function App() {
  return (
    <div className={styles.App}>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
