import React, { useRef } from "react";
import "../styles/Contact.css";
import joa from "../assets/joa.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      form.current.user_name.value === "" &&
      form.current.user_email.value === "" &&
      form.current.message.value === ""
    ) {
      emailjs
        .sendForm(
          "service_fqgns39",
          "template_1e6lq61",
          form.current,
          "0X9jHOM3v2U7vNPrn"
        )
        .then(
          () => {
            form.current.reset();
            toast.success("Message sent successfully");
          },
          (error) => {
            toast.error("Message not sent");
            console.log(error.text);
          }
        );
    }
  };

  return (
    <motion.div
      className="c_container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="c_box">
        <h1>Contact</h1>
        <h2>Our users are very satisfied about our excellent support</h2>
        <div className="c_form">
          <div className="c_info">
            <img src={joa} alt="logo" />
            <p>
              My name is Joaquin Galdeano, I'm a web developer. This is one of
              my first projects as a Full Stack. Any questions contact me!!
            </p>
            <div className="c_icons">
              <Link
                className="fa-brands fa-linkedin"
                to="https://www.linkedin.com/in/joaquin-galdeano-174281209/"
                target="_blank"
              />
              <Link
                className="fa-brands fa-github"
                to="https://github.com/JoaGal"
                target="_blank"
              />
              <Link
                className="fa-solid fa-image-portrait"
                to="https://portfolio-joagal.vercel.app/"
                target="_blank"
              />
            </div>
          </div>
          <form className="c_social" ref={form} onSubmit={sendEmail}>
            <div className="c_input">
              <input
                placeholder=" "
                type="text"
                className="c_info"
                name="user_name"
              />
              <label>Name</label>
            </div>
            <div className="c_input">
              <input
                placeholder=" "
                type="text"
                className="c_info"
                name="user_email"
              />
              <label>Email</label>
            </div>
            <div className="c_input">
              <textarea
                placeholder=" "
                type="text"
                className="c_info"
                id="textArea"
                name="message"
              />
              <label>Message</label>
            </div>
            <button type="submit" className="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </motion.div>
  );
};
