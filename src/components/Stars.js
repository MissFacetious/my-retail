import React, { Component } from 'react';

class Stars extends Component {



  render() {

    // grab from the Reviews options how many stars out of five there are
    // add the red/gray stars in an array
    var stars = new Array();
    for (var i = 0; i < this.props.option; i++) {
      stars.push("redStar");
    }
    for (var i = 0; i < 5-this.props.option; i++) {
      stars.push("grayStar");
    }

    // then print out the array out of five to the page
    return (
      <div className="reviewStars" name="review stars">
        <span className={stars[0]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={stars[1]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={stars[2]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={stars[3]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className={stars[4]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
    );
  };
}

export default Stars;
