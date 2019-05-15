import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
import {Menu, Dropdown, Button, Icon, Modal, Col, Row} from 'antd';



 function handlefacebookClick() {
    
    window.open("https://www.facebook.com/ameya.shetye","self","blank")
    
}
function handleLinkedinClick() {
  
  window.open("https://www.linkedin.com/in/shetyeameyasmu","self","blank")
  
}
function handleinstagramClick(){
  
window.open("https://www.instagram.com/shetyeameya/","self","blank")

}
function handlegithubClick(){
  
window.open("https://github.com/shetyeameya","self","blank")

}
const SideDrawer = props =>{

    let drawerClasses = 'sidedrawer';
    if (props.show){
            drawerClasses= 'sidedrawer open'
    }
    return(
        <div className={drawerClasses}>
        <div className="divpadding">
            <Row>
                <Col  className="buttonview"   align="center">
                    <Link to="/"> <Button onClick={props.close} className="buttonclass">Home</Button></Link>
                </Col>
            </Row>
            <Row>
                <Col className="buttonview" align="center">
                   <Link to="/about"> <Button onClick={props.close} className="buttonclass">About</Button></Link>
                </Col>
            </Row>
            <Row>
                <Col className="buttonview" align="center">
                    <Link to="/workPlay"> <Button onClick={props.close} className="buttonclass">Work &amp; Play</Button></Link>
                </Col>
            </Row>
        </div>
        <div className="socialbadges">
            <Row>
                        <Col align="center" span={4}>
                          <Button className="" shape="circle" icon="facebook" onClick={handlefacebookClick}/>
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="" shape="circle" icon="linkedin" onClick={handleLinkedinClick} />
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="" shape="circle" icon="google" onClick={props.modal} />
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="" shape="circle" icon="skype" onClick={props.modal1}/>
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="" shape="circle" icon="instagram" onClick={handleinstagramClick} />
                        </Col>
                        <Col align="center" span={4}>
                          <Button className="" shape="circle" icon="github" onClick={handlegithubClick}/>
                        </Col>
                      </Row>
        </div>
    </div>
    );
}

export default SideDrawer;
