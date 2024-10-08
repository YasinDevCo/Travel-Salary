import React from "react";
import style from "./MainSearch.module.css";
import { BsAirplane } from "react-icons/bs";
import { BiArrowFromRight, BiBell } from "react-icons/bi";
import none from "./../../assets/none.png";
import { FcFlashOn } from "react-icons/fc";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { FiArrowUpLeft } from "react-icons/fi";
function Ticket() {
  return (
    <div className={style.containerTicket}>
      <div className={style.ticket}>
        <div className={style.right}>
          <div className={style.top}>
            <div className={style.nameCompany}>
              <img src={none} alt="" style={{ width: "50px" }} />
              <span>نام هواپیمایی </span>
            </div>
            <div className={style.details}>
              <span>سیستمی</span>
              <span>اکونومی</span>
              <span>کد پرواز</span>
            </div>
          </div>
          <div className={style.timeCity}>
            <span style={{ fontWeight: "600" }}>19:00</span>
            <span>اصفحان</span>
            <span>
              ---- <PiAirplaneTakeoffLight /> ----
            </span>
            <span>مشهد</span>
            <span style={{ fontWeight: "600" }}>20:00</span>
          </div>
          <div className={style.other}>
            <span>اطلاعات پرواز</span>
            <span>قوانین</span>
          </div>
        </div>
        <div className={style.left}>
          <p>
            2,500,000 <span>ریال</span>
          </p>
          <span>نرخ رسمی ارلاین ها</span>
          <button>
            <span>رزرو آنلاین</span>
            <span>
              <FiArrowUpLeft fontSize={30} />
            </span>
          </button>

          <div>
            <span>
              <BiBell size={30} />
            </span>
            <span>
              <FcFlashOn size={30} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
