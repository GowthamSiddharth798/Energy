import React from "react";
import './Energy.css';
import { Input,Button,Card } from "react-rainbow-components";
import { Link } from 'react-router-dom';
import { Progress, Space} from 'antd';
// import Nav2 from "./Nav2";
// import Menu from "./Menu";
import  { useState, useEffect } from 'react';
// import { Variant } from "react-bootstrap";

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
      backgroundColor:  current > 630 || power>270000 || energy>5000 ? 'red' : 'rgb(0,152,28)', 
      color: 'green',
      height:40,
      width:100,
      padding:10,
      borderradius:10,
    };
  };



  

  return (
    <>
            <>
   
   <div className="background">
      <div>
      <Card className="cc"><div className="in-line head-main">
                    <div className ="margin-hamber"></div>
                        <img src="https://i.ibb.co/YZw8yxS/Iot-logo.jpg" class="main-logo" />
                        <h1 className="main-heading">GREEN FUSION IoT SOLUTIONS</h1> 
                    <div className="title"> <h1>ENERGY MONITORING</h1></div>
                    <div >
                        <img src="https://i.ibb.co/Cm04CR4/vishnu-logo.jpg" class="vit-logo "/>
                            </div>
                            <h1  class="heading">VISHNU INSTITUTE OF TECHNOLOGY</h1>   
                                                              
                    </div>
                    </Card>
      </div>
      {/* <center className="flex"><h3 className="txt-main glow-text">
      <img src="https://i.ibb.co/qkdZwY2/vit2.png" className="vi img-a"/> 
       VISHNU ENERGY MONITORING SYSTEM</h3
       ></center> */}
     <div class="flex">
               <div>
                   <Card className="card flex">
                       <div class="main">
                           {/* pcc1 */}
                       <div class="flex">
                       <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-11"></img>
                       <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-11" ></img>
                      
                       
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
                               <b class="inp"> Power(W):</b>
                               <Input  className="disabled-cursor1 input " value={power} onChange={handleInput2Change} />
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
                        <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-12"></img>
                        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-12" ></img>
                        <Link to="/Pcc2">
                        <Button className="button2 txt-in" type="link" id="actionButton"  style={getButtonStyle() } ><h6 className="txt-in">PCC-2</h6> </Button> </Link>

                       <div className="flex inputs2">
                           <div >
                               <b class="inp"> Current(A):</b>
                               <Input  className="disabled-cursor1 input " value={current/2} onChange={handleInputChange} />                      
                           </div>
                           
                           <div>
                               <b class="inp"> Power(W):</b>
                               <Input  className="disabled-cursor1 input " value={power} onChange={handleInput2Change}/>
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
                       <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-13"></img>
                       <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-13" ></img>
                       <Link to="/Pcc3">
                       <Button className="button3 txt-in " type="link" id="actionButton"  style={getButtonStyle()} > <h6 className="txt-in">PCC-3</h6> </Button> </Link>
                       <div className="flex inputs3" >
                           <div >
                               <b class="inp"> Current(A):</b>
                               <Input  className="disabled-cursor1 input " value={current/2}/>                      
                           </div>
                           
                           <div>
                               <b class="inp"> Power(W):</b>
                               <Input  className="disabled-cursor1 input " value={power} onChange={handleInput2Change} />
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
                       <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-141"></img>
                       <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-14" ></img>
                       <Link to="/Pcc4">
                       <Button className="button4" type="link" id="actionButton"  style={getButtonStyle()} ><h6 className="txt-in" >PCC-4</h6></Button></Link>
                       <div className="flex inputs4">
                           <div >
                               <b class="inp"> Current(A):</b>
                               <Input  className="disabled-cursor1 input "  value={current/2}onChange={handleInputChange}/>                      
                           </div>
                           
                           <div>
                               <b class="inp"> Power(W):</b>
                               <Input  className="disabled-cursor1 input " value={power} onChange={handleInput2Change} />
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
                                <Space Wrap>                                  <Progress  type="circle" strokeColor={getColorEffi(power)} percent={power} />
</Space>
                                  {/* <ProgressCircular value={power} className="back234" /> */}
                              </div>
                               <div  >
                                   <b className="inp2"> Voltage(v):</b>
                                   <Input  className="disabled-cursor2 input "  value={Voltage} />                      
                               </div>
                               <div >
                                   <b >Energy <br/>Consumption(Kwh):</b>
                                   <Input  className="disabled-cursor2 input " value={Energy_Meter}/>
                               </div>
                               <div>
                                   <b className="inp2"> Power Factor:</b>
                                   <Input  className="disabled-cursor2 input " value={Power_factor*-1} />
                               </div>
                              </div>
                               
                               <div className="aa">

                                        <div>
                                            <b className="inp2">Apparent Power:</b>
                                            <Input  className="disabled-cursor2 input " value={Active_power} />
                                        </div>
                                        <div >
                                            <b className="inp2"> Reactive Power(KVA):</b>
                                            <Input  className="disabled-cursor2 input " value={Reactive_power} />                      
                                        </div>
                                        <div >
                                            <b >Energy Meter<br/> Reading(Kwh):</b>
                                            <Input  className="disabled-cursor2 input " value={energy} />
                                        </div>
                                        <div >
                                            <b >Monthly Energy <br/> Consumption(Kwh):</b>
                                            <Input  className="disabled-cursor2 input " value={Energy_Meter} />
                                        </div>
                               </div>
                              
                       </div>
                                          
               </Card> 
               </div>

               {/* <div class="card3">
               <Card className="card-txt" >
                       <div >
                       <h5 className="tt2 inp2">Vishnu Socitey</h5>
                           <div>
                           <ProgressCircular value={55} variant="success"/>

                           </div>
                               <div  >
                                   <b className="inp2"> Total Energy(Kwh):</b>
                                   <Input disabled className="disabled-cursor2 input " />                      
                               </div>
                               
                               <div>
                                   <b className="inp2"> Power Factor:</b>
                                   <Input disabled className="disabled-cursor2 input " />
                               </div>
                              
                               <div >
                                   <b className="inp2"> Reactive Power(KVA):</b>
                                   <Input disabled className="disabled-cursor2 input " />                      
                               </div>
                               
                               <div>
                                   <b className="inp2">Active Power:</b>
                                   <Input disabled className="disabled-cursor2 input " />
                               </div>
                       </div>
               </Card> 
               </div> */}

     </div>
   
   </div> 
   </>
    
    </>
  );
}

export default Energy;