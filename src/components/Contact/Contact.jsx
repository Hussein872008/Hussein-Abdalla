import React, { useRef, useState } from 'react';
import "./Contact.css";
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from "@emailjs/browser";

const ContactData = [
  {
    id: 1,
    title: "Email",
    icon: <MdOutlineEmail />,
    info: "husseinabdalla424@gmail.com",
    link: "mailto:husseinabdalla424@gmail.com",
  },
  {
    id: 2,
    title: "Messenger",
    icon: <RiMessengerLine />,
    info: "Hussein Abdalla",
    link: "https://m.me/husseinabdalla010",
  },
  {
    id: 3,
    title: "WhatsApp",
    icon: <BsWhatsapp />,
    info: "01070334275",
    link: "https://wa.me/01070334275",
  },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_emeg9ba',
        'template_z4azgtl',
        form.current,
        '35pBPinnYHLlzY_B1'
      )
      .then(
        () => {
          console.log('Message sent successfully:');
          setStatus("✅ Your message has been sent!");
          form.current.reset();
          setTimeout(() => {
            setStatus('');
          }, 5000);
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
          setTimeout(() => {
            setStatus('');
          }, 5000);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="top_sec">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, title, info, link, icon }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="10" placeholder="Enter Your Message" required></textarea>

          <div className="form-footer">
            <button className="btn btn-primary" type="submit">Send Message</button>
            {status && (
              <span className={`status-message ${status.includes('Failed') ? 'error' : 'success'}`}>
                {status}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
