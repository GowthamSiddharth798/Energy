import React from 'react'
import CustomBarChart from './LiveGraphs';
import CustomBarChart2 from './Energy_bar';
import CustomBarChart3 from './Energy_Monthly';
import './LiveGraphs.css';
import { Card } from 'react-rainbow-components';
const Graphs = () => {
  return (
    <>
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