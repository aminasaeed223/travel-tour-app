import { Component } from "react";
import "./destination.css";
import Mountain1 from "../assets/1.jpg";

import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
class Destinationdata extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="mountain" />
          <img src={this.props.img2} alt="mountain" />
        </div>
      </div>
    );
  }
}

export default Destinationdata;
