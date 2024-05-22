"use client";
import { motion } from "framer-motion";
import { Xrp, People } from "iconsax-react";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="m-t-120px social-icon-section">
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://www.linkedin.com/in/jessicagwest/" className="social-icon">
          <span className="icon">
            <People size={24} />
          </span>
          <span className="textLead icon-name">LinkedIn</span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://x.com/jessicaewest" className="social-icon">
          <span className="icon">
            <Xrp size={24} />
          </span>
          <p className="textLead icon-name">Twitter</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default SocialIcons;
