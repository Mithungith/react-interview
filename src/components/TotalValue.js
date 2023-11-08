import React, { useState, useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";
import "../index.css";
import TotalvalueSingle from "./TotalvalueSingle";

function TotalValue() {
  const [apiDataTotal, setApiDataTotal] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=20&limit=10`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setApiDataTotal(data.products);
      });
  }, []);
  if (Array.isArray(apiDataTotal)) {
    var val3 = apiDataTotal.map((item, index) => {
      return {
        target: item.stock,
        growth: item.discountPercentage.toFixed(1),
        margin: item.price,
        dist: item.stock,
        budget: item.price,
        budgetChange: item.stock,
      };
    });
    return (
      <div>
        <div class="setTargetLastDivParent-width">
          <div className="setTargetLastDivParent">
            <div className="setTargetFirstDiv">
              <p>
                <span>Total: </span>
                <span>240</span>
              </p>
            </div>
            <div>
              <div className="setTargetLastDiv">
                <p>Set Target</p>
                <p>
                  2024{" "}
                  <span>
                    <BsArrowDown />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="totalValue-header">
            <div>
              <p>Target</p>
            </div>
            <div>
              <p>Growth</p>
            </div>
            <div>
              <p>Margin</p>
            </div>
            <div>
              <p>Dist</p>
            </div>
            <div>
              <p>Budget</p>
            </div>
          </div>
        </div>
        {val3.map((item, index) => {
          return <TotalvalueSingle key={index} targetData={item} />;
        })}
      </div>
    );
  }
}
export default TotalValue;
