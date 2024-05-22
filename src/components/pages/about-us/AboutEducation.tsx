"use client";
import shapeImage from "@/../public/image/shape-12.png";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutContentItem from "./AboutContentItem";

const AboutEducation = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-education about-card p-32px"
    >
      <p className="heading-4 about-education__title">Education</p>
      <div className="about-education__content">
        <AboutContentItem
          title="Back End Engineering"
          year="2014"
          university="Turing School of Software Development and Design"
        />
        <AboutContentItem
          title="Bachelors of Arts, Tourism Resort Management, Marketing, minor in Accounting and Finance"
          year="2014 - 2007"
          university="Fort Lewis College"
        />
      </div>
      <Image
        src={shapeImage}
        width={53}
        height={53}
        alt="Card Element shape"
        className="about-education-shape light-mood-image-shape"
      />
    </motion.div>
  );
};

export default AboutEducation;
