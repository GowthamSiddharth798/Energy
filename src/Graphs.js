import React from 'react'
import CustomBarChart from './LiveGraphs';
import CustomBarChart2 from './Energy_bar';
import CustomBarChart3 from './Energy_Monthly';
import './LiveGraphs.css';
import { Card } from 'react-rainbow-components';
import vishnu from './vishnu.jpg';
import home from './home.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Graphs = () => {
  return (
    <>
       <Card className="hwe" >
        <div className=" flex" >
                       <Link to="/">                        
                           <img src={home} className="home-logo1" />
                       </Link>
                       <h3 className="bvc"><Card className="bnm"><b className="ghj"> ENERGY MONITORING SYSTEM</b></Card></h3>
                     <h3  class="heading">VISHNU INSTITUTE OF TECHNOLOGY</h3>   
                     <div > <img src={vishnu} class="vit-logo "/></div>                                     
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