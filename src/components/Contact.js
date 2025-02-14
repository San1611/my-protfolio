import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

        {/* Contact Info */}
        <div className="contact-info">
          <p>Email: <a href="mailto:sanskritimahata1611@gmail.com">sanskritimahata1611@gmail.com</a></p>
          <p>Phone: <a href="tel:+919831041868">+91 98310 41868</a></p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/sanskriti-mahata-69994124b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/San1611" target="_blank" rel="noopener noreferrer">GitHub</a>
            
          </div>
        </div>
     
    </section>
  );
};

export default Contact;
