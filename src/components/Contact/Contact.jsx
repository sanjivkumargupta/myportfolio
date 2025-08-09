import "./Contact.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useState } from "react";
import {ToastContainer,toast} from "react-toastify"

function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_TOKEN);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Form Submitted Failed")

    }
  };
  console.log("result",result);
  

  return (
    <div className='contact' id="contacts">
      <ToastContainer/>
      <div className="contact-title">
        <h4>Get in touch</h4>
        <h1>Contact me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p> Feel free to reach out if you have any questions, project ideas, or just want to connect. I'm open to freelance work, collaborations, and new opportunities. Let's build something awesome together!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoMdMail/><p>sanjivkumargupta247@gmail.com</p>
            </div>
            <div className="contact-detail">
              <BiSolidPhoneCall /><p>+91 6392316622</p>
            </div>
            <div className="contact-detail">
              <FaLocationDot /><p>Noida,Uttar Pradesh</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name"placeholder="Enter your name" name="name" required/>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" name="email" required/>
          <label htmlFor="message">Write your message here</label>
          <textarea type="text" id="message" placeholder="Enter your message" name="message" rows="4" required/>
          <button className="contact-submit" type="submit" disabled={result === "Sending...."}>
            {result === "Sending...." ? "Sending..." : "Submit now"}</button>
        </form>
      </div>
    </div>
  )
}

export default Contact