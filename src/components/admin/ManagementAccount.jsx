import React, { useState } from "react";
import style from "./ManagementAccount.module.css";
import Passwoard from "./Passwoard";
import PersonalInformation from "./PersonalInformation";
import PasswoardChange from "./PasswoardChange";
function ManagementAccount({ form, setForm }) {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={style.content} >
      <div className={style.topContent}>
        <h3>حساب مدیریتی</h3>
        <button>خروج از حساب</button>
      </div>
      {showPass && <PasswoardChange setShowPass={setShowPass} />}
      <Passwoard setShowPass={setShowPass} />
      <PersonalInformation form={form} setForm={setForm} />
    </div>
  );
}

export default ManagementAccount;
