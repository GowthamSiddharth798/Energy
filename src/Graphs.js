import React from 'react'
import CustomBarChart from './LiveGraphs';
import CustomBarChart2 from './Energy_bar';
import CustomBarChart3 from './Energy_Monthly';
import './LiveGraphs.css';
import { Card } from 'react-rainbow-components';
const Graphs = () => {
  return (
    <>
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
    <div className='we'>
    <div className='flex marg'>
        <Card className='ery'>
          <p><b className='hj'>Live Power</b></p>
          <CustomBarChart/></Card>
        <Card className='ery'><p><b className='hj'> Live Energy</b></p> <CustomBarChart2/></Card>
    </div>
    {/* <Card className='ery1'> <p><b>Monthly Energy</b></p><CustomBarChart3/></Card> */}
    </div>
    </>
  )
}

export default Graphs;