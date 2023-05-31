import React from 'react'; 
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Contact from './components/contact/contact.jsx'
import ChangeShape from './components/changeShape/changeShape.jsx'
import ChangeColorText from './components/changeColorText/changeColorText.jsx'
import gsap from "gsap";


// list to do
// mobile
// scroll up

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleShapeChange = this.handleShapeChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.flipKick = this.flipKick.bind(this);
    this.opacitySwitch = this.opacitySwitch.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    //this.debounce = this.debounce.bind(this);
    //this.handleScroll = this.handleScroll.bind(this)
    // defaults
    this.state = {
      shape: "square", 
      subName: "Catch me at my right angles.",
      flip1: "is-flipped",
      flip2: "",
      flip3: "",
      fontColor: "",
      y: 0,
      isDebouncing: false // Add a new state variable to keep track of whether the function is currently being debounced.
    }; 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }



  handleScroll(event) {
    console.log("run handleScroll");

    if (this.state.isDebouncing) { // If the function is currently being debounced, don't do anything.
      return;
    }

    this.setState({
      isDebouncing: true // Set isDebouncing to true before debouncing the function.
    });

    console.log(this.state.y, window.scrollY);

    if (this.state.y > window.scrollY) {
      this.flipKickBackward();
    } 
    else {
      this.flipKick();
    }

    this.setState({
      y: window.scrollY
    });
  }

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
    console.log("flipkick going", this.state.isDebouncing);

    if (this.state.isDebouncing) { // If the function is currently being debounced, don't do anything.
      return;
    }

    this.setState({
      isDebouncing: true // Set isDebouncing to true before debouncing the function.
    });

    this.doFlipKick();

    // Call the debounce function and pass it the function we want to debounce, the delay time, and a callback function to execute once the delay has passed.
    setTimeout(() => {
      this.setState({
        isDebouncing: false // Set isDebouncing back to false once the delay has passed and the function has been called.
      });      
    }, 2500);
  }

  flipKickBackward(e) {
    console.log("flipkick going back", this.state.isDebouncing);

    if (this.state.isDebouncing) { // If the function is currently being debounced, don't do anything.
      return;
    }

    this.setState({
      isDebouncing: true // Set isDebouncing to true before debouncing the function.
    });

    if (this.state.flip1 === "is-flipped") {
      // on 1, force state 2 so that we go to 3
      this.setState({
        flip1: "",
        flip2: "is-flipped",
        flip3: "", 
      });
    }
    else if (this.state.flip3 === "is-flipped") {
      // on 3, force state 1 so that we go to 2
      this.setState({
        flip1: "is-flipped",
        flip2: "",
        flip3: "", 
      });
    }
    else if (this.state.flip2 === "is-flipped") {
      // on 2, force state 3 so that we go to 1
      this.setState({
        flip1: "",
        flip2: "",
        flip3: "is-flipped", 
      });
    }


    this.doFlipKick();

    // Call the debounce function and pass it the function we want to debounce, the delay time, and a callback function to execute once the delay has passed.
    setTimeout(() => {
      this.setState({
        isDebouncing: false // Set isDebouncing back to false once the delay has passed and the function has been called.
      });      
    }, 2500);
  }


  doFlipKick() {
    console.log("doFlipKick");
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
    const fontColor = this.state.fontColor;

    const startOff = {
      transform: "translate(0px, 2000px)",
      opacity: "0"
    }

    return (
      <div className="allContain" onWheel={this.handleScroll}>
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
                  <div className='flex-center startControls'>
                    <ChangeColorText shape={shape} onColorChange={this.handleColorChange}/>
                  </div>
                
              </div>

              <div id="sideB" className={`shape tready card__face ${flip2} ${shape} ${fontColor}`} style={startOff}>
                <div className={`inky${shape}`}>
                </div>
                  <Portfolio shape={shape}/>
                
              </div>
              <div id="sideC" className={`shape tready card__face ${flip3} ${shape} ${fontColor}`} style={startOff}>
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