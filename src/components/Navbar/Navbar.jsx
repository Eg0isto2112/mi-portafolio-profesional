import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <h2 className={styles.logo}>
            Luiggi<span className={styles.dot}>.</span>Portafolio
          </h2>
        </div>

        <div className={styles.links}>
          <a href="#about" className={styles.navLink}>Sobre mí</a>
          <a href="#projects" className={styles.navLink}>Proyectos</a>
          <a href="#skills" className={styles.navLink}>Habilidades</a>
          <a href="#contact" className={styles.contactBtn}>Contacto</a>
        </div>

        <div className={styles.menuBtn} onClick={() => setOpen(!open)}>
          <div className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}></div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className={styles.mobileLinks}>
              <a href="#about" onClick={() => setOpen(false)}>Sobre mí</a>
              <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
              <a href="#skills" onClick={() => setOpen(false)}>Habilidades</a>
              <a href="#contact" className={styles.mobileContactBtn} onClick={() => setOpen(false)}>Contacto</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}