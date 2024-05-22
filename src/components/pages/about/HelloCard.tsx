"use client";
import image from "@/../public/image/shape-11.png";
import { motion } from "framer-motion";
import Image from "next/image";

const HelloCard = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card card-hello"
    >
      <span className="heading-3">Hello,</span>
      <h2 className="heading-3">I’m Jessica West, an experienced</h2>
      <span className="heading-3">Developer Experience Leader.</span>
      <p className="textL">
      Known for a results-driven approach and the ability to galvanize teams for operational excellence. I work tirelessly to collaborate, seamlessly bridging the gap between diverse teams and domains, from product development to marketing and engineering.
      </p>
      <Image
        src={image}
        width={99}
        height={99}
        alt="Shape"
        className="card-hello__shape light-mood-image-shape"
      />
    </motion.div>
  );
};

export default HelloCard;
