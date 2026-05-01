import styles from "./footer.module.css";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerContainer}>
        
        {/* SECCIÓN IZQUIERDA: Identidad */}
        <div className={styles.left}>
          <p className={styles.name}>Luiggi Mejias C.</p>
          <span className={styles.year}>© {currentYear} | Portafolio Profesional</span>
        </div>

        {/* SECCIÓN CENTRAL: Especialidad */}
        <div className={styles.center}>
          <span className={styles.techTag}>Ingeniería de Sistemas e Informática</span>
        </div>

        {/* SECCIÓN DERECHA: Redes */}
        <div className={styles.right}>
          <a 
            href="https://www.linkedin.com/in/luiggi-mejias" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.iconCircle} 
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a 
            href="mailto:luiggimc2112@gmail.com" 
            className={styles.iconCircle} 
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a 
            href="tel:+51982889726" 
            className={styles.iconCircle} 
            aria-label="Teléfono"
          >
            <FaPhoneAlt />
          </a>

          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.iconCircle} 
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}