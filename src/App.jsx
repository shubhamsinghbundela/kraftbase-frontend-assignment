import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <header className={styles.heroHeader}>
          <Navbar />
        </header>
        <Hero />
      </section>
    </main>
  );
}

export default App;
