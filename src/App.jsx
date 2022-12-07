import React, { useState, useCallback, useEffect } from 'react'; 
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Contact from './components/contact/contact.jsx'
import ChangeShape from './components/changeShape/changeShape.jsx'
import ChangeColorText from './components/changeColorText/changeColorText.jsx'
import gsap from "gsap";


// list to do
// contact form
// size of main comp

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleShapeChange = this.handleShapeChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.flipKick = this.flipKick.bind(this);
    //this.handleScroll = this.handleScroll.bind(this)
    // defaults
    this.state = {
      shape: "square", 
      subName: "Catch me at my right angles.",
      flip1: "is-flipped",
      flip2: "",
      flip3: "",
      fontColor: ""
    }; 
  }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll, { passive: true })
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
  
  // handleScroll(event) {
  //   if (this.state.y > window.scrollY) {

  //   } 
  //   else {

  //   }
  //   this.opacitySwitch()
  // }

  opacitySwitch(a, b) {
    gsap.to( document.querySelector(a), .8, {
      opacity: 0,
      // scale:0.01,
      // rotation:0,
      y: 2000
    }
    )
    gsap.to( document.querySelector(b), .8, {
      opacity: 1,
      // scale:1,
      // rotation:360,
      y: 0
    }
    )
  }


  handleShapeChange(shape) {
    if (shape === "square") {
      // if circle
      this.setState({
        shape: "circle", 
        subName: "Take a look a-round."
      });
    }
    else {
      // if square
      this.setState({
        shape: "square", 
        subName: "Catch me at my right angles."
      });
    }
  }

  handleColorChange(fontColor) {
    if (fontColor === "") {
      // if circle
      this.setState({
        fontColor: ""
      });
    }
    else {
      // if square
      this.setState({
        fontColor: "whiteFont"
      });
    }
  }

  flipKick(e) {
    if (this.state.flip1 === "is-flipped") {
      // if on 2
      this.setState({
        flip1: "",
        flip2: "is-flipped",
        flip3: "", 
      });
      this.opacitySwitch("#sideA", "#sideB");
    }
    else if (this.state.flip2 === "is-flipped")
    {
      // if on 3
      this.setState({
        flip1: "",
        flip2: "",
        flip3: "is-flipped", 
      });
      this.opacitySwitch("#sideB", "#sideC");
    }
    else {
      // back to 1
      this.setState({
        flip1: "is-flipped",
        flip2: "",
        flip3: "", 
      });
      this.opacitySwitch("#sideC", "#sideA");
    }
  }

  render() {
    const shape = this.state.shape;
    const subName = this.state.subName;
    const flip1 = this.state.flip1;
    const flip2 = this.state.flip2;
    const flip3 = this.state.flip3;
    const fontColor = this.state.fontColor

    return (
      <div className="allContain">
        <div className={`inky${shape} bigInky`}>
        </div>
        <div className="shapeContain">
              <div id="sideA"  className={`shape tready card__face ${flip1} ${shape} ${fontColor}`}>
                <div className={`inky${shape}`}>
                </div>
                  <div className='flex-center'>
                    <Header subHead={subName}/>
                  </div>
                  <div className='flex-center'>
                    <ChangeShape shape={shape} onCheckChange={this.handleShapeChange}/>
                  </div>
                  <div className='flex-center'>
                    <ChangeColorText shape={shape} onColorChange={this.handleColorChange}/>
                  </div>
                
              </div>

              <div id="sideB" className={`shape tready card__face ${flip2} ${shape} ${fontColor}`}>
                <div className={`inky${shape}`}>
                </div>
                  <Portfolio shape={shape}/>
                
              </div>
              <div id="sideC" className={`shape tready card__face ${flip3} ${shape} ${fontColor}`}>
                <div className={`inky${shape}`}>
                </div>
                  <Contact shape={shape} fontColor={fontColor}/>
                
              </div>

        </div>
        <div className="navContain">
              <div id="nav" className={`${fontColor}`}  onClick={this.flipKick}>
              <Nav shape={shape} flip1={flip1} flip2={flip2}/>
              </div>
        </div>
        
      </div>
    );
  }
}