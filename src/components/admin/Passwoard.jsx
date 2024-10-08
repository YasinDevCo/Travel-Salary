import React, { useState } from "react";
import style from "./Passwoard.module.css";
function Passwoard({ setShowPass }) {

  return (
    <div className={style.passwoardContent} >
      <h4>اطلاعات کاربری</h4>
      <div >
        <input
          type="text"
          name="username"
          // value={userInfo.username}
          placeholder="نام کاربری"
        />
        <button onClick={() => setShowPass(true)}>ویرایش رمز عبور</button>
      </div>
    </div>
  );
}

export default Passwoard;
