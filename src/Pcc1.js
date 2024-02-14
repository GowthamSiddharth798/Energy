import React from "react";
import './Pcc1.css';
import{Card,Input,Button} from 'react-rainbow-components'
import { Link } from "react-router-dom/cjs/react-router-dom.js";

function Pcc1(){
    const linkStyle = {
        float: 'left',
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '20px 16px',
        textDecoration: 'none',
        
    };
    return(
        < >
        
          <div className="back-bg">
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
         
          <center><h1><u>PCC-1</u></h1></center>
            <Card className="card-pcc1 flex">
           
                <div>
                         {/*                          */}
                 <div class="main">
                        <div class="flex">
                        <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-11"></img>
                        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-11" ></img>
                        <Link to="/Pcc1/Park Light D.B's"> <Button className="park-button" ><p >Park Light D.B's</p></Button></Link>
                        
                        <div className="flex inputs-pcc1">
                            <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div>
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div >
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                        </div>
                        </div>
                        
                        <div className="flex">
                        {/* <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-12"></img> */}
                        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-12" ></img>
                       <Link to="/Pcc1/Stp"> <Button className="stp-button" ><p >STP 2&3 Kaveri,Seeta Hostel</p></Button></Link>
                        <div className="flex inputs2-pcc1">
                            <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                                           
                            <div>
                                <b> Power(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div >
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                        </div>
                        </div>

                        <div className="flex">
                        {/* <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-13"></img> */}
                        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-13" ></img>
                        <Button className="Geysers-button" ><p >8 Hostels Geysers</p></Button>
                        <div className="flex inputs3-pcc1">
                            <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div>
                                <b> Power(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div >
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                        </div>
                        </div>

                        <div className="flex">
                        {/* <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-14"></img> */}
                        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-14" ></img>
                        <Button className="ac-button" ><p >53 Rooms A/C's</p></Button>
                        <div className="flex inputs4-pcc1">
                            <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div>
                                <b> Power(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div >
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                        </div>
                        </div>
                 </div>

                          {/*                          */}
                 <div className="new">
                     <div class="main">
                            <div class="flex">
                            <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-11"></img>
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-11" ></img>
                            <Button className="front-button" ><p >FrontCampusPanel</p></Button>
                            <div className="flex inputs-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>
                            
                            <div className="flex">
                            {/* <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-12"></img> */}
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-12" ></img>
                            <Button className="annapurna-button" ><p >Annapurna Canteen A/C's</p></Button>
                            <div className="flex inputs2-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>

                            <div className="flex">
                            {/* <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-13"></img> */}
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-13" ></img>
                            <Button className="Hostels-button" ><p > Hostels (RRSV&GVVS)</p></Button>
                            <div className="flex inputs3-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>

                            <div className="flex">
                            <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-14"></img>
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-14" ></img>
                            <Button className="annapurna-lighting-button" ><p >Annapurna Canteen Lighting</p></Button>
                            <div className="flex inputs4-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>
                     </div>
                 </div>

{/*   Cross mark             */}

                 <div >
                        <img src="https://icon-library.com/images/cross-mark-icon/cross-mark-icon-9.jpg" height={23} className="cross-mark" />
                        <h5 className="CROSS-TXT">BUS COUPLER</h5>
                    </div>
                    <br/>
                    <br/>


                  {/*                         */}
                 <div className="new3">
                     <div class="main">
                            <div class="flex">
                            <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-11"></img>
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-11" ></img>
                            <Button className="d-button" ><p > SVECW'D' Block</p></Button>
                            <div className="flex inputs-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>
                            
                            <div className="flex">
                            {/* <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-12"></img> */}
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-12" ></img>
                            <Button className="a-canteen-button" ><p >Annapurna Canteen Blowers</p></Button>
                            <div className="flex inputs2-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>

                            <div className="flex">
                            {/* <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-13"></img> */}
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-13" ></img>
                            <Button className="sbsp-button" ><p > SBSP Block</p></Button>
                            <div className="flex inputs3-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>

                            <div className="flex">
                            <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-14"></img>
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-14" ></img>
                            <Button className="bvrc-button" ><p >BVRC New Block Lighting</p></Button>
                            <div className="flex inputs4-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>
                     </div>
                 </div>

                  {/*                        */}
                 <div className="new4">
                     <div class="main">
                            <div class="flex">
                            <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-11"></img>
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-11" ></img>
                            <Button className="park-button" ><p >Street Lights D.B</p></Button>
                            <div className="flex inputs-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>
                            
                            <div className="flex">
                            <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-12"></img>
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-12" ></img>
                            <Button className="d-block-button" ><p >SVECW 'D' Block A/C's</p></Button>
                            <div className="flex inputs2-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>

                            <div className="flex">
                            <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-133"></img>
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-13" ></img>
                            <Button className="spare-button" ><p >Spare</p></Button>
                            <div className="flex inputs3-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>

                            <div className="flex">
                            <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-14"></img>
                            <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-144"></img>
                            <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-14" ></img>
                            <Button className="front-ac-button" ><p >Front Campus A/C's</p></Button>
                            <div className="flex inputs4-pcc1">
                                <div >
                                    <b > Current(A):</b>
                                    <Input disabled className="disabled-cursor1 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power(W):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                                <div>
                                <b> Energy Meter(W):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                                <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor1 input " />
                                </div>
                            </div>
                            </div>
                     </div>
                 </div>




                </div>

            </Card> 
          </div>
      
      
      </>
    );
}

export default Pcc1;