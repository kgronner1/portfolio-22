import React from 'react'
import './nav.css'
import { BsFillArrowDownCircleFill, BsFillArrowDownSquareFill  } from 'react-icons/bs'

function sqaureNav(next) {
  return (<div className="navigation" id="bigNav"><BsFillArrowDownSquareFill/><span className="smallText">{next}</span></div>)
}

function circleNav(next) {
  return (<div className="navigation" id="bigNav"><BsFillArrowDownCircleFill/><span className="smallText">{next}</span></div>)
}

export default function nav(props) {

  //const iconColor= {color:"gray"}
  const shapeCircle = props.shape === "circle";
  var next = "";
  if (props.flip1){ next = "TO PORTFOLIO"}
  else if (props.flip2) {  next = "TO CONTACT"}
  else {next = "BACK TO  START"}

  return (shapeCircle ? circleNav(next) : sqaureNav(next))
}
