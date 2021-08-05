import React, { useState,useEffect } from "react";
import items from "./items.json";
import _ from "lodash";
import "./App.css";
const App = () => {
 
  //按order值排序
  const [init, setInit] = useState(_.orderBy(items, ["order"], ["asc"]));
  //按每行四个拆成二维数组
  const [arr,setArr] = useState(_.chunk(init,4))
  //层级为奇数，按照order排序需要翻转
  console.log(arr)
  return (
    <>
      <div className="container">
        {arr.map((itemArr,level) => {
          return level % 2 === 0 ? itemArr.map((item)=>{
            return (
              <div key={item._id} className="item-container">
                <div className="item">{item.name}</div>
                { level % 2 === 0 ? (
                  <span className="arrow-right"></span>
                ) : (
                  <span className="arrow-left"></span>
                )}
              </div>
            );
          })
          : itemArr.reverse().map((item)=>{
            return (
              <div key={item._id} className="item-container">
                <div className="item">{item.name}</div>
                {level % 2 === 0 ? (
                  <span className="arrow-right"></span>
                ) : (
                  <span className="arrow-left"></span>
                )}
              </div>
            );
          })
        })}
      </div>
    </>
  );
};

export default App;
