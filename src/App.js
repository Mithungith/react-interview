import "./App.css";
import SalesSection from "./components/SalesSection";
import ProductGroup from "./components/ProductGroup";
import SingleDetailsContainer from "./components/SingleDetailsContainer";
import TotalValue from "./components/TotalValue";
import TopHeader from "./components/TopHeader";
import FooterContainer from "./components/FooterContainer";
import {useState} from "react";
function App() {
  const [scrollWidth,setScrollWidth] = useState(true);
  function scrollWidthFunc(){
    console.log(scrollWidth)
    setScrollWidth(prev=>!prev);
  }
  const year = [2020, 2021, 2022, 2023];
  return (
    <div className="App">
      <div class="first">
        <div class="second">
          <ProductGroup scrollWidth={scrollWidthFunc}/>
        </div>
        <div className="lastTwoSection">
          <TopHeader />
          <div style={{ display: "flex" }}>
            <SalesSection />
            <div class="scroll-grand">
              <div class={scrollWidth?"width-scroll-bar":" scroll-parent"}>
                <div class="scroll">
                  {year.map((item, index) => {
                    return (
                      <SingleDetailsContainer key={index} yearCount={item} />
                    );
                  })}
                </div>
              </div>
            </div>
            <div class="third">
              <TotalValue />
            </div>
          </div>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
