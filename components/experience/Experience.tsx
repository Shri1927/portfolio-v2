import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  const t = useTranslations("Experience");

  const experiences = [
    {
      title: t("exp1"),
      role: t("role1"),
      date: t("date1"),
      location: t("loca1"),
      description: t("desc1"),
      tech: [
        "Backend",
        "Frontend",
        "QA",
        "Unit Testing",
        "Debugging",
        "Agile",
        "UI/UX",
        "Authentication"
      ],
    },
    {
      title: t("exp2"),
      role: t("role2"),
      date: t("date2"),
      location: t("loca2"),
      description: t("desc2"),
      tech: [
        "React",
        "Shadcn UI",
        "Node.js",
        "Express.js",
        "JWT",
        "SQL",
        "NoSQL",
        "API"
      ],
    },
  ];

  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={t("section")} dir="l" />
      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} {...experience} />
      ))}
    </section>
  );
};
