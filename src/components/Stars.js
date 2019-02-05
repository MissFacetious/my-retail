import React, { Component } from 'react';

class Stars extends Component {



  render() {
    return (
      <div className="reviewStars" name="review stars">
        <span className="redStar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="redStar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="redStar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="redStar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="grayStar">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    );
  };
}

export default Stars;
