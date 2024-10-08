import React, { useState } from "react";
import Navbar from "../components/admin/Navbar";
import ManagementAccount from "../components/admin/ManagementAccount";
import PersonnelManagement from "../components/admin/PersonnelManagement";
import style from "../styles/AdminPage.module.css";
import { ToastContainer } from "react-toastify";
function AdminPage() {
  const [page, setPage] = useState(0);
  const [form, setForm] = useState({
    name: "",
    family: "",
    number: "",
    nationalId: "",
    brithDay: null,
  });
  return (
    <div className={style.container} >
      <div className={style.adminPanel} >
        <Navbar setPage={setPage} page={page} />
        <div className={style.panelContent} >
          {page === 0 && <ManagementAccount form={form} setForm={setForm} />}
          {page === 1 && <PersonnelManagement />}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AdminPage;
