import React, { useState } from "react";
import img from './Assets/bg.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'; // Import EmailJS

import Nav from "./Nav";

const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const EMAILJS_SERVICE_ID = "service_hb135uh";
const EMAILJS_TEMPLATE_ID = "template_ohjp03p";
const EMAILJS_USER_ID = "mD2sKo8rm8Qys2oEs";
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
    } else {
      // Send email via EmailJS
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS credentials
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID , templateParams,EMAILJS_USER_ID)
        .then((response) => {
          toast.success("Message sent! We'll get back to you soon.");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          toast.error("Failed to send message. Please try again.");
        });
    }
  };

  return (
  <>
    <Nav />
    <section className="bg-gray-100">
      {/* Header Section */}
      <div className="relative w-full h-96 ">
        <img
          className="absolute h-full w-full object-cover object-center"
          src={img}
          alt="gym background"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative pt-28 text-center">
          <h2 className="block font-sans font-bold text-white text-4xl lg:text-5xl">
            Get Pumped: Contact Us!
          </h2>
          <p className="block font-sans text-lg text-white opacity-80 mt-4">
            Join the ultimate fitness community. Reach out and let's level up together!
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="-mt-24 mb-12 px-6 lg:px-16 mt-5">
        <div className="container mx-auto">
          <div className="py-12 flex flex-col lg:flex-row justify-between items-center rounded-xl bg-white shadow-lg">
            {/* Contact Information */}
            <div className="w-full lg:w-1/2 p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-900"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="https://www.google.com/maps?q=Zoonimar,+Srinagar,+Jammu+and+Kashmir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-900 hover:underline"
                  >
                    Zoonimar, Srinagar, Jammu and Kashmir
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-900"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <button
                    className="text-lg font-medium text-blue-900 hover:underline"
                    onClick={() => window.location.href = 'tel:+916005839411'}
                  >
                    +91 6005839411
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-blue-900"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                    ></path>
                  </svg>
                  <a
                    href="mailto:thefitnessconnection86@gmail.com"
                    className="text-lg font-medium text-blue-900 hover:underline"
                  >
                    thefitnessconnection86@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl ">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name='name'
                  className="w-full h-12 px-4 rounded-md border-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name=''
                  className="w-full h-12 px-4 rounded-md border-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-indigo-50 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </section>
  </>
  );
};

export default Contact;


