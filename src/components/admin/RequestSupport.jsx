import React from "react";
import style from "./RequestSupport.module.css";
import AddRequest from "./AddRequest";
import plus from "./../../assets/icones/plus.svg";
import { useState } from "react";
function RequestSupport() {
  const [show, setShow] = useState(true);
  const showRequest = () => {
    setShow(true);
  };
  return (
    <div className={style.content}>
      <div className={style.topContent}>
        <h3>درخواست پشتیبانی آنلاین </h3>
    
          {!show && <button className={style.btnRequest} onClick={showRequest}>
            ایجاد درخواست جدید
            <span>
              <img src={plus} alt="" />
            </span>
          </button>}
        
      </div>
      {show && <AddRequest setShow={setShow} />}
      
    </div>
  );
}

export default RequestSupport;
