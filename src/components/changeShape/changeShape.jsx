import './changeShape.css';
import React from 'react';

export default class ChangeShape extends React.Component {
  // className={`toggle ${ ? "circleS" : ""}`}

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onCheckChange(e.target.value);
  }

  render() {
    const shape = this.props.shape;

    return (

      <div className="toggleWrapper">
            <button htmlFor="toggle" className={`toggle ${shape}`} onClick={this.handleChange} value={shape}></button>
            <button className="dashSquare poz" onClick={this.handleChange} value={shape}></button>
            <button className="dashCircle poz" onClick={this.handleChange} value={shape}></button>
      </div>

    )
  }
}
