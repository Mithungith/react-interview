import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BsFilter } from "react-icons/bs";
import { MdOutlineFilterAlt } from "react-icons/md";
function TopHeader() {
  return (
    <div className="topheader">
      <div>
        <div className="topheader1">
          <p>Target Setup</p>
          <h3>2024</h3>
        </div>
      </div>
      <div className="topheader2">
        <div className="topheader2a">
          <p>
            Class A{" "}
            <span>
              <LiaAngleRightSolid />
            </span>
          </p>
          <p>
            Product Group A{" "}
            <span>
              <LiaAngleRightSolid />
            </span>
          </p>
          <p>
            Sub-Group A{" "}
            <span>
              <LiaAngleRightSolid />
            </span>
          </p>
          <p>
            Category 1{" "}
            <span>
              <LiaAngleRightSolid />
            </span>
          </p>
        </div>
        <div className="topheader2b">
          <div className="topheader2b-toggle">
            <p>Quater</p>
            <span className="togglePage"></span>
          </div>
          <div className="advanceFilter">
            <span><BsFilter/></span>
            <span>Advance Filter :</span>
            <span><LiaAngleDownSolid/></span>
          </div>
          <div className="compareYears">
            <span><MdOutlineFilterAlt/></span>
            <span>Compare Years :</span>
            <span>2020</span>
            <span>to</span>
            <span>2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
