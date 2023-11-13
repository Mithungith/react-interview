import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BsFilter,BsCheck2 } from "react-icons/bs";
import { MdOutlineFilterAlt } from "react-icons/md";
function TopHeader() {
  const [visibleModelFilter, setVisibleModelFilter] = useState(false);
  const [visibleModelYear, setVisibleModelYear] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  function visibleModelFunc() {
    setVisibleModelFilter((prev) => !prev);
  }
  function toggleYearFilter() {
    setVisibleModelYear((prev) => !prev);
  }
  function handleToggle(){
    setToggleBtn((prev)=>!prev);
  }
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
            <span onClick={handleToggle} className={toggleBtn?"togglePage1":"togglePage"}></span> {/*"togglePage togglePage1" */}
          </div>
          <div className="advanceFilter">
            <span>
              <BsFilter />
            </span>
            <span>Advance Filter :</span>
            <span onClick={visibleModelFunc} class="toggleFilter">
              <LiaAngleDownSolid />
            </span>
            <div className={visibleModelFilter?"advance-filterModel":"advance-filterModel filterHideShow"}>
            <ul>
              <li><span className="squareWhite"></span><span>Margin</span></li>
              <li><span className="squareWhite"></span><span>Distribution</span></li>
              <li><span className="squareWhite"></span><span>Budget</span></li>
            </ul>
          </div>
          </div>
          {/*=================================== */}
          
          {/*=================================== */}
          <div className="compareYears">
            <span>
              <MdOutlineFilterAlt />
            </span>
            <span>Compare Years :</span>
            <span  onClick={toggleYearFilter} class="dateFilterArrow"> 2020<LiaAngleDownSolid /></span>
            <span>to</span>
            <span className="lastDateFilter">
              2024 <LiaAngleDownSolid />
            </span>
            <div className={!visibleModelYear?"filterYear hideYear":"filterYear"}>
              <ul>
                <li>2023 <span className="showHover"><BsCheck2/></span></li>
                <li>2022 <span className="showHover"><BsCheck2/></span></li>
                <li>2021 <span className="showHover"><BsCheck2/></span></li>
                <li>2020 <span className="showHover"><BsCheck2/></span></li>
                <li>2019 <span className="showHover"><BsCheck2/></span></li>
                <li>2028 <span className="showHover"><BsCheck2/></span></li>
                <li>2027 <span className="showHover"><BsCheck2/></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
