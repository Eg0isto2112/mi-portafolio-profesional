import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi"; 
import styles from "./about.module.css";
import perfil from "../../assets/luiggi.jpg";

export default function About() {
  const title = "Sobre mí";

  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.scanline}></div>
      
      <motion.div 
        className={styles.aboutContent}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.textBlock}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.techTitle}>{title}</h2>
          </div>

          <div className={styles.description}>
            <Typewriter
              words={[
                "Egresado de la carrera de Ingeniería de Sistemas e Informática, con especial interés en la gestión de proyectos y procesos. Cuento con una sólida base en los fundamentos de la informática, lo que me permite comprender y coordinar eficientemente proyectos tecnológicos. Me caracterizo por mi compromiso, iniciativa y comunicación asertiva. He desarrollado habilidades de liderazgo al coordinar equipos en proyectos académicos, asegurando el cumplimiento de objetivos, plazos y resultados establecidos."
              ]}
              typeSpeed={35}
              cursor={false}
            />
          </div>

          <motion.div 
            className={styles.buttonWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <a 
              href="/CV_LUIGGI_MEJIAS_CERDA.pdf" 
              download 
              className={styles.downloadBtn}
            >
              <FiDownload className={styles.icon} />
              DESCARGAR CV
            </a>
          </motion.div>
        </div>

        <motion.div 
          className={styles.imageBlock}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.scannerWrapper}>
            <div className={styles.rotatingRing}></div>
            <div className={styles.imageFrame}>
              <img 
                src={perfil} 
                alt="Luiggi Mejias C." 
                className={styles.profileImage} 
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}