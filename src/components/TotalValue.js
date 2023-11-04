import React from "react";
import {AiOutlineArrowDown} from "react-icons/ai";
import "../index.css";

function TotalValue() {
    return (
    <div>
      <div className="setTargetLastDivParent">
      <div><span>Total :240</span></div>
      <div>
        <div class="setTargetLastDiv"><p>Set Target</p><p>2024</p><span><AiOutlineArrowDown/></span></div>
      </div>
      </div>
    </div>
  );
}

export default TotalValue;
