import React from 'react'
import './changeColorText.css'

export default class FontSelector extends React.Component {

  state = {
    fontFamily: 'Questrial'
  };

  handleFontChange = (font) => {
   
    this.setState({ fontFamily: font.target.value });

    document.querySelectorAll('h1, h2, h3, h4, h5, p, span').forEach(item => {
      item.style.fontFamily = font.target.value;
    })

  }

  render() {
  return (
      <select multiple className="fontSelect " fontFamily={ this.state.font } onChange={ this.handleFontChange }>

        <option value="Questrial" className="qFont">Questrial</option>


        <option value="Comic Neue" className="cnFont">Comic Neue</option>

        <option value="Josefin Sans" className="jFont">Josefin Sans</option>
        <option value="Montserrat" className="mFont">Montserrat</option>
        
      </select>
  )
  }
}
