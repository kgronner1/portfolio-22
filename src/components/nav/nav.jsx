import React from 'react'
import './nav.css'
import { BsFillArrowDownCircleFill, BsFillArrowDownSquareFill, BsFillArrowUpCircleFill, BsFillArrowUpSquareFill  } from 'react-icons/bs'

function sqaureNav(next) {
  return (<div className="navigation"><BsFillArrowDownSquareFill/><span className="smallText">{next}</span></div>)
}

function circleNav(next) {
  return (<div className="navigation"><BsFillArrowDownCircleFill/><span className="smallText">{next}</span></div>)
}

export default function nav(props) {

  //const iconColor= {color:"gray"}
  const shapeCircle = props.shape === "circle";

  if (props.flip1){ var next = "TO PORTFOLIO"}
  else if (props.flip2) {  var next = "TO CONTACT"}
  else {var next = "BACK TO  START"}

  return (shapeCircle ? circleNav(next) : sqaureNav(next))
}
