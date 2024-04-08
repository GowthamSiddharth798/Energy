import React from "react";
import './Energy.css';
import { Input,Button,Card } from "react-rainbow-components";
import { Link } from 'react-router-dom';
import { Progress, Space} from 'antd';
import vishnu from './vishnu.jpg';
import  { useState, useEffect } from 'react';
import arrow from './arrow.png';
import stline from './stline.png';
import home from './home.png';
const formatProgress = (percent) => '${percent}';
const getColorEffi = (percent) => {
  if (percent >= 75) {
    return 'green';
  } else if (percent >= 50) {
    return 'blue';
  } else {
    return 'red';
  }
};
 const Energy = () => {
  
    const [current,setCurrent] =useState();
    const [power,setPower] =useState();
    const [Power_factor,setPower_factor] =useState();
    const [energy,setEnergy] =useState();
    const [Energy_Meter,setEnergy_Meter] =useState();
    const [Active_power,setActive_power] =useState();
    const [Reactive_power,setReactive_Power] =useState();
    const [Voltage,setVoltage] =useState();
    
    useEffect(() => {
        setInterval(() => {
            fetch("https://energybackend.onrender.com/api/sensordata")
                .then(async result => {
                    const data = await result.json();
                    setCurrent(data.current);
                    setPower(data.power);
                    setPower_factor(data.Power_factor);
                    setEnergy_Meter(data.Energy_Meter);
                    setActive_power(data.Active_power);
                    setReactive_Power(data.Reactive_power);
                    setPower_factor(data.Power_factor);
                    setEnergy(data.energy);
                    setVoltage(data.Voltage);
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }, 2000);
    }, []);

 
    

  const limit = current;
  const limit2 = power;
  const limit3 = energy;

  const handleInputChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setCurrent(newValue);
  };

  const handleInput2Change = (event) => {
    const newValue = parseFloat(event.target.value);
    setPower(newValue);
  };

  const handleInput3Change = (event) => {
    const newValue = parseFloat(event.target.value);
    setPower(newValue);
  };

  const getButtonStyle = () => {
    return {
      backgroundColor:  current > 630 || power>270000 || energy>7000 ? 'red' : 'rgb(0,152,28)', 
      color: 'green',
      height:40,
      width:100,
      padding:10,
      borderradius:10,
    };
  };
// to handel the power value...........
  const handlePower = (power) => {
    return power >= 0 ? power : power * -1;
  };

  

  return (
    <>
            <>
   
   <div className="background">
      <div>
      <Card className="hwe" >
        <div className=" flex" >
                     <div > <Link to="/">                        
                           <img src={home} className="home-logo1" />
                       </Link>
                       </div>   
                      <h3 className="bvc"><Card className="bnm"><b className="ghj"> ENERGY MONITORING</b></Card></h3>
                     <h3  class="heading">VISHNU INSTITUTE OF TECHNOLOGY</h3>   
                     <div > <img src={vishnu} class="vit-logo "/></div>                                     
                    </div>
                    
                    </Card>
      </div>
      
     <div class="flex">
               <div>
                   <Card className="card flex">
                       <div class="main">
                           {/* pcc1 */}
                       <div class="flex">
                       <img src={stline} className="st-line-11"></img>
                       <img src={arrow} className="arrow-line-11" ></img>
                      
                       
                       <Link to="/Pcc1">
                           <Button className="button txt-in" type="link" id="actionButton"  style={getButtonStyle()}   > 
                             <h6 className="t123">PCC-1</h6> 
                           </Button>                           
                           
                       </Link>
                       <div className="flex inputs">
                           <div >
                               <b class="t2 inp" > Current(A):</b>
                               <Input  className="disabled-cursor1 input " value={current/2} onChange={ handleInputChange} />     
                              
                           </div>
                           
                           <div>
                               <b class="inp"> Power(Kw):</b>
                               <Input  className="disabled-cursor1 input " value={handlePower(power)} onChange={handleInput2Change} />
                           </div>
                           {/* <div >
                                <b> Energy Meter(W):</b>                  
                                <Input  className="disabled-cursor1 input " value={energy} onChange={handleInput3Change} />
                           </div> */}
                           <div >
                               <b class="inp">Energy(Kwh):</b>
                               <Input  className="disabled-cursor1 input " value={energy} onChange={handleInput3Change} />
                           </div>
                       </div>
                       </div>
                       {/* pcc2  */}
                       <div className="flex">
                        <img src={stline} className="st-line-12"></img>
                        <img src={arrow} className="arrow-line-12" ></img>
                        <Link to="/Pcc2">
                        <Button className="button2 txt-in" type="link" id="actionButton"  style={getButtonStyle() } ><h6 className="txt-in">PCC-2</h6> </Button> </Link>

                       <div className="flex inputs2">
                           <div >
                               <b class="inp"> Current(A):</b>
                               <Input  className="disabled-cursor1 input " value={current/2} onChange={handleInputChange} />                      
                           </div>
                           
                           <div>
                               <b class="inp"> Power(Kw):</b>
                               <Input  className="disabled-cursor1 input " value={handlePower(power)} onChange={handleInput2Change}/>
                           </div>
                           {/* <div >
                                <b> Energy Meter(W):</b>                  
                                <Input  className="disabled-cursor1 input " value={energy} onChange={handleInput3Change} />
                           </div> */}
                           <div >
                               <b class="inp">Energy(Kwh):</b>
                               <Input  className="disabled-cursor1 input " value={energy} onChange={handleInput3Change}/>
                           </div>
                       </div>
                       </div>
                       {/* pcc3 */}
                       <div className="flex">
                       <img src={stline} className="st-line-13"></img>
                       <img src={arrow} className="arrow-line-13" ></img>
                       <Link to="/Pcc3">
                       <Button className="button3 txt-in " type="link" id="actionButton"  style={getButtonStyle()} > <h6 className="txt-in">PCC-3</h6> </Button> </Link>
                       <div className="flex inputs3" >
                           <div >
                               <b class="inp"> Current(A):</b>
                               <Input  className="disabled-cursor1 input " value={current/2}/>                      
                           </div>
                           
                           <div>
                               <b class="inp"> Power(Kw):</b>
                               <Input  className="disabled-cursor1 input "value={handlePower(power)} onChange={handleInput2Change} />
                           </div>
                           {/* <div >
                                <b> Energy Meter(W):</b>                  
                                <Input  className="disabled-cursor1 input " value={energy} onChange={handleInput3Change} />
                           </div> */}
                           <div >
                               <b class="inp">Energy(Kwh):</b>
                               <Input  className="disabled-cursor1 input "  value={energy} onChange={handleInput3Change}/>
                           </div>
                       </div>
                       </div>
                       {/* pcc4 */}
                       <div className="flex">
                       <img src={stline} className="st-line-141"></img>
                       <img src={arrow} className="arrow-line-14" ></img>
                       <Link to="/Pcc4">
                       <Button className="button4" type="link" id="actionButton"  style={getButtonStyle()} ><h6 className="txt-in" >PCC-4</h6></Button></Link>
                       <div className="flex inputs4">
                           <div >
                               <b class="inp"> Current(A):</b>
                               <Input  className="disabled-cursor1 input "  value={current/2}onChange={handleInputChange}/>                      
                           </div>
                           
                           <div>
                               <b class="inp"> Power(Kw):</b>
                               <Input  className="disabled-cursor1 input " value={handlePower(power)} onChange={handleInput2Change} />
                           </div>
                           {/* <div >
                                <b> Energy Meter(W):</b>                  
                                <Input  className="disabled-cursor1 input " value={energy} onChange={handleInput3Change} />
                           </div> */}
                           <div >
                               <b class="inp">Energy(Kwh):</b>
                               <Input  className="disabled-cursor1 input " value={energy} onChange={handleInput3Change}/>
                           </div>
                       </div>
                       </div>
                       </div>
                   </Card> 
               </div>

               <div class="card2">
                 <Card className="card-txt " >
                       
                       <div className="flex-Card2">
                              <div>
                              <div>
                                <b className="inp2">Power(Kw) :  </b>
                                <Space Wrap>   

                                  <Progress  type="circle" strokeColor={getColorEffi(power)} percent={handlePower(power)} />
                                </Space>
                                  {/* <ProgressCircular value={power} className="back234" /> */}
                              </div>                                        <br/>

                               <div  >
                                   <b className="inp2"> Voltage(v):</b>
                                   <Input  className="disabled-cursor2 input "  value={Voltage} />                      
                               </div>                                        <br/>

                               <div >
                                   <b >Energy_Consumption(Kwh):</b>
                                   <Input  className="disabled-cursor2 input " value={Energy_Meter}/>
                               </div>                                         <br/>

                               <div>
                                   <b className="inp2"> Power Factor (COS φ):</b>
                                   <Input  className="disabled-cursor2 input " value={Power_factor*-1} />
                               </div>
                              </div>
                               
                               <div className="aa">

                                        <div>
                                            <b className="inp2">Apparent Power(s):</b>
                                            <Input  className="disabled-cursor2 input " value={Active_power} />
                                        </div>
                                        <br/>
                                        <div >
                                            <b className="inp2"> Reactive_Power(KVAR):</b>
                                            <Input  className="disabled-cursor2 input " value={Reactive_power} />                      
                                        </div>
                                        <br/>
                                        <div >
                                            <b >EnergyMeter(Kwh):</b>
                                            <Input  className="disabled-cursor2 input " value={energy} />
                                        </div> 
                                        <br/>
                                        <div >
                                            <b >Monthly Energy(Kwh):</b>
                                            <Input  className="disabled-cursor2 input " value={Energy_Meter} />
                                        </div>
                               </div>
                              
                       </div>
                                          
               </Card> 
               </div>

               

     </div>
   
   </div> 
   </>
    
    </>
  );
}

export default Energy;