import React, { useRef } from "react";
import "../styles/Contact.css";
import joa from "../assets/joa.jpeg";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { InputCustom } from "../components/InputCustom";

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
    <div className="box">
      <h1 className="textShadow">Contact</h1>
      <h2 className="textShadow">Our users are very satisfied about our excellent support</h2>
      <div className="contact_form">
        <div className="contact_info">
          <img src={joa} alt="logo" className="boxShadow"/>
          <p className="textShadow">
            My name is Joaquin Galdeano, I'm a web developer. This is one of my
            first projects as a Full Stack. Any questions contact me!!
          </p>
          <div>
            <Link
              className="fa-brands fa-linkedin textShadow"
              to="https://www.linkedin.com/in/joaquin-galdeano-174281209/"
              target="_blank"
            />
            <Link
              className="fa-brands fa-github textShadow"
              to="https://github.com/JoaGal"
              target="_blank"
            />
            <Link
              className="fa-solid fa-image-portrait textShadow"
              to="https://portfolio-joagal.vercel.app/"
              target="_blank"
            />
          </div>
        </div>
        <form className="contact_letter" ref={form} onSubmit={sendEmail}>
          <InputCustom key="name" label={"Name"} type={"text"} name="user_name" />
          <InputCustom key="gmail" label={"Email"} type={"email"} name="user_email" />
          <div className="inputCustom">
            <textarea
              placeholder=" "
              type="text"
              className="boxShadow"
              name="message"
            />
            <label>Message</label>
          </div>
          <button type="submit" className="boxShadow submit">Submit</button>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};
