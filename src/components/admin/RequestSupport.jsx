import React from "react";
import style from "./RequestSupport.module.css";
import AddRequest from "./AddRequest";
import plus from "./../../assets/icones/plus.svg";
import { useState } from "react";
import CateRequest from "../module/CateRequest";
import SubmitRequest from "../module/SubmitRequest";
function RequestSupport() {
  const [step, setStep] = useState(1); // مقدار اولیه‌ی step برای کنترل نمایش صفحه
  const [show, setShow] = useState(true);
  const showRequest = () => {
    setShow(true);
  };
  return (
    <div className={style.content}>
      <div className={style.topContent}>
        <h3>درخواست پشتیبانی آنلاین </h3>
        {/* {!show && (
          <button className={style.btnRequest} onClick={showRequest}>
            ایجاد درخواست جدید
            <span>
              <img src={plus} alt="" />
            </span>
          </button>
        )} */}
      </div>

      {!show && (
        <>
          <CateRequest step={step} setStep={setStep} />
          <SubmitRequest step={step} />
        </>
      )}

      {show && <AddRequest setShow={setShow} show={show} />}
    </div>
  );
}

export default RequestSupport;
