import React from "react";
import style from "./AddRequest.module.css";
import none from "./../../assets/none.png";
import plus from "./../../assets/icones/plus.svg";
function AddRequest({ setShow ,show}) {
  return (
    <div className={style.adRequest}>
      <div className={style.content}>
        <div>
          <h3>صندوق درخواست‌های پشتیبانی شما خالی است.</h3>
          <p>
            اگر سوال یا مشکلی دارید می توانید با ایجاد درخواست پشتیبانی در
            سریعترین زمان ممکن آن را پیگیری کنید.
          </p>
        </div>
        <button onClick={() => setShow(!show)} className={style.btnRequest}>
          ایجاد درخواست جدید
          <span>
            <img src={plus} alt="" />
          </span>
        </button>
      </div>
      <div className={style.photo}>
        <img src={none} alt="" />
      </div>
    </div>
  );
}

export default AddRequest;
