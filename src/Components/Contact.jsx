import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import send from "../assets/send.svg";
import { motion } from "framer-motion";
import gmail from "../assets/gmail.svg";
import meeting from "../assets/meeting.svg";
import copy from "../assets/copyright.svg";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_c9h0e8i",
        "template_u0qtfz3",
        {
          form_name: formData.name,
          to_name: "Aman",
          from_email: formData.email,
          to_email: "tiwariji2300@gmail.com",
          message: formData.message,
        },
        "7gKS2vrOo5E6xM8wa"
      )
      .then(() => {
        alert("Thank You. I will get back to you as soon as possible");
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong");
      });
  };

  return (
    <div className="bg-slate-100 mt-28 font-mono overflow-x-hidden">
      <div className="mx-8">
        <div className="hero  ">
          <div className=" flex-col lg:flex-row justify-between grid lg:grid-cols-2 grid-cols-1 my-5 lg:gap-44 gap-10">
            <motion.div
              className="hero-content flex-col lg:flex-row-reverse"
              animate={{
                y: [-20, 20], // Back and forth animation
              }}
              transition={{
                duration: 3.5,
                ease: "linear", // Linear easing for continuous motion
                loop: Infinity,
              }}
            >
              <div className="text-center lg:text-left">
                <img
                  src={send}
                  className="lg:h-64 lg:w-72 ml-16 lg:ml-0 "
                  alt="Send Image"
                  draggable={false}
                />
                <h1 className="text-5xl font-bold text-[#d8874a] ml-8">
                  Contact now
                </h1>
              </div>
            </motion.div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit}
                className="card-body text-slate-700"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input input-bordered"
                    rows={3}
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-ghost bg-[#d8874a] text-2xl text-slate-200"
                  >
                    {loading ? "Sending.." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex flex-row items-center justify-center text-xl">
          <a href="https://calendly.com/tiwariji2300" target="_blank">
            <button className="btn btn-ghost my-4 ">
              <img src={meeting} className=" h-10 w-10 rounded-full " />
              <p className=" hidden lg:block">let's meet</p>
            </button>
          </a>
          <a href="mailto:tiwariji2300@gmail.com" target="_blank">
            <button className="btn btn-ghost my-4 ml-4">
              <img src={gmail} className=" h-8 w-8 rounded-full" />
              <p className=" hidden lg:block">tiwariji2300@gmail.com</p>
            </button>
          </a>
          <span className=" flex flex-row">
            <img src={copy} className=" h-8 w-8 ml-5" alt=" c" />
            Aman Tiwari
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
