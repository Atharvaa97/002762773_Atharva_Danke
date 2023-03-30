import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import ContactImage from "../../images/Contact.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <img src={ContactImage} alt="NUFlix logo" />
      <Card
        header={"Contact Us!"}
        cardContent="
        Our phones are on and our inbox is open. 
        Contact us at:
        857-693-8526
        "
      />
      <form>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label htmlFor="message">Message:</label>
  <textarea id="message" name="message" rows="5" required></textarea>
<br></br>
  <button type="submit">Send</button>
</form>

    </div>
  );
};

export default Contact;
