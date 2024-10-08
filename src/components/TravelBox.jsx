import React from "react";
import style from "./TravelBox.module.css";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiRepeat } from "react-icons/pi";
import InfoTimeTravel from "./search travel/InfoTimeTravel";
function TravelBox() {
  return (
    <div className={style.coll}>
      <div className={style.containerAll}>
        <div className={style.container}>
          <div className={style.travelBox}>
            <div className={style.tapMenu}>
              <ul>
                <li>
                  <GiAirplaneDeparture size={40} />
                  <span>هواپیما</span>
                </li>
                <li>
                  <GiAirplaneDeparture size={40} />
                  <span>هواپیما</span>
                </li>
                <li>
                  <GiAirplaneDeparture size={40} />
                  <span>هواپیما</span>
                </li>
                <li>
                  <GiAirplaneDeparture size={40} />
                  <span>هواپیما</span>
                </li>
                <li>
                  <GiAirplaneDeparture size={40} />
                  <span>هواپیما</span>
                </li>
                <li>
                  <GiAirplaneDeparture size={40} />
                  <span>هواپیما</span>
                </li>
              </ul>
            </div>
            <div className={style.formBox}>
              <button className={style.btn}>
                یک طرفه
                <IoMdArrowDropdown />
              </button>
              <InfoTimeTravel />
            </div>
          </div>
        </div>

        <div className={style.travelBoxMobile}>
          <div className={style.tapMenuMobile}>
            <ul>
              <li>
                <GiAirplaneDeparture size={40} />
                <span>هواپیما</span>
              </li>
              <li>
                <GiAirplaneDeparture size={40} />
                <span>هواپیما</span>
              </li>
              <li>
                <GiAirplaneDeparture size={40} />
                <span>هواپیما</span>
              </li>
              <li>
                <GiAirplaneDeparture size={40} />
                <span>هواپیما</span>
              </li>
              <li>
                <GiAirplaneDeparture size={40} />
                <span>هواپیما</span>
              </li>
              <li>
                <GiAirplaneDeparture size={40} />
                <span>هواپیما</span>
              </li>
            </ul>
          </div>
          <div className={style.formBox}>
            <button className={style.btn}>
              یک طرفه
              <IoMdArrowDropdown />
            </button>
            <InfoTimeTravel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBox;
