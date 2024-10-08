import React from "react";
import style from "./Offers.module.css";
import { PiArrowCircleUpLeftFill } from "react-icons/pi";
import { GoArrowUpLeft } from "react-icons/go";
import pic1 from "./../assets/1.jpg";
import pic2 from "./../assets/2.jpg";
import pic3 from "./../assets/3.jpg";
function Offers() {
  return (
    <div className={style.container}>
      <div className={style.items}>
        <div className={style.box}>
          <img src={pic1} alt="" />
          <div className={style.arrow}>
            <GoArrowUpLeft color="#272A3B" size={50} />
          </div>
          <div className={style.boxLiner}>
            <div className={style.boxLinerTitle}>
              <h3>رزرو هتل داخلی</h3>
              <p>تا ۸۰٪ تخفیف ویژه رزرو هتل داخلی</p>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <img src={pic2} alt="" />
          <div className={style.arrow}>
            <GoArrowUpLeft color="#272A3B" size={50} />
          </div>
          <div className={style.boxLiner}>
            <div className={style.boxLinerTitle}>
              <h3>تورهای مسافرتی</h3>
              <p>بهترین قیمت  کامل‌ترین خدمات، پشتیبانی 24 ساعته</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.items}>
        <div className={style.box}>
          <img src={pic3} alt="" />
          <div className={style.arrow}>
            <GoArrowUpLeft color="#272A3B" size={50} />
          </div>
          <div className={style.boxLiner}>
            <div className={style.boxLinerTitleLast}>
              <h3>بلیط هواپیما کانادا</h3>
              <p>تضمین بهترین قیمت بلیط هواپیما کانادا</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
