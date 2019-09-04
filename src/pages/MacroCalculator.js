import React, { Component } from 'react';
import {Col, Row,Button,Form,Switch,Radio, Modal,Input,InputNumber, Rate, Icon } from 'antd'; 
import './MacroCalculator.css'
import PropTypes from 'prop-types';
import GetViewPort from '../hoc-helpers/GetViewPort';
 

const FormItem = Form.Item;


const desc = ['SEDENTARY-limited exercise',
              'LIGHTLY ACTIVE-light exercise less than three days per week',
              'MODERATELY ACTIVE-moderate exercise most days of the week',
              'VERY ACTIVE-hard exercise every day', 
              'EXTRA ACTIVE-strenuous exercise two or more times per day' ]


class MacroCalculator extends Component{ 
state={
    years : '',
    ft : '',
    inch : '',
    weight: '',
    goalvalue: '',
    ratevalue: 3,
}
    
      componentDidMount() {
          const {
    form,
  } = this.props;

        console.log(this.props);
    }
    checkfornumber =(value) => {
        const re = /[0-9]/;
        const isValid= re.test(value)
        console.log(isValid)
        if (isValid === true){
            return true
        }
        return false
    }
    

    handleChangeage = (value) => {
        const isValid=this.checkfornumber(value)
        console.log(isValid)
      if (isValid === true){
        this.setState({
            years:value
        })
      } 
        
    }
    handleChangeweight = (value) => {
        const isValid=this.checkfornumber(value)
        console.log(isValid)
      if (isValid === true){
        this.setState({
            weight:value
        })
      } 
        
    }
    handleChangeheightft = (value) => {
        const isValid=this.checkfornumber(value)
        console.log(isValid)
      if (isValid === true){
        this.setState({
            ft:value
        })
      } 
        
    }
    handleChangeheightinch = (value) => {
        const isValid=this.checkfornumber(value)
        console.log(isValid)
      if (isValid === true){
        this.setState({
            inch:value
        })
      } 
        
    }
    
    handelratevalue = (value) =>{
        console.log(value)
        this.setState({
            ratevalue: value
           
        })
        
    }
    goalselection= (value) =>{
        console.log(value)
        this.setState({
            goalvalue: value
           
        })
        
    }

    render() { 
     const { width } = this.props; 
     const {ratevalue} = this.state;
    if (width < 786) { 
    
    return( 
    
    <div className="page"> 
    
    </div> 
    
    ); 
    
    } 
    
    
    return( 
    
    <div className="page"> 
        <div className="form">
            <Col span={12}>
                <Form className="form1">
                    <FormItem label="MacroCalculator" >
                        Gender: <Switch checkedChildren="Male" unCheckedChildren="Female" />
                    </FormItem>  
                   <FormItem>
                        Age:<InputNumber
                            min={1}
                            max={100}
                            onChange={this.handleChangeage}
                            />
                    </FormItem>
                    
                    <FormItem>
                        Weight:<InputNumber
                            min={1}
                            max={100}
                            onChange={this.handleChangeweight}
                            />
                    </FormItem>
                    
                    <FormItem>
                        Height:<InputNumber
                            min={1}
                            max={100}
                            onChange={this.handleChangeheightft}
                            />Ft
                            <InputNumber
                            min={1}
                            max={100}
                            onChange={this.handleChangeheightinch}
                            />inch
                    </FormItem>
                    <FormItem >
                        <Col>
                            Select Exercise Level: <span>
                            <Rate  tooltips={desc} onChange={this.handelratevalue} value={this.state.ratevalue} character={<Icon type="skin" />} style={{ fontSize: 30 }}/>
                            </span> 
                        </Col>
                     </FormItem>
                     <FormItem >
                        <Col className="goal">
                           Your Primary Goal: <br />
                            <Radio.Group onChange={this.goalselection} defaultValue="a">
                                <Radio.Button value="a">LOOSE WEIGHT</Radio.Button>
                                <Radio.Button value="b">GAIN</Radio.Button>
                                <Radio.Button value="c">MAINTAIN</Radio.Button>
                            </Radio.Group>
                         </Col>
                         <br />
                         <Col>
                            <Button className="button1" shape="round" size="large">
                                Calculate
                            </Button>
                         </Col>
                     </FormItem>
                </Form>
            </Col>
         </div>
    </div> 

    
    ); 
    
    } 
    
    }; 
    
    MacroCalculator.propTypes = { 
    
    width: PropTypes.object, 
    
    }; 
    
    const MacroCalculatorWithHOC = GetViewPort(MacroCalculator) 
    
    export default MacroCalculatorWithHOC; 

    {/* </Col>
            <Col>
                Weight:
                <Input addonAfter="lbs" allowClear placeholder="Enter your weight in lbs here" />
            </Col>
            <Col>
                Height:
                <Col>
                    <Col span={12}><Input addonAfter="Ft" allowClear placeholder="Enter your Height in ft here" /></Col>
                    <Col span={12}><Input addonAfter="in" allowClear placeholder="Enter your Height in inches here" /></Col>
                </Col>
            </Col>
         </Col>
         <Col span={12}>Image</Col> */}