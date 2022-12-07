import React from 'react'
import './changeColorText.css'
import { ChromePicker } from 'react-color/lib'
import FontSelector from './fontSelector.jsx'

export default class ChangeColorText extends React.Component {

  constructor(props){
    super(props);
  }

  state = {
    background: '#8393A2'
  };

  handleBackgroundChange = (color) => {
    this.setState({ background: color.hex });
  }

  handleBackgroundChangeComplete = (color) => {
    document.querySelector('#sideA').style.background = color.hex;
    document.querySelector('#sideB').style.background = color.hex;
    document.querySelector('#sideC').style.background = color.hex;
    // take the color hex and determine if its light or dark and set textColor accordingly
    var luma = (color.rgb.r + color.rgb.g + color.rgb.b) / 3; // per ITU-R BT.709
  
    if (luma < 128) {
        // pick a different colour
        // document.querySelectorAll('h1, h2, h3, h4, h5, p, .navigation svg').forEach(item => {
        //   item.classList.add("whiteFont");
        // }
        console.log("hereree");
        this.props.onColorChange("whiteFont");
    }
    else {
      this.props.onColorChange("");
    }
  }

  render() {
  return (
    <div className='flex-by-row'>
      <div>
      <h2>Background color</h2>
      <ChromePicker color={ this.state.background } onChange={ this.handleBackgroundChange }
        onChangeComplete={ this.handleBackgroundChangeComplete }/>
      </div>
      <div>
      <h2>Font Style</h2>
      <FontSelector />
      </div>
    </div>
  )
  }
}
