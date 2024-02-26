import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import Nav2 from '../Nav2';
import './Park.css';
import{Card,Input,Button} from 'react-rainbow-components'
import  { useState, useEffect } from 'react';


export const Park = () => {

    const [IRcurrent,setIRCurrent] =useState();
    const [IYcurrent,setIYCurrent] =useState();
    const [IBcurrent,setIBCurrent] =useState();
    const [VRvoltage,setVRvoltage] =useState();
    const [VYvoltage,setVYvoltage] =useState();
    const [VBvoltage,setVBvoltage] =useState();
    const [IRLcurrent,setIRLCurrent] =useState();
    const [IYLcurrent,setIYLCurrent] =useState();
    const [IBLcurrent,setIBLCurrent] =useState();
    const [VRLvoltage,setVRLvoltage] =useState();
    const [VYLvoltage,setVYLvoltage] =useState();
    const [VBLvoltage,setVBLvoltage] =useState();
    const [R_power,setR_Power] =useState();
    const [Y_power,setY_Power] =useState();
    const [B_power,setB_Power] =useState();
    const [Active_power,setActive_Power] =useState();
    const [Reactive_power,setReactive_Power] =useState();
    const [Energy_Meter,setEnergy_Meter] =useState();
    const [Power_factor,setPower_factor] =useState();

    

    useEffect(() => {
        setInterval(() => {
            fetch("https://energybackend.onrender.com/api/sensordata")
                .then(async result => {
                    const data = await result.json();
                    setIRCurrent(data.IRcurrent);
                    setIYCurrent(data.IYcurrent);
                    setIBCurrent(data.IBcurrent);
                    setVRvoltage(data.VRvoltage);
                    setVYvoltage(data.VYvoltage);
                    setVBvoltage(data.VBvoltage);              
                    setIRLCurrent(data.IRLcurrent);
                    setIYLCurrent(data.IYLcurrent);
                    setIBLCurrent(data.IBLcurrent);
                    setVRLvoltage(data.VRLvoltage);
                    setVYLvoltage(data.VYLvoltage);
                    setVBLvoltage(data.VBLvoltage);
                    setR_Power(data.R_power);
                    setY_Power(data.Y_power);
                    setB_Power(data.B_power);
                    setReactive_Power(data.Reactive_power);         
                    setActive_Power(data.Active_power);
                    setPower_factor(data.Power_factor);
                    setEnergy_Meter(data.Energy_Meter);

                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }, 2000);
    }, []);
  return (
    <>
    <div>
      <Card className="cc"><div className="in-line head-main">
                    <div className ="margin-hamber"></div>
                        <img src="https://i.ibb.co/YZw8yxS/Iot-logo.jpg" class="main-logo" />
                        <h1 className="main-heading">GREEN FUSION IoT SOLUTIONS</h1> 
                    <div className="title"> <h1>Energy Monitoring </h1></div>
                    <div >
                        <img src="https://i.ibb.co/Cm04CR4/vishnu-logo.jpg" class="vit-logo "/>
                            </div>
                            <h1  class="heading">VISHNU INSTITUTE OF Technology</h1>   
                                                              
                    </div>
                    </Card>
      </div>
       <div className='bg-s'>
         <Card className='xyz'>
         <div className='flex'>
          <Card className='ner'>
           <div className='b11'>
                <div>
                <div className='b'>
                    <div className="flex inputs b11">
                        <div >
                            <b class="inp">IR_Current(A):</b>
                            <Input  className="disabled-cursor1  input"  value={IRcurrent} />                      
                        </div>

                        <div>
                            <b class="inp">IY_Current(A):</b>
                            <Input  className="disabled-cursor1 input " value={IYcurrent} />
                        </div>
                        <div >
                            <b class="inp">IB_Current(A):</b>
                            <Input  className="disabled-cursor1 input " value={IBcurrent}/>
                        </div>
                    </div>
                   
                    <div className="flex inputs3 b11">
                        <div >
                            <b class="inp"> R_Voltage(v):</b>
                            <Input  className="disabled-cursor1  input"  value={VRvoltage} />                      
                        </div>

                        <div>
                            <b class="inp"> Y_Voltage(v):</b>
                            <Input  className="disabled-cursor1 input " value={VYvoltage}/>
                        </div>
                        <div >
                            <b class="inp"> B_Voltage(v):</b>
                            <Input  className="disabled-cursor1 input " value={VBvoltage}/>
                        </div>
                    </div>
                    <div className="flex inputs4 b11">
                        <div >
                            <b class="inp">  VRL_Voltage(v):</b>
                            <Input  className="disabled-cursor1  input" value={VRLvoltage} />                      
                        </div>

                        <div >
                            <b class="inp">  VYL_Voltage(v):</b>
                            <Input  className="disabled-cursor1 input " value={VYLvoltage} />
                        </div>
                        <div >
                            <b class="inp"> VBL_Voltage(v):</b>
                            <Input  className="disabled-cursor1 input " value={VBLvoltage}/>
                        </div>
                    </div>
                </div>
                
                <div className='b2'>
                    <div className="flex inputs">
                    <div>
                            <b class="inp"> R_Power (W):</b>
                            <Input  className="disabled-cursor1 input " value={R_power}/>
                        </div>

                        <div>
                            <b class="inp"> Y_Power (W):</b>
                            <Input  className="disabled-cursor1 input " value={Y_power} />
                        </div>
                        <div >
                            <b class="inp">B_Power (W):</b>
                            <Input  className="disabled-cursor1 input " value={B_power} />
                        </div>
                    </div>
                    {/* <div className="flex inputs2">
                        <div >
                            <b class="inp"> Current(A):</b>
                            <Input  className="disabled-cursor1  input"  />                      
                        </div>

                        <div>
                            <b class="inp"> Power(W):</b>
                            <Input  className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp">Energy(Kwh):</b>
                            <Input  className="disabled-cursor1 input " />
                        </div>
                    </div>
                    <div className="flex inputs3">
                        <div >
                            <b class="inp"> Current(A):</b>
                            <Input  className="disabled-cursor1  input"  />                      
                        </div>

                        <div>
                            <b class="inp"> Power(W):</b>
                            <Input  className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp">Energy(Kwh):</b>
                            <Input  className="disabled-cursor1 input " />
                        </div>
                    </div>
                    <div className="flex inputs4">
                        <div >
                            <b class="inp"> Current(A):</b>
                            <Input  className="disabled-cursor1  input"  />                      
                        </div>

                        <div>
                            <b class="inp"> Power(W):</b>
                            <Input  className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp">Energy(Kwh):</b>
                            <Input  className="disabled-cursor1 input " />
                        </div>
                    </div> */}
                </div>
                </div>
           </div>
           </Card>

           <Card className='vb'>
                                <div>
                                   <b className="inp2"> Power Factor:</b>
                                   <Input  className="disabled-cursor2 input " value={Power_factor} />
                               </div>
                               {/* <div  >
                                   <b className="inp2"> Power(W):</b>
                                   <Input  className="disabled-cursor2 input "  />                      
                               </div> */}
                               <br/>
                               <div >
                                   <b >Energy Meter Consumption(Kwh):</b>
                                   <Input  className="disabled-cursor2 input " value={Energy_Meter} />
                               </div>
                               <br/>
                               <div>
                                            <b className="inp2">Apparent Power:</b>
                                            <Input  className="disabled-cursor2 input "  value={Active_power}/>
                                        </div>
                                        <br/>
                                        <div >
                                            <b className="inp2"> Reactive Power(KVA):</b>
                                            <Input  className="disabled-cursor2 input " value={Reactive_power} />                      
                                        </div>
                                       
                              
           </Card>
          </div>
         
          <Link to="/LiveGraphs">  <Button className='bq'>Live_Graphs</Button>  </Link>
         </Card>
       </div>
    
    </>
  )
}
