import React, { useState } from "react";
import style from "./TravelBox.module.css";
import planet from "./../assets/icones/planet.svg";
import train from "./../assets/icones/train.svg";
import basteh from "./../assets/icones/bastehSafar.svg";
import viza from "./../assets/icones/viza.svg";
import bimeh from "./../assets/icones/bimeh.svg";
import cpi from "./../assets/icones/cpi.svg";
import planetBlue from "./../assets/icones/planetBlue.svg";
import trainBlue from "./../assets/icones/trainBlue.svg";
import bastehBlue from "./../assets/icones/bastehSafarBlue.svg";
import vizaBlue from "./../assets/icones/vizaBlue.svg";
import bimehBlue from "./../assets/icones/bimehBlue.svg";
import cpiBlue from "./../assets/icones/cpiBlue.svg";
import SelectedFilter from "./module/SelectedFilter";
import InfoTimeTravel from "./search travel/InfoTimeTravel";

const travelOptions = [
  { label: "هواپیما", icon: planet, activeIcon: planetBlue },
  { label: "قطار", icon: train, activeIcon: trainBlue },
  { label: "بسته سفر", icon: basteh, activeIcon: bastehBlue },
  { label: "ویزا", icon: viza, activeIcon: vizaBlue },
  { label: "بیمه مسافرتی", icon: bimeh, activeIcon: bimehBlue },
  { label: "CPI فرودگاه", icon: cpi, activeIcon: cpiBlue },
];

function TravelBox() {
  const [selectedTab, setSelectedTab] = useState("هواپیما");

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
                {travelOptions.map(option => (
                  <li
                    key={option.label}
                    onClick={() => setSelectedTab(option.label)}
                    className={selectedTab === option.label ? style.activeTab : ""}
                  >
                    <img
                      className={style.iconeMenu}
                      src={selectedTab === option.label ? option.activeIcon : option.icon}
                      alt={option.label}
                    />
                    <span>{option.label}</span>
                  </li>
                ))}
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
              {travelOptions.map(option => (
                <li
                  key={option.label}
                  onClick={() => setSelectedTab(option.label)}
                  className={selectedTab === option.label ? style.activeTab : ""}
                >
                  <img
                    className={style.iconeMenu}
                    src={selectedTab === option.label ? option.activeIcon : option.icon}
                    alt={option.label}
                  />
                  <span>{option.label}</span>
                </li>
              ))}
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
