import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowUp } from "react-icons/ai";
import { TransitionLink } from "../utils/TransitionLink";
import { GalleryItem } from "@/components/gallery/GalleryItem";
import styles from "./gallery.module.scss";

const Gallery = () => {
  const [goUpBtn, setGoUpBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setGoUpBtn(window.scrollY >= 350);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className={styles.galleryWrapper} id="gallery">
        {/* Back Home */}
        <TransitionLink
          className={styles.goBackBtn}
          href="/"
          aria-label="Back to Homepage">
          <AiOutlineArrowLeft size="2.4rem" />
        </TransitionLink>

        {/* Tagline */}
        <div className={styles.galleryTagline}>
          <h2>Complete Collection of My Work</h2>
          <p>Explore all my projects, from apps to design experiments</p>
        </div>

        {/* Gallery */}
        <section className={styles.galleryItem}>
          {projects.map((project) => (
            <GalleryItem
              key={project.title}
              {...project}
            />
          ))}
        </section>

        {/* Up Button */}
        <button
          className={styles.goUpBtn}
          style={{ bottom: goUpBtn ? "3rem" : "-50%" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top">
          <AiOutlineArrowUp size="2.4rem" />
        </button>
      </main>
    </>
  );
};

const projects = [
  {
    cat: "💜, App, Python",
    title: "CCTV Analytics System",
    img: "/gallery/cctv.webp",
    code: "",
    link: "",
    tech: ["Python", "Streamlit", "OpenCV", "YOLOv8"],
    modal: (
      <>
        CCTV Analytics System — Developed a real-time video analytics platform using Python, Streamlit, OpenCV, and YOLOv8 for multi-camera surveillance. Implemented motion, crowd, loitering, fire/smoke, tampering, and abandoned-object detection with real-time alerts, dashboards, and optional face recognition/OCR support.
      </>
    ),
  },
  {
    cat: "💜, App, Java",
    title: "Personal Loan Origination System (LOS)",
    img: "/gallery/vidgen.webp",
    code: "",
    link: "",
    tech: ["Java Spring Boot", "React", "PostgreSQL", "Redis", "Kafka"],
    modal: (
      <>
        Personal Loan Origination System (LOS) — Developed a production-grade Loan Origination System using Java Spring Boot, React, PostgreSQL, Redis, and Kafka, automating the complete loan lifecycle from application to disbursement. Implemented JWT authentication, maker-checker workflow, KYC, credit assessment, document management, audit logging, and EMI tracking with a scalable microservice-ready architecture.
      </>
    ),
  },
  {
    cat: "💜, App, Next",
    title: "VidGen",
    img: "/gallery/vidgen.webp",
    code: "",
    link: "",
    tech: ["Next.js", "Convex", "Inngest", "Clerk", "Cloudinary", "PayPal"],
    modal: (
      <>
        VidGen — AI Video Generation Platform — engineered an end-to-end AI video pipeline: user script → Google Text-to-Speech → MP3 (Cloudinary) → automated video rendering (Remotion) — capable of producing production-ready videos with zero manual intervention. Implemented secure background job processing via Inngest and Clerk authentication; integrated PayPal for monetization — full SaaS architecture from auth to payments.
      </>
    ),
  },
  {
    cat: "💜, App, Solidity",
    title: "CertiFlex",
    img: "/gallery/certiflex.webp",
    code: "",
    link: "",
    tech: ["Solidity", "Polygon", "HTML", "CSS", "JavaScript"],
    modal: (
      <>
        CertiFlex — Blockchain Certificate Verification — built a tamper-proof digital certificate platform on Polygon; institutions mint certificates as on-chain records via smart contracts; verifiers confirm authenticity instant via unique hash lookup — eliminating forgery without a central authority. Implemented certificate ID validation with O(1) on-chain lookup, ensuring instant verification even at scale across multiple institutions.
      </>
    ),
  },
  {
    cat: "💜, App, React",
    title: "FluentFriends",
    img: "/gallery/fluentfriends.webp",
    code: "",
    link: "",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Stream API", "WebSockets"],
    modal: (
      <>
        FluentFriends — Real-Time Language Exchange Platform — built a real-time language learning platform supporting 1-on-1 and group video calls, screen sharing, and session recording — powered by Stream API for production-grade video infrastructure. Implemented JWT authentication, protected REST APIs, and WebSocket-based live messaging with typing indicators and emoji reactions; designed MongoDB schema for user sessions and conversation history.
      </>
    ),
  },
  {
    cat: "💜, App, React",
    title: "AI Code Reviewer",
    img: "/gallery/codereviewr.webp",
    code: "",
    link: "",
    tech: ["React", "Express.js", "Tailwind CSS", "Google Gemini AI"],
    modal: (
      <>
        AI Code Reviewer — Built an AI-powered code review platform using React, Express.js, Tailwind CSS, and Google Gemini AI. Implemented intelligent code analysis, bug detection, optimization suggestions, and secure REST APIs to provide instant feedback across multiple programming languages.
      </>
    ),
  },
  {
    cat: "💜, App, React",
    title: "WanderLust",
    img: "/gallery/wanderlust.webp",
    code: "",
    link: "",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    modal: (
      <>
        WanderLust — WanderLust is a web application designed to replicate the core functionalities of the popular vacation rental platform. It allows users to search for accommodations, view property details, and make bookings, while also enabling hosts to manage their listings effectively. Typically built using modern web technologies like the MERN stack.
      </>
    ),
  },
];

export default Gallery;
