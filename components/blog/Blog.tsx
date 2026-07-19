import Image from "next/image";
import { useTranslations } from "next-intl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./blog.module.scss";

export const Blog = () => {
  const t = useTranslations("Blog");
  
  const tech = ["TypeScript", "Strict Mode", "Zod", "Express", "Interactive Playground"];

  return (
    <section id="blog" className="section-wrapper">
      <SectionHeader title={t("section")} dir="l" />
      
      <div className={styles.blogSection}>
        <Reveal width="100%">
          <div className={styles.blogCard}>
            {/* Left side: Image */}
            <a 
              href="/blog/typescript-tutor"
              className={styles.imageWrapper}
              aria-label={t("tutorTitle")}
            >
              <Image
                src="/gallery/typescript-tutor.png"
                alt="TypeScript Tutor Banner"
                width={800}
                height={450}
                priority
              />
            </a>

            {/* Right side: Content */}
            <div className={styles.contentWrapper}>
              <Reveal>
                <div className={styles.tag}>{t("tutorTag")}</div>
              </Reveal>
              
              <Reveal width="100%">
                <a href="/blog/typescript-tutor">
                  <h4 className={styles.title}>{t("tutorTitle")}</h4>
                </a>
              </Reveal>

              <Reveal>
                <div className={styles.techList}>
                  {tech.map((item) => (
                    <span key={item} className={styles.techChip}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <p className={styles.desc}>{t("tutorDesc")}</p>
              </Reveal>

              <Reveal>
                <a
                  href="/blog/typescript-tutor"
                  className={styles.readMoreBtn}
                  aria-label={t("readMore")}
                >
                  {t("readMore")}
                  <AiOutlineArrowRight size="2rem" />
                </a>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
