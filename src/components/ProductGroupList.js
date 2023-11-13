import React, { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { RxTriangleRight } from "react-icons/rx";
import { TbArrowBadgeRightFilled,TbArrowBadgeRight } from "react-icons/tb";
import { RiExpandLeftRightLine} from "react-icons/ri";
function ProductGroupList({ productGroup }) {
  const [listToggle, setListToggle] = useState(true);
  const [handleinnerList, setHandleinnerList] = useState("");
  const [openLisi1First, setOpenLisi1First] = useState('');
  const [openLisi1FirstInner, setOpenLisi1FirstInner] = useState(true);
  function handleList() {
    console.log("hjfh");
    setListToggle((prev) => !prev);
  }
  function handleInList(productName) {
    console.log("in list",productName)
    // setHandleinnerList((prev) => !prev);
    if(productName === handleinnerList){
      setHandleinnerList("");
    }
    else{
      setHandleinnerList(productName);
    }
  }
  function openLisi1(productName){
    console.log(productName);
    if(productName === openLisi1First){
      setOpenLisi1First("");
    }
    else{
      setOpenLisi1First(productName);
    }
  }
  function handleInListInner(productName){
    if(productName === openLisi1FirstInner){
      setOpenLisi1FirstInner("");
    }
    else{
      setOpenLisi1FirstInner(productName);
    }
  }
  console.log(openLisi1FirstInner );
  return (
    <>
      {productGroup.map((item, index) => {
        return (
          <li key={index} onclick={handleList}>
            <div className="productGroup-single">
              <div className="productGroup-single-first">
                <div className="productGroup-single-first-icon1" onClick={()=>openLisi1(item.product)}>
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
            <ul>
              <li onClick={()=>handleInList(item.product)} className={openLisi1First === item.product && openLisi1First !== ""?"productGroup-single-first-icon12 heightLi1":"productGroup-single-first-icon12"}>
                <div className="innerFirstProduct">
                  <p class="subGroup-first"><span onClick={()=>handleInListInner(item.product)}><RxTriangleRight/></span><span><TbArrowBadgeRight/></span>Sub-Group 1</p>
                  <p>
                    <span>22.24</span>
                  </p>
                </div>
                <ul className={openLisi1FirstInner === item.product && openLisi1FirstInner !==""?"innerSecondProduct":"innerSecondProduct heightLi2"}>
                  <li>
                    <p><span><RiExpandLeftRightLine/></span>Category 1</p>
                    <p>22.3</p>
                  </li>
                  <li>
                    <p><span><RiExpandLeftRightLine/></span>Category 2</p>
                    <p>22.3</p>
                  </li>
                  <li>
                    <p><span><RiExpandLeftRightLine/></span>Category 3</p>
                    <p style={{color:"grey"}}>22.3</p>
                  </li>
                  <li>
                    <p><span><RiExpandLeftRightLine/></span>Category 4</p>
                    <p>22.3</p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        );
      })}
    </>
  );
}

export default ProductGroupList;
