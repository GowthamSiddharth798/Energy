import React from "react"; 
import { Card,Input } from 'react-rainbow-components';
function card(){
    return(
        <Card>
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
    );
}
export default card;