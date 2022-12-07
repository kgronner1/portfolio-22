import React, { useState } from "react";
import './contact.css'
import { BsFillArrowRightCircleFill, BsFillArrowRightSquareFill  } from 'react-icons/bs'

const ContactForm = (props) => {

  const [state, setState] = React.useState({
    messageSent: false
  })

  const shapeCircle = props.shape === "circle";

  function sqaureNav() {
    return (<BsFillArrowRightSquareFill/>)
  }
  
  function circleNav() {
    return (<BsFillArrowRightCircleFill/>)
  }
  const formStyle = {
    width:"300px",
    background: "none",
    border:props.fontColor === "" ? "2px solid #333" : "2px solid #fff"
  }
  const hideBut = {
    display: state.messageSent === true ? "none" : "inline"
  }

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setState({ messageSent: true });
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:1234/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
  };
  return (
    <form onSubmit={handleSubmit} >
      <div className="containInput">
        <div className="formLabel" htmlFor="name">Name:</div>
        <input style={formStyle} type="text" id="name" required maxLength="100" />
      </div>
      <div className="containInput">
        <div className="formLabel" htmlFor="email">Email:</div>
        <input style={formStyle} type="email" id="email" required maxLength="100" />
      </div>
      <div className="containInput">
        <div className="formLabel" htmlFor="message">Message:</div>
        <textarea style={formStyle} className="formTextArea" id="message" required maxLength="600" />
      </div>
      <button type="submit" className="hideButAsDiv"><h2 className={state.messageSent === true ? "" : "textUnderline"}>{state.messageSent === true ? "Message received, thanks!" : "Submit"}</h2><span style={hideBut}>{shapeCircle ? circleNav() : sqaureNav()}</span></button>
    </form>
  );
};

export default ContactForm;
