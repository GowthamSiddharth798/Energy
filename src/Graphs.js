import React from 'react'
import CustomBarChart from './LiveGraphs';
import CustomBarChart2 from './Energy_bar';
import CustomBarChart3 from './Energy_Monthly';
import './LiveGraphs.css';
import { Card } from 'react-rainbow-components';
const Graphs = () => {
  return (
    <>
    <div className='flex marg'>
        <Card className='ery'><CustomBarChart/></Card>
        <Card className='ery'> <CustomBarChart2/></Card>
    </div>
    <Card className='ery1'><CustomBarChart3/></Card>
    </>
  )
}

export default Graphs;