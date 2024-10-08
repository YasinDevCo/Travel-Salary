import React, { useState } from "react";
import style from "./PersonnelManagement.module.css";
import SearchPersonnal from "./SearchPersonnal";
import PersonelList from "./PersonelList";
import AddNewPersonnel from "./AddNewPersonnel";
function PersonnelManagement() {
  const [showNC, setShowNC] = useState(false);
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
      <PersonelList onEdit={onEdit} onDelete={onDelete} form={form} setForm={setForm} setShowNC={setShowNC} />
      {showNC && <AddNewPersonnel form={form} setForm={setForm} setShowNC={setShowNC} />}
    </div>
  );
}

export default PersonnelManagement;
