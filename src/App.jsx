import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import ForAgencies from "./components/ForAgencies/ForAgencies";
import ForLenders from "./components/ForLenders/ForLenders";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <header className={styles.heroHeader}>
          <Navbar />
        </header>
        <Hero />
      </section>
      <section id="lenders" className={styles.forLenders}>
        <ForLenders />
      </section>
      <section id="agencies" className={styles.forAgencies}>
        <ForAgencies />
      </section>
      <section id="testimonials" className={styles.testimonials}>
        <Testimonials />
      </section>
      <footer id="contact" className={styles.footer}>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
