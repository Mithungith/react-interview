import React from 'react';
import {BsArrowDownUp} from "react-icons/bs";
import SingleDetails from './SingleDetails.js';
import data from '../assets/data.js';

function SingleDetailsContainer() {
  return (
    <div>
    <div className="singleDetails-header-year"><span>2020</span><BsArrowDownUp/></div>
    <div className="singleDetails-header">
            <div><p>target</p></div>
            <div><p>act</p></div>
            <div><p>growth%</p></div>
            <div><p>gap%</p></div>
            <div><p>margin</p></div>
            <div><p>dist</p></div>
            <div className="singleDetailsBudget"><p>budget <span class="budjectPercent">%</span></p></div>
    </div>
      {data.map((item,index)=>{
        return <SingleDetails key={index} data={item}/>
      })}
    </div>
  )
}

export default SingleDetailsContainer
