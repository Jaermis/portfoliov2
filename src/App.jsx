import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { ScrollProgressBar } from "./components/ScrollProgressBar/ScrollProgressBar";
import { Experience } from "./components/Experience/Experience";
import { Greeting } from "./components/Greeting/Greeting";
import { Education } from "./components/Education/Education";
import { Project } from "./components/Projects/Project";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Greeting />
      <div className={styles.grid} />
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
