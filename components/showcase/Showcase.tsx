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
      title: "CCTV Analytics System",
      img: "/gallery/cctv.webp",
      code: "https://github.com/Shri1927/CCTV.git",
      link: "",
      tech: ["Python", "Streamlit", "OpenCV", "YOLOv8"],
      desc: t("desc1"),
      modal: <>{t("modal1")}</>,
    },
    {
      title: "Personal Loan Origination System (LOS)",
      img: "/gallery/pl.webp",
      code: "https://github.com/Shri1927/PL.git",
      link: "",
      tech: ["Java Spring Boot", "React", "PostgreSQL", "Redis", "Kafka"],
      desc: t("desc2"),
      modal: <>{t("modal2")}</>,
    },
    {
      title: "VidGen",
      img: "/gallery/vidgen.webp",
      code: "https://github.com/Shri1927/Ai-shorts-Gen-V2.git",
      link: "",
      tech: ["Next.js", "Convex", "Inngest", "Clerk", "Cloudinary", "PayPal"],
      desc: t("desc3"),
      modal: <>{t("modal3")}</>,
    },
    {
      title: "CertiFlex",
      img: "/gallery/certiflex.webp",
      code: "https://github.com/Shri1927/final-year-project.git",
      link: "",
      tech: ["Solidity", "Polygon", "HTML", "CSS", "JavaScript"],
      desc: t("desc4"),
      modal: <>{t("modal4")}</>,
    },
    {
      title: "FluentFriends",
      img: "/gallery/fluentfriends.webp",
      code: "https://github.com/Shri1927/Zoomeet-video-call.git",
      link: "https://fluentfreinds.onrender.com/",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Stream API", "WebSockets"],
      desc: t("desc5"),
      modal: <>{t("modal5")}</>,
    },
    {
      title: "AI Code Reviewer",
      img: "/gallery/codereviewr.webp",
      code: "https://github.com/Shri1927/CodeReviewer.git",
      link: "https://code-reviewer-sigma-two.vercel.app/",
      tech: ["React", "Express.js", "Tailwind CSS", "Google Gemini AI"],
      desc: t("desc6"),
      modal: <>{t("modal6")}</>,
    },
    {
      title: "WanderLust",
      img: "/gallery/wanderlust.webp",
      code: "https://github.com/Shri1927/WanderLust.git",
      link: "",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      desc: t("desc7"),
      modal: <>{t("modal7")}</>,
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
        {projects.slice(0, 4).map((project) => {
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
