import React, { useEffect, useState } from "react";
import SingleDetails from "./SingleDetails.js";
import DetailsHeading from "./DetailsHeading.js";

function SingleDetailsContainer({ yearCount }) {
  const diff = yearCount - 2020;
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?skip=${diff * 10}&limit=10`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data.products);
      });
  }, []);
  if (Array.isArray(apiData)) {
    var val3 = apiData.map((item, index) => {
      return {
        target: item.stock,
        act: item.price,
        growth: item.discountPercentage,
        gap: item.rating,
        margin: item.rating,
        dist: item.stock,
        budget: item.price,
        budgetPercent: item.stock,
      };
    });
  }
  return (
    <div>
      <DetailsHeading yearCount={yearCount} />
      {val3.map((item, index) => {
        return <SingleDetails key={index} data={item} />;
      })}
    </div>
  );
}

export default SingleDetailsContainer;
