import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Typography, Tag,Timeline,Modal, Collapse, Row, Col, Button} from 'antd';
import PropTypes from 'prop-types';
import aditilor from '../images/aditilor.jpg';
import poornimalor from '../images/poornimalor.jpg';
import vaishalilor from '../images/vaishalilor.jpg';
import GetViewPort from '../hoc-helpers/GetViewPort';
import './workplay.css';

const { Text } = Typography;
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
Project on Student proxy built a biometric attendance collector, where the teacher can spend more time teaching and 
solving doubts of students than to spend time in checking that the students are not marking present for other students. 
The machine would use the student fingerprint as a check method to see if the student is present in class. 
If the student was absent a message would be sent to the parent's number in the system about it. 
The duration of the message sent could be altered. 
`
const text1 = `
Design: In an agile environment worked on security lightning module, taking into consideration the physical 
and geographical constraints developed a system that could determine the damage that could be caused in terms of life, 
heritage and surroundings if struck by lightning. Collaborated successfully with cross-functional development teams to 
design and manufacture new products. Wrote the code for calculating the damage that would be caused due to the lightning. 
The code was written in objective C. 
Collaborated with UI and UX team to make application user friendly by designing the icons used in the application. 
Contributed to the design and development of mobile software libraries using Maxima and KDE frameworks. 
Created efficient and fast front-ends for our consumer site, partner portals, and monetization system and maximized 
the speed by 15%.`

const text1a = `Production and Marketing- Dealt with Product Management and coordinated with international teams to 
promote the products and carry out the orders in organized manner and helping the marketing team with the technical aspects. 
Did a few presentations on the application and explained its workability.`

const text2a = `PROJECT ~ CALO-METER: Using Version control Systems (git) for configuration Management, 
created an application that would allow the user to click a picture of a receipt or bill from a restaurant 
(PIZZA HUT, STARBUCKS, CHICK FIL A) to find the number of calories. It runs the database in the application 
and display the number of calories for the item/items purchased by just accessing the items mentioned in the bill. 
Used an OCR that is Tesseract, with the help of SQLite to check the database. Used Coredata and AVFoundation . 
Language used for the project was Objective C.` 

const text2b = `CHAT APP: Developed a simple user chat application where the user can connect with his friends using the 
same application through Bluetooth. Language used was objective C.` 

const text2c = `FOLLOWER: This application helps the user remember the people it is following and the people that are 
following the user. Created a database using Parse and Heroku. The user can follow or un-follow any user. 
It was similar to the Instagram following mechanism. Language used was Swift.` 

const text2d = `WEATHER APP: Using the tableView, datasource and delegate created an open weather API which would 
continuously be updating itself in the background to receive current updates. Used Alamofire to download data from API.` 

const text2e = `DICE GAME: Built a simple guessing game in which the user has to correctly predict the number on the dice. 
The user can bet 5 or 10$ also he has to choose if the number will be an odd or an even number. 
Alerts have been used to keep the game more interactive and fun. Used Coredata, CoreAudio. Language used Swift.` 

const text3 = `Worked in a team developing a wireless network discovery and audit application, which can be used to view 
the devices, connected to your network. It has everything you need to analyze connection problems and find any computer 
connected to your network that should not be there. The language used for the project was swift. It provides services such
as Ping, Traceroute and WoL (Wake on LAN), among many others. The prototype of mobile learning application storyboard 
that I worked on: The main module menu of the application. User may click on any preferable choices. The storyboard design 
used auto layout. The components module needed to make simple network connection before user can do basic configuration on
router and switch. When user clicks each component there will be explanation for each component. Designing the explaining 
code was my task. The tutorial module that provides step-by-step process on how to do basic configurations on router and 
switch. All basic configuration commands will be shown here so user can easily learn how to implement them.  
Jira was used for the testing purpose.  
`
const text4 = `
Working on a new stock Exchange application. It helps the user to check his spending’s on stocks and helps him to maintain 
his account. Swift is the major language used, a bridging header is created between objective C and swift for the yahoo 
finance API. Created an authentication page for an application as a prototype using Google Firebase. 
Features: Navigation Controlled, session management. 
The user can follow the stocks he likes and keep getting the updates through push notifications using DNS server.  
The data is stored using Parse open source DB. 
Yahoo Finance API is used for machine learning. Machine Learning: The code compares the user stocks and finds the 
relative stocks, which have the same value. 
Maintain and debugging for any errors. An example, the bug that showed the user number of stocks, which were not 
necessarily of the same value. Improved the user needs by finding the right match based on user likes and fluctuating 
market value of the followed stocks. 
Built the entire application from scratch. Using auto layouts and advanced features in swift 3.0.  
Worked on the carplay and iOS watch.  
`
const text5 = `I joined as Jr Developer for iOS mobile development. 
The entire code was in objective-C. At first it was a bit difficult as I had worked with 
swit and had a fair knowledge in objective-C. This helped me gain much more experience than 
I could ever gain. We then moved onto React. This was totally new to me. I have now in a year, 
learned and worked on React. While learning React I was also promoted to the position of 
Project manager. Here I dealt with 24 developers offshore. Working strange hours and 
coping with stress has prepared me for any situation that may arise. My role as a project 
manager dealt with handling Jira, getting the right content for developing, managing assets, 
handling issues and changes that were presented during the course all along while coding. 
I also learned that only hard work helps you achieve the targets. Now I am working as ReactJS 
and Native developer and back to coding, my passion. While working on react I have worked on various projects in Rumbleon, 
Mobile version V2, web version RumbleonClassifieds.com V2 and V3, Rumbleon.com V2 and V3. Currently working on an internal tool
for dealers V3. `


class WorkPlay extends Component{
  
    state = {
        loading: false,
        showVjpg: false,
        showAjpg: false,
        showPjpg: false,
      };
    
      showModalA = () => {
        this.setState({
            showVjpg: false,
            showAjpg: true,
            showPjpg: false,
        });
      };
      showModalV = () => {
        this.setState({
            showVjpg: true,
            showAjpg: false,
            showPjpg: false,
        });
      };
      showModalP = () => {
        this.setState({
            showVjpg: false,
            showAjpg: false,
            showPjpg: true,
        });
      };
    
      handleCancel = () => {
        this.setState({ showVjpg: false,
            showAjpg: false,
            showPjpg: false, });
      };
      

    render() {
        const { showVjpg, showAjpg, showPjpg, loading } = this.state;
        const { width } = this.props; 

        if (width < 786) { 

            return( 
                <div className="page"> 
                    <div>
              <Tag className="sum" color="#FE5500">Summary</Tag>
              </div>
              <div>
                  <h3 className="sumdef">
                  A Motivated Engineer with a masters degree and 3 years of relevant emphasis on mobile application development; Currently working on Reactjs and native development.
                  </h3>
              </div>
              <div>
                <div className="padbot">
                    <Tag className="sum" color="#FE5500">Timeline</Tag>
                </div>  
                <Timeline>
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Bachelor of Science in Electronics Engineering from University of Mumbai, June 2013 " key="1">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Internship at Axis Electrical PVT LTD, May 2013 - Jul 2014 " key="1">
                                <p>{text1}</p>
                                <p>{text1a}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Master of Science in Electrical Engineering from Southern Methodist University, Dallas, May 2016" key="1">
                                <p>{text2a}</p>
                                <p>{text2b}</p>
                                <p>{text2c}</p>
                                <p>{text2d}</p>
                                <p>{text2e}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Research Assistant at Southern Methodist University, Dallas, July 2016 –Jan 2017 " key="1">
                                <p>{text3}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Jr iOS developer at Webspun LLC, Jan 2017- Jan 2018 " key="1">
                                <p>{text4}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="blue">
                    <Collapse  onChange={callback}>
                            <Panel header="React Developer at RumbleOn, Jan 2018 " key="1">
                                <p>{text5}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                </Timeline>
              </div>
              <div style={{paddingTop: "3%"}}>
                <Tag className="sum" color="#FE5500">Technical Skills</Tag>
              </div>
              <div className="TecSkl">
                <Tag className="skills" color="#00BDFE">Servers:</Tag>
                <Tag className="skills" color="blue">Parse</Tag>
                <Tag className="skills" color="blue">Heroku</Tag>
                <Tag className="skills" color="blue">Mongodb</Tag>
                <Tag className="skills" color="blue">Amazon web services</Tag>
              </div>
              <div className="TecSkl">
                <Tag className="skills" color="#00BDFE">Scripting Languages:</Tag>
                <Tag className="skills" color="blue">C</Tag>
                <Tag className="skills" color="blue">C++</Tag>
                <Tag className="skills" color="blue">ObjectiveC</Tag>
                <Tag className="skills" color="blue">Swift</Tag>
                <Tag className="skills" color="blue">Python</Tag>
                <Tag className="skills" color="blue">React</Tag>
              </div>
              <div className="TecSkl">
                <Tag className="skills" color="#00BDFE">Projects On:</Tag>
              <Tag className="skills" color="blue">MySQLite</Tag>
              <Tag className="skills" color="blue">Software Development Cycle</Tag>
              <Tag className="skills" color="blue">JQuery</Tag>
              <Tag className="skills" color="blue">Restful service</Tag>
              <Tag className="skills" color="blue">JSON</Tag>
              <Tag className="skills" color="blue">Navigation System and Geolocation</Tag>
              <Tag className="skills" color="blue">JSON</Tag>
              <Tag className="skills" color="blue">Core Data</Tag>
              <Tag className="skills" color="blue">Core graphics</Tag>
              <Tag className="skills" color="blue">Facebook Integration</Tag>
              <Tag className="skills" color="blue">Sprite Kit</Tag>
              <Tag className="skills" color="blue">OOP</Tag>
              <Tag className="skills" color="blue">Push Notifications</Tag>
              <Tag className="skills" color="blue">Git(Version Control)</Tag>
              <Tag className="skills" color="blue">Unit Testing</Tag>
              <Tag className="skills" color="blue">Bluetooth(Bluetooth low energy)</Tag>
              <Tag className="skills" color="blue">IOT Camera</Tag>
              <Tag className="skills" color="blue">Firebase</Tag>
              <Tag className="skills" color="blue">cocopods</Tag>
              <Tag className="skills" color="blue">Protocol Oriented Programming</Tag>
              <Tag className="skills" color="blue">Back-end APIs</Tag>
              <Tag className="skills" color="blue">Core Animation</Tag>
              <Tag className="skills" color="blue">Auto-layout</Tag>
              <Tag className="skills" color="blue">UI/UX design</Tag>
              <Tag className="skills" color="blue">unity</Tag>
              <Tag className="skills" color="blue">HTML</Tag>
              <Tag className="skills" color="blue">node.js</Tag>
              <Tag className="skills" color="blue">Design patterns(MVC,MVVM)</Tag>
              </div>
              <div className="TecSkl">
              <Tag className="skills" color="#00BDFE">Operating Systems:</Tag>
              <Tag className="skills" color="blue">Mac</Tag>
              <Tag className="skills" color="blue">Windows</Tag>
              <Tag className="skills" color="blue">Linux</Tag>
              </div>
              <div className="TecSkl">
              <Tag className="skills" color="#00BDFE">Software:</Tag>
              <Tag className="skills" color="blue">Xcode</Tag>
              <Tag className="skills" color="blue">Android Studio</Tag>
              <Tag className="skills" color="blue">Xming</Tag>
              <Tag className="skills" color="blue">QuartusII</Tag>
              <Tag className="skills" color="blue">Putty</Tag>
              <Tag className="skills" color="blue">Cisco Packet Tracer</Tag>
              <Tag className="skills" color="blue">Matlab</Tag>
              <Tag className="skills" color="blue">Sketch 3</Tag>
              <Tag className="skills" color="blue">Visual Studio</Tag>
              </div>
              <div className="TecSkl">
              <Tag className="skills" color="#00BDFE">Testing:</Tag>
              <Tag className="skills" color="blue">Jira</Tag>
              <Tag className="skills" color="blue">Appium</Tag>
              <Tag className="skills" color="blue">Selenium</Tag>
              </div>
              <div className="tchr">
                <Text  strong>See what my teachers say about me.</Text>
              </div>
              <div>
                  <Row className="butpad">
                      <Button type="primary" onClick={this.showModalP}>
                            Poornima Mam LOR
                        </Button>
                        <Modal
                            visible={showPjpg}
                            title=" Poornima Mam LOR"
                            onCancel={this.handleCancel}
                            footer={null}
                            width="100%"
                            
                        >
                            <img className="lorimg" src={poornimalor} alt="current-user-thumbnail"/>
                        </Modal>
                    </Row>
                    <Row className="butpad">
                        <Button type="primary" onClick={this.showModalV}>
                            Vaishali Mam LOR
                        </Button>
                        <Modal
                            visible={showVjpg}
                            title="Vaishali Mam LOR"
                            onCancel={this.handleCancel}
                            footer={null}
                            width="80%"
                        >
                            <img className="lorimg" src={vaishalilor} alt="current-user-thumbnail"/>
                        </Modal>
                      </Row>
                      <Row>
                        <Button type="primary" onClick={this.showModalA}>
                            Aditi Mam LOR
                        </Button>
                        <Modal
                            visible={showAjpg}
                            title="Aditi Mam LOR"
                            onCancel={this.handleCancel}
                            footer={null}
                            width="80%"
                        >
                            <img className="lorimg" src={aditilor} alt="current-user-thumbnail"/>
                        </Modal>
                  </Row>
                  {/* <Row>
                        <Button type="primary" onClick={this.showModalA}>
                            Principal Joquim
                        </Button>
                        <Modal
                            visible={showAjpg}
                            title="Aditi Mam LOR"
                            onCancel={this.handleCancel}
                            footer={null}
                            width="80%"
                        >
                            <img className="lorimg" src={aditilor} alt="current-user-thumbnail"/>
                        </Modal>
                  </Row> */}
              </div>
              <div className="tchr">
                <Text  strong>Intrested in Pokemons?</Text>
              </div>
              <div className="pokem">
                <Row>
                    <Col  align="center" >
                    <Button type="primary">
                        <Link to="/pokemonlist">
                            Check the list of pokemons I caught
                        </Link>
                    </Button>
                    </Col>
                </Row>
              </div>
                </div> 

            ); 

        } 

        return(
            <div className="page">
              <div>
              <Tag className="sum" color="#FE5500">Summary</Tag>
              </div>
              <div>
                  <h3 className="sumdef">
                  A Motivated Engineer with a masters degree and 3 years of relevant emphasis on mobile application development; Currently working on Reactjs and native development.
                  </h3>
              </div>
              <div>
                <div>
                    <Tag className="sum" color="#FE5500">Timeline</Tag>
                </div>  
                <Timeline mode="alternate">
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Bachelor of Science in Electronics Engineering from University of Mumbai, June 2013 " key="1">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Internship at Axis Electrical PVT LTD, May 2013 - Jul 2014 " key="1">
                                <p className="para" >{text1}</p>
                                <p className="para">{text1a}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Master of Science in Electrical Engineering from Southern Methodist University, Dallas, May 2016" key="1">
                                <p>{text2a}</p>
                                <p>{text2b}</p>
                                <p>{text2c}</p>
                                <p>{text2d}</p>
                                <p>{text2e}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Research Assistant at Southern Methodist University, Dallas, July 2016 –Jan 2017 " key="1">
                                <p className="para">{text3}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <Collapse  onChange={callback}>
                            <Panel header="Jr iOS developer at Webspun LLC, Jan 2017- Jan 2018 " key="1">
                                <p>{text4}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                    <Timeline.Item color="blue">
                    <Collapse  onChange={callback}>
                            <Panel header="React Developer at RumbleOn, Jan 2018 " key="1">
                                <p className="para">{text5}</p>
                            </Panel>
                        </Collapse>
                    </Timeline.Item>
                </Timeline>
              </div>
              <div style={{paddingTop: "3%"}}>
                <Tag className="sum" color="#FE5500">Technical Skills</Tag>
              </div>
              <div className="TecSkl">
                <Tag className="skills" color="#00BDFE">Servers:</Tag>
                <Tag className="skills" color="blue">Parse</Tag>
                <Tag className="skills" color="blue">Heroku</Tag>
                <Tag className="skills" color="blue">Mongodb</Tag>
                <Tag className="skills" color="blue">Amazon web services</Tag>
              </div>
              <div className="TecSkl">
                <Tag className="skills" color="#00BDFE">Scripting Languages:</Tag>
                <Tag className="skills" color="blue">C</Tag>
                <Tag className="skills" color="blue">C++</Tag>
                <Tag className="skills" color="blue">ObjectiveC</Tag>
                <Tag className="skills" color="blue">Swift</Tag>
                <Tag className="skills" color="blue">Python</Tag>
                <Tag className="skills" color="blue">React</Tag>
              </div>
              <div className="TecSkl">
                <Tag className="skills" color="#00BDFE">Projects On:</Tag>
              <Tag className="skills" color="blue">MySQLite</Tag>
              <Tag className="skills" color="blue">Software Development Cycle</Tag>
              <Tag className="skills" color="blue">JQuery</Tag>
              <Tag className="skills" color="blue">Restful service</Tag>
              <Tag className="skills" color="blue">JSON</Tag>
              <Tag className="skills" color="blue">Navigation System and Geolocation</Tag>
              <Tag className="skills" color="blue">JSON</Tag>
              <Tag className="skills" color="blue">Core Data</Tag>
              <Tag className="skills" color="blue">Core graphics</Tag>
              <Tag className="skills" color="blue">Facebook Integration</Tag>
              <Tag className="skills" color="blue">Sprite Kit</Tag>
              <Tag className="skills" color="blue">OOP</Tag>
              <Tag className="skills" color="blue">Push Notifications</Tag>
              <Tag className="skills" color="blue">Git(Version Control)</Tag>
              <Tag className="skills" color="blue">Unit Testing</Tag>
              <Tag className="skills" color="blue">Bluetooth(Bluetooth low energy)</Tag>
              <Tag className="skills" color="blue">IOT Camera</Tag>
              <Tag className="skills" color="blue">Firebase</Tag>
              <Tag className="skills" color="blue">cocopods</Tag>
              <Tag className="skills" color="blue">Protocol Oriented Programming</Tag>
              <Tag className="skills" color="blue">Back-end APIs</Tag>
              <Tag className="skills" color="blue">Core Animation</Tag>
              <Tag className="skills" color="blue">Auto-layout</Tag>
              <Tag className="skills" color="blue">UI/UX design</Tag>
              <Tag className="skills" color="blue">unity</Tag>
              <Tag className="skills" color="blue">HTML</Tag>
              <Tag className="skills" color="blue">node.js</Tag>
              <Tag className="skills" color="blue">Design patterns(MVC,MVVM)</Tag>
              </div>
              <div className="TecSkl">
              <Tag className="skills" color="#00BDFE">Operating Systems:</Tag>
              <Tag className="skills" color="blue">Mac</Tag>
              <Tag className="skills" color="blue">Windows</Tag>
              <Tag className="skills" color="blue">Linux</Tag>
              </div>
              <div className="TecSkl">
              <Tag className="skills" color="#00BDFE">Software:</Tag>
              <Tag className="skills" color="blue">Xcode</Tag>
              <Tag className="skills" color="blue">Android Studio</Tag>
              <Tag className="skills" color="blue">Xming</Tag>
              <Tag className="skills" color="blue">QuartusII</Tag>
              <Tag className="skills" color="blue">Putty</Tag>
              <Tag className="skills" color="blue">Cisco Packet Tracer</Tag>
              <Tag className="skills" color="blue">Matlab</Tag>
              <Tag className="skills" color="blue">Sketch 3</Tag>
              <Tag className="skills" color="blue">Visual Studio</Tag>
              </div>
              <div className="TecSkl">
              <Tag className="skills" color="#00BDFE">Testing:</Tag>
              <Tag className="skills" color="blue">Jira</Tag>
              <Tag className="skills" color="blue">Appium</Tag>
              <Tag className="skills" color="blue">Selenium</Tag>
              </div>
              <div className="tchr">
                <Text  strong>See what my teachers say about me.</Text>
              </div>
              <div>
                  <Row>
                      <Col className="pokem" align="left" span={8}>
                        <Button type="primary" onClick={this.showModalP}>
                            Poornima Mam LOR
                        </Button>
                        <Modal
                            visible={showPjpg}
                            title="Poornima Mam LOR"
                            onCancel={this.handleCancel}
                            footer={null}
                            width="80%"
                        >
                            <img className="lorimg" src={poornimalor} alt="current-user-thumbnail"/>
                        </Modal>
                      </Col>
                      <Col className="pokem" align="left" span={8}>
                        <Button type="primary" onClick={this.showModalV}>
                            Vaishali Mam LOR
                        </Button>
                        <Modal
                            visible={showVjpg}
                            title="Vaishali Mam LOR"
                            onCancel={this.handleCancel}
                            footer={null}
                            width="80%"
                        >
                            <img className="lorimg" src={vaishalilor} alt="current-user-thumbnail"/>
                        </Modal>
                      </Col>
                      <Col className="pokem" align="left" span={8}>
                        <Button type="primary" onClick={this.showModalA}>
                            Aditi Mam LOR
                        </Button>
                        <Modal
                            visible={showAjpg}
                            title="Aditi Mam LOR"
                            onCancel={this.handleCancel}
                            footer={null}
                            width="80%"
                        >
                            <img className="lorimg" src={aditilor} alt="current-user-thumbnail"/>
                        </Modal>
                        </Col>
                        {/* <Col className="pokem" align="center" span={6}>
                        <Button type="primary" onClick={this.showModalA}>
                            Principal Joquim
                        </Button>
                        <Modal
                            visible={showAjpg}
                            title="Title"
                            onCancel={this.handleCancel}
                            footer={null}
                            width="80%"
                        >
                            <img className="lorimg" src={aditilor} alt="current-user-thumbnail"/>
                        </Modal>
                      
                      </Col> */}
                  </Row>
              </div>
              <div className="tchr">
                <Text  strong>Intrested in Pokemons?</Text>
              </div>
              <div className="pokem">
                <Row>
                    <Col  align="left" >
                    <Button type="primary">
                        <Link to="/pokemonlist">
                            Check the list of pokemons I caught
                        </Link>
                    </Button>
                    </Col>
                </Row>
              </div>
            </div>
        );
    }
};
WorkPlay.propTypes = {
    width: PropTypes.object,
  };
const WorkPlayWithHOC = GetViewPort(WorkPlay)
export default WorkPlayWithHOC;
