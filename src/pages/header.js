import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import {Menu, Dropdown, Button, Icon, Modal, Col} from 'antd'; 
import './header.css'
import PropTypes from 'prop-types';
import HamburgerMenu from '../pages/HamburgerMenu'
import Ameya_logo_2 from '../images/Ameya_logo_2.png'
import GetViewPort from '../hoc-helpers/GetViewPort'
import SideDrwaer from '../component/SideDrawer'
import Backdrop from '../component/Backdrop' 







class Header extends Component{

  state = {
    visible: false,
    sideDrawerOpen: false
  };
  drawerToggleClick = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    }
    );
  };
  backdropClickHandler =() => {
    this.setState({sideDrawerOpen: false});
  };

  
  handleMenuClick = (e) => {
    if (e.key === '1') {
      this.setState({ visible: false });
      this.backdropClickHandler()
      window.open("https://www.facebook.com/ameya.shetye","self","blank")
      console.log(this.state)
    }
    if (e.key === '2') {
      this.setState({ visible: false });
      this.backdropClickHandler()
      window.open("https://www.linkedin.com/in/shetyeameyasmu","self","blank")
      console.log(this.state)
    }
    if (e.key === '5') {
      this.setState({ visible: false });
      this.backdropClickHandler()
      window.open("https://www.instagram.com/shetyeameya/","self","blank")
      console.log(this.state)
    }
    if (e.key === '6') {
      this.setState({ visible: false });
      this.backdropClickHandler()
      window.open("https://github.com/shetyeameya","self","blank")
      console.log(this.state)
    }
  }

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }
  // modal for emailAddress.
  info = () => {
    this.backdropClickHandler()
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
  // modal for skypeaddress.
 info1 = () => {
  this.backdropClickHandler()
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
    render() {
      let backdrop;
       
      if (this.state.sideDrawerOpen){
        backdrop= <Backdrop click={this.backdropClickHandler} />;
      }
      const menu = (
        <Menu className="menu">
          <Menu.Item key="1" onClick={this.handleMenuClick}><Icon type="facebook" />Facebook</Menu.Item>
          <Menu.Item key="2" onClick={this.handleMenuClick}><Icon type="linkedin" />Linkedin</Menu.Item>
          <Menu.Item key="3" onClick={this.info}><Icon type="google" />Gmail</Menu.Item>
          <Menu.Item key="4" onClick={this.info1}><Icon type="skype" />Skype</Menu.Item>
          <Menu.Item key="5" onClick={this.handleMenuClick}><Icon type="instagram" />Instagram</Menu.Item>
          <Menu.Item key="6" onClick={this.handleMenuClick}><Icon type="github" />Github</Menu.Item>
        </Menu>
      );

        const { width } = this.props;
        if (width < 786) {
          return(
              <div>
                 <HamburgerMenu drawerClickHandler={this.drawerToggleClick} />
                 <SideDrwaer socialClick={this.handleMenuClick} show={this.state.sideDrawerOpen} close={this.backdropClickHandler} modal={this.info} modal1={this.info1}/>
                 {backdrop}
                 
              </div>
          );
      }


        return(
    
        <div className="headerpad">
        <Col span={12} align="left">
        <Link to="/"><Button className="buttonpad">
            <img className="imgpad" src={Ameya_logo_2} alt="Ameya_logo_2" />
            </Button>
            </Link>
        </Col>
        <Col span={12} align="Right">
        <Link to="/"> <Button className="buttonpad1">Home</Button></Link>
        <Link to="/about"> <Button className="buttonpad1">About</Button></Link>
        <Link to="/workPlay"> <Button className="buttonpad1">Work &amp; Play</Button></Link> 
                <Dropdown overlay={menu} onVisibleChange={this.handleVisibleChange}>
                <Button className="buttonpad1">
                 Contact <Icon type="down" />
                </Button>
            </Dropdown>
        </Col>
        </div>
        );
    }
};
Header.propTypes = {
    width: PropTypes.object,
  };
const HeaderWithHOC = GetViewPort(Header)
export default HeaderWithHOC;
{/* <a href="https://ant.design" target="_blank" rel="noopener noreferrer"></a> */}