import React from 'react'
import './contact.css'
import AltContact from './alt-contact.jsx'
import ContactForm from './contact-form.jsx'

const Contact = (props) => {
  return (
    <div>
      <div className="portIntroText">
      <h1>Contact</h1>
      <h2>
          Send me a message or find me on&nbsp;<AltContact/>.
      </h2>
    </div>
    
    <ContactForm shape={props.shape} fontColor={props.fontColor}/>
    </div>
  )
}

export default Contact
