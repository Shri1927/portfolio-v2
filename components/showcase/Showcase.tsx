import { useTranslations } from "next-intl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ShowcaseItem } from "./ShowcaseItem";
import { TransitionLink } from "../utils/TransitionLink";
import styles from "./showcase.module.scss";

export const Showcase = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: "VidGen",
      img: "/gallery/vidgen.webp",
      code: "",
      link: "",
      tech: ["Next.js", "Convex", "Inngest", "Clerk", "Cloudinary", "PayPal"],
      desc: t("desc1"),
      modal: <>{t("modal1")}</>,
    },
    {
      title: "CertiFlex",
      img: "/gallery/certiflex.webp",
      code: "",
      link: "",
      tech: ["Solidity", "Polygon", "HTML", "CSS", "JavaScript"],
      desc: t("desc2"),
      modal: <>{t("modal2")}</>,
    },
    {
      title: "FluentFriends",
      img: "/gallery/fluentfriends.webp",
      code: "",
      link: "",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Stream API", "WebSockets"],
      desc: t("desc3"),
      modal: <>{t("modal3")}</>,
    },
  ];

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={t("section")} dir="r" />
      
      <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery" aria-label="View Full Gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </TransitionLink>
      </div>

      <div className={styles.projects}>
        {projects.map((project) => {
          return <ShowcaseItem key={project.title} {...project} />;
        })}
      </div>

      <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery" aria-label="View Full Gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </TransitionLink>
      </div>
    </section>
  );
};
