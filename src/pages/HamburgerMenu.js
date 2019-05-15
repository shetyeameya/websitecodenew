
import { Menu, Icon, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './HamburgerMenu.css'
import DrawerToggleButton from '../component/DrawerToggle'
import Ameya_logo_2 from '../images/Ameya_logo_2.png'


const HamburgerMenu = props => (
<header>
    <nav>
        <div >
            <Row className="backgroundshow">
            <Col className="col1" span={12} align="left">
                <Link to="/">
                    <Button className="logomenu">
                        <img className="imagep" src={Ameya_logo_2} alt="Ameya_logo_2" />
                    </Button>
                </Link>
            </Col>
            <Col span={12} align="right">
            <DrawerToggleButton click={props.drawerClickHandler}/>
            </Col>
            </Row>
        </div>
    </nav>
</header>

);
export default HamburgerMenu;