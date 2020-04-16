import React, { Component } from 'react';
import { Row,Carousel, Button} from 'antd';
import './Body.css'
// import GetViewPort from '../hoc-helpers/GetViewPort';
function onChange(a, b, c) {
    console.log(a, b, c);
  }
class Body extends Component{
    showModalR = () => {
        window.open("https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cases-in-us.html", "_blank")
      };
    render(){
    return (
     <div className="bodycontent">
     <Carousel autoplay effect="scrollx" afterChange={onChange}>
     <div>
        <h3>
        <Row className="titleCovid">
        Covid-19 Alert!
        </Row>
        <Row className="titleCovid1">
        Stay Home! 
        </Row>
        <Row className="titleCovid1">
        Wash Your Hands regularly!  
        </Row>
        <Row className="titleCovid1">
        Stay Safe!  
        </Row>
        <Row className="titleCovid1"> 
            Help Reduce the Curve 
        </Row>
        <Button className="covidbut" type="primary" onClick={this.showModalR}>
                            Visit CDC Website
                        </Button>
        <Row className="titleCovid1">
        
            For latest updates Please vist the CDC website only.
        </Row>
        </h3>
        </div>
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