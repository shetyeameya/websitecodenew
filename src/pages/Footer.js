import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import { Row, Col, Button, Modal} from 'antd';
import PropTypes from 'prop-types';
import './Footer.css'
import Ameya_logo_2 from '../images/Ameya_logo_2.png'
import GetViewPort from '../hoc-helpers/GetViewPort'


 function info() {
  Modal.info({
    title: 'Bellow is my Email address, you can reach out to me here.',
    content: (
      <div>
        <p className="emailtext">shetye.ameya.7@gmail.com</p>
      </div>
    ),
    onOk() {},
  });
} 
function info1() {
  Modal.info({
    title: 'Bellow is my Skype username, you can reach out to me here.',
    content: (
      <div>
        <p className="emailtext">shetyeameya7</p>
      </div>
    ),
    onOk() {},
  });
} 


class Footer extends Component{

  handlefacebookClick = (e) => {
    
      window.open("https://www.facebook.com/ameya.shetye","self","blank")
      console.log(this.state)
  }
  handleLinkedinClick = (e) => {
    
    window.open("https://www.linkedin.com/in/shetyeameyasmu","self","blank")
    console.log(this.state)
}
  handleinstagramClick = (e) => {
    
  window.open("https://www.instagram.com/shetyeameya/","self","blank")
  console.log(this.state)
}
  handlegithubClick = (e) => {
    
  window.open("https://github.com/shetyeameya","self","blank")
  console.log(this.state)
}
  
    render() {
        const { width } = this.props;
        // , saveData
        if (width < 786) {
            return(
                <footer className="footer">
                  <div>
                      <div>
                        <Col align="center" className="imgclasdiv">
                          <img className="imgclass" src={Ameya_logo_2} alt="Ameya_logo_2" />
                        </Col>
                      </div>
                      <div style={{paddingTop:"3%"}}>
                        <Row>
                          <Col className="footcon" align="center" span={8}>
                            <li>
                              <Link to="/">
                                Home
                              </Link>
                            </li>
                          </Col>
                          <Col className="footcon" align="center" span={8}>
                            <li>
                              <Link to="/about">
                                About
                              </Link>
                            </li>
                          </Col>
                          <Col className="footcon" align="center" span={8}>
                            <li>
                              <Link to="/workPlay">
                              Work &amp; Play
                              </Link>
                            </li>
                          </Col>
                        </Row>
                      </div>
                      <div>
                      <Row className="footcontent">
                      <Col className="footcon" align="center">
                        <li>Contact</li>
                      </Col>
                      <Row className="footlogo">
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="facebook" onClick={this.handlefacebookClick}/>
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="linkedin" onClick={this.handleLinkedinClick} />
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="google" onClick={info} />
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="skype" onClick={info1}/>
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="instagram" onClick={this.handleinstagramClick} />
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="github" onClick={this.handlegithubClick}/>
                        </Col>
                      </Row>
                    </Row>
                      </div>
                  </div>
                </footer> 
            );
        }
        return (
            <footer>
              <div className="footer">
                <Row className="logopadding">
                    <Col className="logopading1" align="center" span={12}>
                    <img src={Ameya_logo_2} alt="Ameya_logo_2" />
                    <Row className="footcontent">
                      <Col className="footcon" align="center" span={8}>
                        <li>
                        <Link to="/">
                          Home
                          </Link>
                        </li>
                      </Col>
                      <Col className="footcon" align="center" span={8}>
                        <li>
                        <Link to="/about">
                          About
                          </Link>
                        </li>
                      </Col>
                      <Col className="footcon" align="center" span={8}>
                        <li>
                        <Link to="/workPlay">
                          Work &amp; Play
                          </Link>
                        </li>
                      </Col>
                    </Row>
                    <Row className="footcontent">
                      <Col className="footcon" align="center">
                        <li>Contact</li>
                      </Col>
                      <Row className="footlogo">
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="facebook" onClick={this.handlefacebookClick}/>
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="linkedin" onClick={this.handleLinkedinClick} />
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="google" onClick={info} />
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="skype" onClick={info1}/>
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="instagram" onClick={this.handleinstagramClick} />
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="buttonlogo" shape="circle" icon="github" onClick={this.handlegithubClick}/>
                        </Col>
                      </Row>
                    </Row>
                    </Col>
                    <Col align="center"  span={12}> <img src={logo} className="App-logo" alt="logo" />
                      <Col>
                        <text className="textpading">Powered by React</text>
                      </Col>
                    </Col>
                </Row>
                <Row>
                </Row>
                <Row className="copyrightcc" align="middle">
                ©2019 Ameya R Shetye. All rights reserved
                </Row>
              </div>
            </footer>
        );
    }  
};
Footer.propTypes = {
    width: PropTypes.object,
  };
const FooterWithHOC = GetViewPort(Footer)
export default FooterWithHOC;

