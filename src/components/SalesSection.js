import React,{useState} from "react";
import { MdOutlineLock, MdOutlineLockOpen } from "react-icons/md";
function SalesSection() {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [lock,setLock] = useState("");
  const [lockArr,setLockArr] = useState([]);
  // function handleLock(productName){
  //   console.log(productName)
  //   if(productName === lock){
  //     setLock("");
  //   }
  //   else{
  //     setLock(productName);
  //   }
  // }
  function handleLockArr(productName){
    console.log(productName)
    if(lockArr.includes(productName)){
      setLockArr(prev=>prev.filter((item)=>{
        return item !== productName
      }))
    }
    else{
      setLockArr(prev=>[...prev,productName]);
    }
  }
  return (
    <div>
      <div className="sales-section">
        <div className="saleSection-div-head">
          <div className="saleSection-div-head-icon">
            <MdOutlineLock />
          </div>
          <div>SALES CHANNEL</div>
        </div>
        {data.map((item, index) => {
          return (
            <div className="saleSection-div" key={index}>
              {/* {lock === item && lock !== ""?(<div className="saleSection-div-head-icon" onClick={()=>handleLock(item)}>
                <MdOutlineLock />
              </div>):<div className="saleSection-div-icon" onClick={()=>handleLock(item)}>
            <MdOutlineLockOpen />
          </div>} */}
          {lockArr.includes(item) && lockArr.length !== 0?(<div className="saleSection-div-head-icon" onClick={()=>handleLockArr(item)}>
                <MdOutlineLock />
              </div>):(<div className="saleSection-div-icon" onClick={()=>handleLockArr(item)}>
            <MdOutlineLockOpen /></div>)}
              <div>
                <p>Sales Channel {index + 1}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SalesSection;
