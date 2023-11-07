import React,{useState,useEffect} from 'react'
import { productGroup } from "../assets/data";
import { BiCaretRight } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
function ProductGroupList({productGroup}) {
  const [apiData,setApiData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data.products);
      });
  }, []);
//   const val2 = apiData;  
  if(Array.isArray(apiData)){
    var val3 = apiData.map((item,index)=>{
        return {
            target: item.stock,
            act: item.price,
            growth:item.discountPercentage,
            gap:item.rating,
            margin: item.rating,
            dist: item.stock,
            budget: item.price,
            budgetPercent: item.stock,
          }
      })
      var val4 = val3.slice(0,10);
  }
  console.log("------------------mith---------------")
  console.log(val4,"mith1");
  return (
    <>
        {productGroup.map((item, index) => {
            return (
              <li key={index}>
                <div className="productGroup-single">
                  <div className="productGroup-single-first">
                    <div className="productGroup-single-first-icon1">
                      <BiCaretRight />
                    </div>
                    <div className="productGroup-single-first-icon2">
                      <TbArrowBadgeRightFilled />
                    </div>
                    <div>
                      <p>{item.product}</p>
                    </div>
                  </div>
                  <div className="productGroup-single-second">
                    <AiFillStar />
                    <p>{item.productVal}</p>
                  </div>
                </div>
              </li>
            );
          })}
    </>
  )
}

export default ProductGroupList
