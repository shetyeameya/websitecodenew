import React, { Component } from 'react';
import { Row,Carousel, Menu, Col, Button} from 'antd';
import PropTypes from 'prop-types';
import './Body.css'
// import GetViewPort from '../hoc-helpers/GetViewPort';
function onChange(a, b, c) {
    console.log(a, b, c);
  }
class Body extends Component{
    render(){
    return (
     <div className="bodycontent">
     <Carousel autoplay effect="scrollx" afterChange={onChange}>
     <div>
        <h3>
        <Row className="title">
            HEY, IM AMEYA!!
        </Row>
        <Row className="title1"> 
            I'M A CREATIVE DIGITAL DESIGNER &amp; DEVELOPER 
        </Row>
        <Row className="title2">
            CURRENTLY WORKING AS REACT DEVELOPER
        </Row>
        </h3>
        </div>
    <div>
        <h3>
        <Row className="title">
          DIGITAL!!
        </Row>
        <Row className="title1"> 
        I LIKE TO WORK ON AND CREATE NEW DIGITAL MEDIA.
        </Row>
        <Row className="title2">
            I LOVE TO CREATE ENGAGING WEBSITES AND MOBILE APPS!
        </Row>
        </h3>
    </div>
    <div>
        <h3>
        <Row className="title">
           DISCIPLINE!!
        </Row>
        <Row className="title1"> 
            IT'S ALL ABOUT DISCIPLINE, IT'S A BIG PART OF MY ROUTINE.
        </Row>
        <Row className="title2">
            WEATHER IT'S DESIGN OR DEVELOPMENT
        </Row>
        </h3>
    </div>
    <div>
        <h3>
        <Row className="title">
            INTERESTED??
        </Row>
        <Row className="title1"> 
            IF YOU HAVE A PROJECT YOU NEED HELP WITH,
        </Row>
        <Row className="title2">
            GET IN TOUCH!!!
        </Row>
        </h3>
    </div>
    
  </Carousel>
        {/* autoplay */}
    </div>
);
    }
};
export default Body;