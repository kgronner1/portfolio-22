import React from 'react'
import './header.css'


export default function header(props) {

  return (
    <div>
      <header>
        <div className="contnainer header_container">
          
          <h1 className="luma__text" id="myName">Kyler Gronner</h1>
          <span className="smallText">Full Stack Web Developer</span>
          <h2 id="shapeTextSubName">{props.subHead}</h2>
        </div>
      </header>
    </div>
  )
}
