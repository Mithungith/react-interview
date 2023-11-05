import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {BsArrowLeft,BsArrowRight} from "react-icons/bs";
import { productGroup,productGroup1 } from "../assets/data";
import ProductGroupList from "./ProductGroupList";
import ProductGroupHeader from "./ProductGroupHeader";
function ProductGroup() {
    const [tabChange,setTabCange] = useState(true);
    const [collapseBar,setCollapseBar] = useState(true);
    function handleCollapse(){
        setCollapseBar(prev=>!prev);
    }
    function changeTab(){
        setTabCange(prev=>!prev);
    }
  return (
    <div className={!collapseBar?"productGroup-toggle productFormate":"productFormate"}>
    <div className="productGroupHeader-height">
    <div class="productArrow" onClick={handleCollapse}><span>{collapseBar?<BsArrowLeft/>:<BsArrowRight/>}</span></div>
      <ProductGroupHeader/>
    </div>
      <div className="productGroup-header-div">
        <div className="productGroup-header">
          <div className="search-div">
            <input type="text" placeholder="Search E.G Product" />
            <div>
              <AiOutlineSearch />
            </div>
          </div>
        </div>
        <div className="productTab">
          <div className={tabChange?"productTabColor":null} onClick={changeTab}>
            <p>Product Structure</p>
          </div>
          <div className={!tabChange?"productTabColor":null} onClick={changeTab}>
            <p>Brand</p>
          </div>
        </div>
      </div>
      <div className="productGroup">
        <ul>
          {tabChange?<ProductGroupList productGroup={productGroup}/>:<ProductGroupList productGroup={productGroup1}/>}
        </ul>
      </div>
    </div>
  );
}

export default ProductGroup;
