import React, { useState } from "react";
import style from "./PersonnelManagement.module.css";
import SearchPersonnal from "./SearchPersonnal";
import PersonelList from "./PersonelList";
import AddNewPersonnel from "./AddNewPersonnel";
import AddNewGroupPersonnel from "./AddNewGroupPersonnel";
function PersonnelManagement() {
  const [showNC, setShowNC] = useState(false);
  const [showNCG, setshowNCG] = useState(false);
  const [form, setForm] = useState({
    name: "",
    family: "",
    number: "",
    nationalId: "",
    brithDay: null,
    username: "",
    currentPassword: "",
    confirmPassword: "",
  });
  const onDelete=()=>{}
  const onEdit=()=>{}
  return (
    <div className={style.content}>
      <h3>حساب مدیریتی</h3>
      <SearchPersonnal  />
      <PersonelList onEdit={onEdit} onDelete={onDelete} form={form} setForm={setForm} setShowNC={setShowNC} setshowNCG={setshowNCG} showNCG={showNCG} />
      {showNC && <AddNewPersonnel form={form} setForm={setForm} setShowNC={setShowNC} />}
      {showNCG && <AddNewGroupPersonnel form={form} setForm={setForm} setshowNCG={setshowNCG} />}
    </div>
  );
}

export default PersonnelManagement;
