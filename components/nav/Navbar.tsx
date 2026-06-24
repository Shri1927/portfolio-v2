import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import styles from "./navbar.module.scss";
import { Socials } from "./Socials";

export const Navbar = () => {
  return (
    <header className={styles.heading}>
      {/* <- left */}
      <div className={styles.headingLeft}>
        <Socials />
      </div>

      {/* right -> */}
      <div className={styles.headingButtons}>
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <a
            href="/docs/Shrishail_Bidave.pdf"
            target="_blank"
            rel="nofollow"
            title="Resume">
            <button className={styles.outlineButton} aria-label="View Resume">
              Resume
              <AiOutlineDownload size="2.4rem" />
            </button>
          </a>
        </motion.span>
      </div>
    </header>
  );
};
