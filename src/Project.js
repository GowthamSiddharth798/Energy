import React from "react"; 
import { Card,Input ,DatePicker} from 'react-rainbow-components';
import './Project.css';
function Project(){
    return(
        <div>
            <div className="main-center">   
               <div className="all">
                <Card className="cc"><div className="in-line head-main">
                    <div className ="margin-hamber"></div>
                        <img src="https://i.ibb.co/YZw8yxS/Iot-logo.jpg" class="main-logo" />
                        <h1 className="main-heading">GREEN FUSION IoT SOLUTIONS</h1> 
                    <div className="title"> <h1>SMART AGRICULTURE</h1></div>
                    <div >
                        <img src="https://i.ibb.co/Cm04CR4/vishnu-logo.jpg" class="vit-logo loop"/>
                            </div>
                            <h1  class="heading">VISHNU INSTITUTE OF Technology</h1>   
                                                              
                    </div>
                    </Card>
               </div>
              
                <div>
                <div className="in-line">
                        <Card className="card-height">
                        <h1>location-1</h1>
                        <div  className="in-line">
                            <h3 className="values temp">TEMPERATURE:</h3>
                            <Input/>
                        </div> 
                        <div  className="in-line">
                            <h3 className="values hum">HUMIDITY:</h3>
                            <Input/>
                        </div> 
                        <div  className="in-line">
                            <h3 className="values1">SOIL MOISTURE LEVEL:</h3>
                            <Input/>
                        </div>
                        <div  className="in-line">
                            <h3 className="values">CLIMATE CONDITION:</h3>
                            <Input/>
                        </div>
                        </Card>
                        
                        <Card className="card-height">
                        <h1>location-2</h1>
                        <div  className="in-line">
                            <h3 className="values temp">TEMPERATURE:</h3>
                            <Input/>
                        </div> 
                        <div  className="in-line">
                            <h3 className="values hum">HUMIDITY:</h3>
                            <Input/>
                        </div> 
                        <div  className="in-line">
                            <h3 className="values1">SOIL MOISTURE LEVEL:</h3>
                            <Input/>
                        </div>
                        <div  className="in-line">
                            <h3 className="values">CLIMATE CONDITION:</h3>
                            <Input/>
                        </div>
                        </Card>
                 
                    
                 
                        <Card className="card-height">
                        <h1>location-3</h1>
                        <div  className="in-line">
                            <h3 className="values temp">TEMPERATURE:</h3>
                            <Input/>
                        </div> 
                        <div  className="in-line">
                            <h3 className="values hum">HUMIDITY:</h3>
                            <Input/>
                        </div> 
                        <div  className="in-line">
                            <h3 className="values1">SOIL MOISTURE LEVEL:</h3>
                            <Input/>
                        </div>
                        <div  className="in-line">
                            <h3 className="values">CLIMATE CONDITION:</h3>
                            <Input/>
                        </div>
                        </Card>
                        <Card className="card-height">
                        <h1>location-4</h1>
                        <div  className="in-line">
                            <h3 className="values temp">TEMPERATURE:</h3>
                            <Input/>
                        </div> 
                        <div  className="in-line">
                            <h3 className="values hum">HUMIDITY:</h3>
                            <Input/>
                        </div> 
                        <div  className="in-line">
                            <h3 className="values1">SOIL MOISTURE LEVEL:</h3>
                            <Input/>
                        </div>
                        <div  className="in-line">
                            <h3 className="values">CLIMATE CONDITION:</h3>
                            <Input/>
                        </div>
                        </Card>
                    </div>
                     <Card className="card-1 text-12" >
                       <div className="text-cent">
                           <div className="in-line "> 
                                <h1 className="text-cent hiii">live motor data on-</h1>
                                <div><DatePicker className="date-picker"/></div>
                            </div>
                        </div>
                        <div  >
                            <div  className="in-line">
                                <h3 className="values temp13">TEMPERATURE:</h3>
                                <Input/>
                            </div> 
                            <div  className="in-line">
                                <h3 className="values">CLIMATE CONDITION:</h3>
                                <Input/>
                            </div>
                            <div  className="in-line">
                                <h3 className="values">MOTOR STATUS:</h3>
                                <div  className=" values1">
                                 <Input placeholder="ON/OFF" className="input-1"/>
                                </div>
                            </div>
                            <div  className="in-line">
                                <h3 className="values">CLIMATE CONDITION:</h3>
                                <Input/>
                                
                            </div>
                        </div>    
                     </Card>
                     <button onClick="display('section1')">hiiiii</button>
                        </div>
            </div>

            <div id="section1">
               <h1>cgnhcghjn</h1>
            </div>
        </div>
                        
            
          
       
        
       
    );
}

export default Project;