import React from "react";
import "./ContactItem.css";

interface ContactItemProps {
  title: string;
  link: string;
}

const ContactItem = (props: ContactItemProps) => {
  return (
    <div className="contactItem" onClick={() => window.open(props.link)}>
      <p>{props.title}</p>
    </div>
  );
};

export default ContactItem;
