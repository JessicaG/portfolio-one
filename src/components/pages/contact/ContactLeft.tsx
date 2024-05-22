"use client";
import { motion } from "framer-motion";
import { Call, Location, Send2 } from "iconsax-react";
import Link from "next/link";

const ContactLeft = () => {
  return (
    <div className="contact-section__left">
      <span className="heading-5 contact-sub-title">Contact Info</span>
      <h3 className="heading-2 section-title">Get In Touch</h3>
      <p className="textXL font-thin just-hello">
        Would love to hear from you! Just <br /> say hello
      </p>

      <div className="m-t-60px contact-info">
        {/* phone */}
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-info__card"
        >
          <div className="contact-info__card-icon">
          <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-info__card"
        >
          <div className="contact-info__card-icon">
            <Send2 size={32} color="#9747FF" />
          </div>
          <div className="contact-info__card-info">
            <p className="textLead">Email</p>
            <Link
              href="mailto:hello@jessicawest.me"
              className="textM font-thin link"
            >
              hello@jessicawest.me
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-info__card"
        >
          <div className="contact-info__card-icon">
            <Location size={32} color="#9747FF" />
          </div>
          <div className="contact-info__card-info">
            <p className="textLead">Address</p>
            <p className="textM font-thin link">Seattle, WA || London, UK </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactLeft;
