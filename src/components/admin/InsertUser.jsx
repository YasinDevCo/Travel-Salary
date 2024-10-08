import React from "react";
import style from "./InsertUser.module.css";
import importOne from "./../../assets/importOne.svg";
import importGroup from "./../../assets/importGroup.svg";

import { RiCloseLargeLine } from "react-icons/ri";
function InsertUser({setShowInsertUser,setShowNC}) {
  return (
    <>
      <div className={style.choose}>
        <span className={style.close}>
          <RiCloseLargeLine size={22} onClick={()=>setShowInsertUser(false)} />
          <div>
            <p>افزودن کابر جدید</p>
            <span>نوع افزودن را انتخاب کنید</span>
          </div>
        </span>

        <div>
          <button
           onClick={() => {
            setShowInsertUser(false)
            setShowNC(true)
           }}
          >
            افزودن تکی <img src={importOne} alt="Add Single" />
          </button>
          <button>
            افزودن گروهی <img src={importGroup} alt="Add Group" />
          </button>
        </div>
      </div>
    </>
  );
}

export default InsertUser;
