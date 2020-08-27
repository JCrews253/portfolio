import React from "react";
import "./Contact.css";
import ContactItem from "../../components/ContactItem/ContactItem";
import resume from "../../images/james-resume.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <p>Email: jcrews206@gmail.com</p>
      <ContactItem
        {...{
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/james-crews-208742132/",
        }}
      />
      <ContactItem
        {...{
          title: "GitHub",
          link: "https://github.com/JCrews253",
        }}
      />
      <ContactItem
        {...{
          title: "Facebook",
          link: "https://www.facebook.com/jamie.crews.14",
        }}
      />
      <ContactItem
        {...{
          title: "Resume",
          link: `${resume}`,
        }}
      />
    </div>
  );
};

export default Contact;
