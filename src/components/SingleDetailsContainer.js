import React from 'react';
import {BsArrowDownUp} from "react-icons/bs";
import SingleDetails from './SingleDetails.js';
import {data} from '../assets/data.js';
import DetailsHeading from './DetailsHeading.js';

function SingleDetailsContainer({yearCount}) {
  return (
    <div>
    {/* <div className="singleDetails-header-year"><span>2020</span><BsArrowDownUp/></div> */}
    <DetailsHeading yearCount={yearCount}/>
      {data.map((item,index)=>{
        return <SingleDetails key={index} data={item}/>
      })}
    </div>
  )
}

export default SingleDetailsContainer
