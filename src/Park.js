import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import Nav2 from '../Nav2';
import './Park.css';
import{Card,Input,Button} from 'react-rainbow-components'
export const Park = () => {
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
                            <Input disabled className="disabled-cursor1  input"  />                      
                        </div>

                        <div>
                            <b class="inp">IY_Current(A):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp">IB_Current(A):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                    </div>
                    <div className="flex inputs2 b11">
                        <div >
                            <b class="inp">IRL_Current(A):</b>
                            <Input disabled className="disabled-cursor1  input"  />                      
                        </div>

                        <div>
                            <b class="inp">IYL_Current(A):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp">IBL_Current(A):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                    </div>
                    <div className="flex inputs3 b11">
                        <div >
                            <b class="inp"> R_Voltage(v):</b>
                            <Input disabled className="disabled-cursor1  input"  />                      
                        </div>

                        <div>
                            <b class="inp"> Y_Voltage(v):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp"> B_Voltage(v):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                    </div>
                    <div className="flex inputs4 b11">
                        <div >
                            <b class="inp">  VL_Voltage(v):</b>
                            <Input disabled className="disabled-cursor1  input"  />                      
                        </div>

                        <div >
                            <b class="inp">  VL_Voltage(v):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp"> VL_Voltage(v):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                    </div>
                </div>
                
                <div className='b2'>
                    <div className="flex inputs">
                    <div>
                            <b class="inp"> R_Power (W):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>

                        <div>
                            <b class="inp"> Y_Power (W):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp">B_Power (W):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                    </div>
                    {/* <div className="flex inputs2">
                        <div >
                            <b class="inp"> Current(A):</b>
                            <Input disabled className="disabled-cursor1  input"  />                      
                        </div>

                        <div>
                            <b class="inp"> Power(W):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp">Energy(Kwh):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                    </div>
                    <div className="flex inputs3">
                        <div >
                            <b class="inp"> Current(A):</b>
                            <Input disabled className="disabled-cursor1  input"  />                      
                        </div>

                        <div>
                            <b class="inp"> Power(W):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp">Energy(Kwh):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                    </div>
                    <div className="flex inputs4">
                        <div >
                            <b class="inp"> Current(A):</b>
                            <Input disabled className="disabled-cursor1  input"  />                      
                        </div>

                        <div>
                            <b class="inp"> Power(W):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                        <div >
                            <b class="inp">Energy(Kwh):</b>
                            <Input disabled className="disabled-cursor1 input " />
                        </div>
                    </div> */}
                </div>
                </div>
           </div>
           </Card>
           <Card className='vb'>
                                <div>
                                   <b className="inp2"> Power Factor:</b>
                                   <Input disabled className="disabled-cursor2 input " />
                               </div>
                               {/* <div  >
                                   <b className="inp2"> Power(W):</b>
                                   <Input disabled className="disabled-cursor2 input "  />                      
                               </div> */}
                               <br/>
                               <div >
                                   <b >Energy Meter Consumption(Kwh):</b>
                                   <Input disabled className="disabled-cursor2 input " />
                               </div>
                               <br/>
                               <div>
                                            <b className="inp2">Active Power:</b>
                                            <Input disabled className="disabled-cursor2 input " />
                                        </div>
                                        <br/>
                                        <div >
                                            <b className="inp2"> Reactive Power(KVA):</b>
                                            <Input disabled className="disabled-cursor2 input " />                      
                                        </div>
                                       
                              
           </Card>
          </div>
         
          <Link to="/pcc1">  <Button className='bq'>Link</Button>  </Link>
         </Card>
       </div>
    
    </>
  )
}
