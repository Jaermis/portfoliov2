import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { ScrollProgressBar } from "./components/ScrollProgressBar/ScrollProgressBar";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <div className={styles.App}>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
