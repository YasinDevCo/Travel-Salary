import React, { useState } from "react";
import style from "./TravelBox.module.css";
import planet from "./../assets/icones/planet.svg";
import train from "./../assets/icones/train.svg";
import basteh from "./../assets/icones/bastehSafar.svg";
import viza from "./../assets/icones/viza.svg";
import bimeh from "./../assets/icones/bimeh.svg";
import cpi from "./../assets/icones/cpi.svg";
import SelectedFilter from "./module/SelectedFilter";
import InfoTimeTravel from "./search travel/InfoTimeTravel";

function TravelBox() {
  const [selectedTab, setSelectedTab] = useState("هواپیما");

  // محتوای مخصوص هر آیتم
  const renderContent = () => {
    switch (selectedTab) {
      case "هواپیما":
        return <p>محتوای مربوط به هواپیما</p>;
      case "قطار":
        return <p>محتوای مربوط به قطار</p>;
      case "بسته سفر":
        return <p>محتوای مربوط به بسته سفر</p>;
      case "ویزا":
        return <p>محتوای مربوط به ویزا</p>;
      case "بیمه مسافرتی":
        return <p>محتوای مربوط به بیمه مسافرتی</p>;
      case "CPI فرودگاه":
        return <p>محتوای مربوط به CPI فرودگاه</p>;
      default:
        return null;
    }
  };

  return (
    <div className={style.coll}>
      <div className={style.containerAll}>
        <div className={style.container}>
          <div className={style.travelBox}>
            <div className={style.tapMenu}>
              <ul>
                <li
                  onClick={() => setSelectedTab("هواپیما")}
                  className={selectedTab === "هواپیما" ? style.activeTab : ""}
                >
                  <img className={style.iconeMenu} src={planet} alt="" />
                  <span>هواپیما</span>
                </li>
                <li
                  onClick={() => setSelectedTab("قطار")}
                  className={selectedTab === "قطار" ? style.activeTab : ""}
                >
                  <img className={style.iconeMenu} src={train} alt="" />
                  <span>قطار</span>
                </li>
                <li
                  onClick={() => setSelectedTab("بسته سفر")}
                  className={selectedTab === "بسته سفر" ? style.activeTab : ""}
                >
                  <img className={style.iconeMenu} src={basteh} alt="" />
                  <span>بسته سفر</span>
                </li>
                <li
                  onClick={() => setSelectedTab("ویزا")}
                  className={selectedTab === "ویزا" ? style.activeTab : ""}
                >
                  <img className={style.iconeMenu} src={viza} alt="" />
                  <span>ویزا</span>
                </li>
                <li
                  onClick={() => setSelectedTab("بیمه مسافرتی")}
                  className={selectedTab === "بیمه مسافرتی" ? style.activeTab : ""}
                >
                  <img className={style.iconeMenu} src={bimeh} alt="" />
                  <span>بیمه مسافرتی</span>
                </li>
                <li
                  onClick={() => setSelectedTab("CPI فرودگاه")}
                  className={selectedTab === "CPI فرودگاه" ? style.activeTab : ""}
                >
                  <img className={style.iconeMenu} src={cpi} alt="" />
                  <span> CPI فرودگاه </span>
                </li>
              </ul>
            </div>

            <div className={style.formBox}>
            <SelectedFilter />
            <InfoTimeTravel />
              {renderContent()}
            </div>
          </div>
        </div>

        {/* نسخه موبایل */}
        <div className={style.travelBoxMobile}>
          <div className={style.tapMenuMobile}>
            <ul>
              <li
                onClick={() => setSelectedTab("هواپیما")}
                className={selectedTab === "هواپیما" ? style.activeTab : ""}
              >
                <img className={style.iconeMenu} src={planet} alt="" />
                <span>هواپیما</span>
              </li>
              <li
                onClick={() => setSelectedTab("قطار")}
                className={selectedTab === "قطار" ? style.activeTab : ""}
              >
                <img className={style.iconeMenu} src={train} alt="" />
                <span>قطار</span>
              </li>
              <li
                onClick={() => setSelectedTab("بسته سفر")}
                className={selectedTab === "بسته سفر" ? style.activeTab : ""}
              >
                <img className={style.iconeMenu} src={basteh} alt="" />
                <span>بسته سفر</span>
              </li>
              <li
                onClick={() => setSelectedTab("ویزا")}
                className={selectedTab === "ویزا" ? style.activeTab : ""}
              >
                <img className={style.iconeMenu} src={viza} alt="" />
                <span>ویزا</span>
              </li>
              <li
                onClick={() => setSelectedTab("بیمه مسافرتی")}
                className={selectedTab === "بیمه مسافرتی" ? style.activeTab : ""}
              >
                <img className={style.iconeMenu} src={bimeh} alt="" />
                <span>بیمه مسافرتی</span>
              </li>
              <li
                onClick={() => setSelectedTab("CPI فرودگاه")}
                className={selectedTab === "CPI فرودگاه" ? style.activeTab : ""}
              >
                <img className={style.iconeMenu} src={cpi} alt="" />
                <span> CPI فرودگاه </span>
              </li>
            </ul>
          </div>

          <div className={style.formBox}>
          <SelectedFilter />
          <InfoTimeTravel />
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBox;
