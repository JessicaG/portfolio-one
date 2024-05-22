"use client";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import { motion } from "framer-motion";
import { Xrp, People } from "iconsax-react";
import ProfileIcon from "../landing-one/ProfileIcon";

const ProfileCardAbout = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-profile about-card p-32px profile-card"
    >
      <div className="profile-icons">
        <ProfileIcon icon={<Xrp size="40" />} socialLink="https://x.com/jessicaewest" />
        <ProfileIcon icon={<People size="40" />} socialLink="https://www.linkedin.com/in/jessicagwest/" />
      </div>
      <div>
        <p className="textM about-profile__text">Stay With Me</p>
        <LinkPrimaryTwo
          link="/about-us"
          linkText="Profiles"
          className="about-profile-link"
        />
      </div>
    </motion.div>
  );
};

export default ProfileCardAbout;
