import React from "react";
import NavFilter from "../components/search travel/NavFilter";
import InfoTimeTravel from "../components/search travel/InfoTimeTravel";
import style from "./../styles/SearchTravelPage.module.css";
import MainSearch from "../components/search travel/MainSearch";
import TimeBox from "../components/search travel/TimeBox";
function SearchTravelPage() {
  return (
   <div className={style.container}>
     <div className={style.searchTravel}>
      <div className={style.infoTimeTravel}>
        <InfoTimeTravel />
      </div>
      <div className={style.main}>
        <NavFilter />
        <div className={style.mainIn}>
        <TimeBox/>
        <MainSearch />
        </div>
      </div>
    </div>
   </div>
  );
}

export default SearchTravelPage;
