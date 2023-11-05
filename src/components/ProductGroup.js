import React from "react";
import { BiCaretRight } from "react-icons/bi";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { productGroup } from "../assets/data";
function ProductGroup() {
  console.log(productGroup);
  return (
    <div>
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
          <div className="productTabColor">
            <p>Product Structure</p>
          </div>
          <div>
            <p>Brand</p>
          </div>
        </div>
      </div>
      <div className="productGroup">
        <ul>
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
        </ul>
      </div>
    </div>
  );
}

export default ProductGroup;
