import React from "react";
import style from "./TravelBox.module.css";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiRepeat } from "react-icons/pi";
import InfoTimeTravel from "./search travel/InfoTimeTravel";
import SelectedFilter from "./module/SelectedFilter";
import planet from "./../assets/icones/planet.svg";
import train from "./../assets/icones/train.svg";
import basteh from "./../assets/icones/bastehSafar.svg";
import viza from "./../assets/icones/viza.svg";
import bimeh from "./../assets/icones/bimeh.svg";
import cpi from "./../assets/icones/cpi.svg";

function TravelBox() {
  return (
    <div className={style.coll}>
      <div className={style.containerAll}>
        <div className={style.container}>
          <div className={style.travelBox}>
            <div className={style.tapMenu}>
              <ul>
                <li>
                  <img className={style.iconeMenu}  src={planet} alt="" />
                  <span>هواپیما</span>
                </li>
                <li>
                  <img className={style.iconeMenu} src={train} alt="" />
                  <span>قطار</span>
                </li>
                <li>
                  <img className={style.iconeMenu} src={basteh} alt="" />
                  <span>بسته سفر</span>
                </li>
                <li>
                  <img className={style.iconeMenu} src={viza} alt="" />
                  <span>ویزا</span>
                </li>
                <li>
                  <img className={style.iconeMenu} src={bimeh} alt="" />
                  <span>بیمه مسافرتی</span>
                </li>
                <li>
                  <img className={style.iconeMenu} src={cpi} alt="" />
                  <span> CPI فرودگاه </span>
                </li>
              </ul>
            </div>
            <div className={style.formBox}>
              <SelectedFilter />
              <InfoTimeTravel />
            </div>
          </div>
        </div>

        <div className={style.travelBoxMobile}>
          <div className={style.tapMenuMobile}>
            <ul>
              <li>
                <img className={style.iconeMenu}  src={planet} alt="" />
                <span>هواپیما</span>
              </li>
              <li>
                <img className={style.iconeMenu} src={train} alt="" />
                <span>قطار</span>
              </li>
              <li>
                <img className={style.iconeMenu} src={basteh} alt="" />
                <span>بسته سفر</span>
              </li>
              <li>
                <img className={style.iconeMenu} src={viza} alt="" />
                <span>ویزا</span>
              </li>
              <li>
                <img className={style.iconeMenu} src={bimeh} alt="" />
                <span>بیمه مسافرتی</span>
              </li>
              <li>
                <img className={style.iconeMenu} src={cpi} alt="" />
                <span> CPI فرودگاه </span>
              </li>
            </ul>
          </div>
          <div className={style.formBox}>
            <SelectedFilter />
            <InfoTimeTravel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBox;
