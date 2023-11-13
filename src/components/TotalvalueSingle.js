import React, { useState } from "react";
import { targetData } from "../assets/data";
import {MdOutlineAttachMoney} from "react-icons/md"

function TotalvalueSingle({ targetData }) {
  const [openModalValuestate,setopenModalValueState] = useState("");
  const { target, growth, margin, dist, budget, budgetChange } = targetData;
  const colorValue = {
    negative: "#f59994",
    positive: "#12d965",
  };
  function openModalValue(growth){
    console.log(growth);
    if(openModalValuestate === growth){
      setopenModalValueState("");
    }
    else{
      setopenModalValueState(growth);
    }
  }
  return (
    <div
      className={
        target === "+" ? "singleDetails-div opacitySingle" : "singleDetails-div"
      }
    >
      <div className="totalValueSingle singleDetails">
        <div class="totalValueSingleTarget" onClick={()=>openModalValue(growth)}>
          <p style={{ color: colorValue.lightBlue }}>{target}</p>
            <div className={openModalValuestate === growth && openModalValuestate !==""?"modal-container-upper":"modal-container-upper modalhideShow"}>
            <div className="modal-container">
  {/* <div className="sm-tri"></div> */}
  {/* <div className="sm-tri2"></div> */}
  <div className="modal-div">
    <p>Set #Product Name,</p>
    <p>Sales Channel #</p>
    <div className="modal-input-div">
      <p>Target</p>
      <div className="div-input"><input type="text" value="12.34"/><div class="modal-icon-div">฿</div></div>
    </div>
    <div className="modal-input-div">
      <p>Margin</p>
      <div className="div-input"><input type="text" value="13.25"/><div class="modal-icon-div">%</div></div>
    </div>
    
    <div className="modal-input-div">
      <p>Budget%</p>
      <div className="budget div-input">
        <div className="budget-div1">
          <input type="text" value="42.34"/>
          <div className="modal-icon-div">฿</div>    
          </div>
        <div className="budget-div2">
          <input type="text" value="32"/>
        <div className="modal-icon-div">%</div>
        </div>
        </div>
    </div>
    <div className="button-modal modal-input-div">
      <button>Cancel</button>
      <button>Confirm</button>
    </div>
  </div>
</div>
            </div>
        </div>
        <div>
          <p
            style={
              growth >= 0
                ? { color: colorValue.positive }
                : { color: colorValue.negative }
            }
          >
            {growth > 0 ? "+" : null}
            {growth}%
          </p>
        </div>
        <div>
          <p style={{ color: colorValue.white }}>{margin}%</p>
        </div>
        <div>
          <p style={{ color: colorValue.white }}>{dist}</p>
        </div>
        <div className="singleDetailsBudget">
          <p style={{ color: colorValue.white }}>{budget} </p>
          <span style={{ color: colorValue.white }} className="budjectPercent">
            {String(budgetChange).length>2?String(budgetChange).slice(0,-1):String(budgetChange)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default TotalvalueSingle;
