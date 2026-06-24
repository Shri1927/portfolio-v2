import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Stack</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Java</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">SQL</span>
            <span className="chip">Solidity</span>
            <span className="chip">Python (familiar)</span>
            <span className="chip">React.js</span>
            <span className="chip">Next.js</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">HTML5</span>
            <span className="chip">CSS3</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express.js</span>
            <span className="chip">REST APIs</span>
            <span className="chip">WebSockets</span>
            <span className="chip">Inngest</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">MySQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Convex</span>
            <span className="chip">Google Text-to-Speech</span>
            <span className="chip">Clerk</span>
            <span className="chip">LLM API</span>
            <span className="chip">Git</span>
            <span className="chip">GitHub</span>
            <span className="chip">Docker (learning)</span>
            <span className="chip">CI/CD (GitHub Actions)</span>
            <span className="chip">Agile/Scrum</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
