import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or just want to say hello, please send me a message and I'll get back to you as soon as possible.</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
