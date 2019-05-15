import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Carousel, Col, Row, } from 'antd'; 
import './About.css'
import PropTypes from 'prop-types';
import keeping from '../images/keeping.JPG'
import graduation from '../images/graduation.JPG'
import romeo from '../images/romeo.JPG'
import romeonme1 from '../images/romeonme1.JPG'
import romeonme2 from '../images/romeonme2.JPG'
import trophy from '../images/trophy.JPG'
import video from '../images/video.mp4'
import ReactPlayer from 'react-player'
import GetViewPort from '../hoc-helpers/GetViewPort'



class About extends Component{
    render() {

        const { width } = this.props;
        if (width < 786) {
          return(
              <div className="page">
                <div>
                    <p className="header">
                    “Life is like riding a bicycle.  
                    <br></br>
                    To keep balance you need to move on”. 
                    </p>
                </div>
                <div className="paratext">
                    <Row>
                        <Col>
                            <p>
                                Albert Einstein’s famous words ring true every time I feel a bit deflated or when I do not live up to my own expectations; I have learnt that moving on and addressing the issues at stake, is the superlative solution to virtually all problems This has made me believe in setting short-term goals for myself and then committing myself totally to achieving them. Truly, it has been rightly said that well-planned and well thought of actions however small, give a concrete shape to the vision in which they were contemplated. Excellence endures and sustains. It goes beyond motivation into the realms of inspiration and can be as strong a uniting force as concrete vision. It does not happen in a vacuum but it needs a collective obsession, despite hurdles and failures to continue to move ahead, to remain determined; it is an unending journey, To follow my passion I steered towards subjects that in some way were related to the amazing world of Electronics and Computers. That which started in high school at St Marys took me to the Ruia Junior Engineering College and then I enrolled for an undergraduate education in Electronics from KC College of Engineering. Which led me to Southern Methodist University for my masters.My journey of learning had just begun!
                                After graduating and receiving my degree I joined Webspun LLC. and learnt a lot. I build an iOS application from scratch which helped investors get all the necessary information on stocks publicly listed. After a year I joined RumbleOn and it has been an exhilarating experience. I joined as Jr Developer for iOS mobile development. The entire code was in objective-C. At first it was a bit difficult as I had worked with swit and had a fair knowledge in objective-C. This helped me gain much more experience than I could ever gain. We then moved onto React. This was totally new to me. I have now in a year, learned and worked on React. While learning React I was also promoted to the position of Project manager. Here I dealt with 24 developers offshore. Working strange hours and coping with stress has prepared me for any situation that may arise. My role as a project manager dealt with handling Jira, getting the right content for developing, managing assets, handling issues and changes that were presented during the course all along while coding. I also learned that only hard work helps you achieve the targets. Now I am working as ReactJS and Native developer and back to coding, my passion.
                            </p>
                        </Col>
                    </Row> 
                    <Row>
                        <Col>
                            <img className="curimg" alt="romeonme2" src={romeonme2} />
                        </Col>
                    </Row> 
                    <Row>
                        <Col >
                            <img className="curimg" alt="romeo" src={romeo} />
                        </Col>
                    </Row>  
                    <Row>  
                        <Col>
                            <img className="curimg" alt="romeonme1" src={romeonme1} />
                        </Col>
                    </Row>
                   
                    <Row className="sourcepad">
                        <Col align="center">
                            <p>Source of Happiness!!!</p>
                        </Col>
                    </Row>  
                    <Row>
                        <Col>
                            <p>
                                Today, as I look back, I feel I have come a long way from being an inquisitive little child.What is more, today, apart from academic excellence the requirement for an all round personality of a professional is a must and of course an added advantage. Sure footed and focused as a student I have been captain of senior school, winning the All Round Student award multiple times. Passionate about sports I have been an avid player of football and cricket winning several awards and certificates. I have also had the fine privilege of being the General Coordinator of the technical and cultural festival of my college. As the Cultural General Coordinator, I worked diligently to prove my mettle and earn accolades for myself. All these activities have indicated my diverse choices for work. I look upon all these experiences as opportunities where I could gauge my own plusses and areas where I needed to enhance my output. This apart, participation in many co-curricular activities has added a positive note to my character. 
                            </p>
                        </Col>  
                    </Row>
                    <Row>
                        <Col>
                        <img className="curimg" alt="graduation" src={graduation} />
                        </Col>
                    </Row> 
                    <Row>
                        <Col >
                        <img className="curimg" alt="keeping" src={keeping} />
                        </Col>
                    </Row>  
                    <Row>  
                        <Col>
                        <img className="curimg" alt="trophy" src={trophy} />
                        </Col>
                    </Row>
                    <Row className="sourcepad">
                            <Col align="center"><ReactPlayer width="100%" height="100%" url={video} playing loop="true" volume="1"/></Col> 
                    </Row>
                    
                    <Row className="sourcepad">
                        <Col>
                            <p className="paratext">
                                For the future I aspire to carve a strong and secure position for myself in this highly challenging, competitive yet rewarding field. I have striven to focus on my goals while meandering through the maze of my young life.
                                   
                            </p>
                        </Col>
                    </Row>
                 </div>
              </div>
          );
      }
        
        return(
            <div className="page">
                <div>
                    <p className="header">
                    “Life is like riding a bicycle.  
                    <br></br>
                    To keep balance you need to move on”. 
                    </p>
                </div>
                <div className="paratext">
                    <Row>
                        <Col>
                            <p>
                                Albert Einstein’s famous words ring true every time I feel a bit deflated or when I do not live up to my own expectations; I have learnt that moving on and addressing the issues at stake, is the superlative solution to virtually all problems This has made me believe in setting short-term goals for myself and then committing myself totally to achieving them. Truly, it has been rightly said that well-planned and well thought of actions however small, give a concrete shape to the vision in which they were contemplated. Excellence endures and sustains. It goes beyond motivation into the realms of inspiration and can be as strong a uniting force as concrete vision. It does not happen in a vacuum but it needs a collective obsession, despite hurdles and failures to continue to move ahead, to remain determined; it is an unending journey, To follow my passion I steered towards subjects that in some way were related to the amazing world of Electronics and Computers. That which started in high school at St Marys took me to the Ruia Junior Engineering College and then I enrolled for an undergraduate education in Electronics from KC College of Engineering. Which led me to Southern Methodist University for my masters.My journey of learning had just begun!
                                After graduating and receiving my degree I joined Webspun LLC. and learnt a lot. I build an iOS application from scratch which helped investors get all the necessary information on stocks publicly listed. After a year I joined RumbleOn and it has been an exhilarating experience. I joined as Jr Developer for iOS mobile development. The entire code was in objective-C. At first it was a bit difficult as I had worked with swit and had a fair knowledge in objective-C. This helped me gain much more experience than I could ever gain. We then moved onto React. This was totally new to me. I have now in a year, learned and worked on React. While learning React I was also promoted to the position of Project manager. Here I dealt with 24 developers offshore. Working strange hours and coping with stress has prepared me for any situation that may arise. My role as a project manager dealt with handling Jira, getting the right content for developing, managing assets, handling issues and changes that were presented during the course all along while coding. I also learned that only hard work helps you achieve the targets. Now I am working as ReactJS and Native developer and back to coding, my passion.
                            </p>
                        </Col>
                    </Row> 
                    <Row>
                        <Col align="left" span={8}>
                            <img className="curimg" alt="romeonme2" src={romeonme2} />
                        </Col>
                        <Col align="center" span={8}>
                            <img className="curimg" alt="romeo" src={romeo} />
                        </Col>
                        <Col align="right" span={8}>
                            <img className="curimg" alt="romeonme1" src={romeonme1} />
                        </Col>
                    </Row> 
                    <Row className="sourcepad">
                        <Col align="center">
                            <p>Source of Happiness!!!</p>
                        </Col>
                    </Row>  
                    <Row>
                        <Col>
                            <p>
                                Today, as I look back, I feel I have come a long way from being an inquisitive little child.What is more, today, apart from academic excellence the requirement for an all round personality of a professional is a must and of course an added advantage. Sure footed and focused as a student I have been captain of senior school, winning the All Round Student award multiple times. Passionate about sports I have been an avid player of football and cricket winning several awards and certificates. I have also had the fine privilege of being the General Coordinator of the technical and cultural festival of my college. As the Cultural General Coordinator, I worked diligently to prove my mettle and earn accolades for myself. All these activities have indicated my diverse choices for work. I look upon all these experiences as opportunities where I could gauge my own plusses and areas where I needed to enhance my output. This apart, participation in many co-curricular activities has added a positive note to my character. 
                            </p>
                        </Col>  
                    </Row>
                    <Row gutter={8}>
                        <Col align="center" span={8}> <img className="curimg" alt="graduation" src={graduation} /></Col>
                        <Col align="center" span={8}> <img className="curimg" alt="keeping" src={keeping} /> </Col>  
                        <Col align="center" span={8}> <img className="curimg" alt="trophy" src={trophy} /></Col>  
                    </Row>
                    <Row className="sourcepad">
                            <Col align="center"><ReactPlayer url={video} playing loop="true" volume="1"/></Col> 
                    </Row>
                    <Row className="sourcepad">
                        <Col>
                            <p className="paratext">
                                For the future I aspire to carve a strong and secure position for myself in this highly challenging, competitive yet rewarding field. I have striven to focus on my goals while meandering through the maze of my young life.   
                            </p>
                        </Col>
                    </Row>
                 </div>
            </div>
        );
    }
};
About.propTypes = {
    width: PropTypes.object,
  };
const HeaderWithHOC = GetViewPort(About)
export default HeaderWithHOC;
{/* <video className="videoimg" ref="vidRef" src={video}  alt="video" /> */}