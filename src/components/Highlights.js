import React, { Component } from 'react';

class Highlights extends Component {



  render() {
    return (
      <div>
        <div className="large">product highlights</div>
        <ul>
          <li className="small"><strong>Wattage Output:</strong> 1100 Watts</li>
          <li className="small"><strong>Number of Speeds:</strong> 3 </li>
          <li className="small"><strong>Capacity (volume):</strong> 72.0 Oz.</li>
          <li className="small"><strong>Appliance Capabilities:</strong> Blends</li>
          <li className="small"><strong>Includes:</strong> Travel Lid</li>
          <li className="small"><strong>Material:</strong> Plastic</li>
          <li className="small"><strong>Finish:</strong> Painted</li>
          <li className="small"><strong>Metal Finish:</strong> Chrome</li>
          <li className="small"><strong>Safety and Security Features:</strong> Non-Slip Base</li>
          <li className="small"><strong>Care and Cleaning:</strong> Easy-To-Clean, Dishwasher Safe Parts</li>
        </ul>
      </div>
    );
  };
}

export default Highlights;
