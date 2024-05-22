"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef } from "react";
import { toast } from "react-toastify";

const ContactRight = () => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zncui33",
        "template_g29dg9x",
        // @ts-ignore
        form?.current,
        "vwxDnFiP-_IWm1Y4h"
      )
      .then(
        (result) => {
          toast("Message Send Successfully!");
        },
        (error) => {
          toast("Message Not Send!");
        }
      );
  };

  return (
    <div className="contact-style contact-section__right">
      <form ref={form} onSubmit={sendEmail}>
        <div className={`contact-form `}>
          <div className="two-input-field">
            <motion.div
              initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="single__input"
            >
              <label className="textXL label__style" htmlFor="name">
                Name
              </label>
              <input
                className="input-field-style"
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
              />
            </motion.div>
            <motion.div
              initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="single__input"
            >
              <label className="textXL label__style" htmlFor="email">
                Email
              </label>
              <input
                className="input-field-style"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </motion.div>
          </div>
          <div className="two-input-field">
            <motion.div
              initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="single__input"
            >
              <label className="textXL label__style" htmlFor="phone">
                Phone (Optional)
              </label>
              <input
                className="input-field-style"
                id="phone"
                type="number"
                placeholder="Your phone"
              />
            </motion.div>
            <motion.div
              initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="single__input"
            >
              <label className="textXL label__style" htmlFor="subject">
                Subject
              </label>
              <input
                className="input-field-style"
                id="subject"
                type="text"
                placeholder="Your subject"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="single__input"
          >
            <label className="textXL label__style" htmlFor="question">
              Message
            </label>
            <textarea
              className="input-field-style"
              id="question"
              rows={8}
              placeholder="Type your message"
              name="message"
            ></textarea>
          </motion.div>
        </div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="m-t-40px"
        >
          <button className="see-all-blog">
            <span className="textM post-comment light-theme-white-text">
              Submit Now
            </span>
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default ContactRight;
