import React, { useState } from "react";
import style from "./PersonalInformation.module.css";
import {
  validateName,
  validateNationalCode,
  validatePhoneNumber,
  validateBirthDate,
} from "../../services/validation";
import { toast } from "react-toastify";

function PersonalInformation({ form, setForm }) {
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(form.name);
    const familyError = validateName(form.family);
    const nationalIdError = validateNationalCode(form.nationalId);
    const phoneError = validatePhoneNumber(form.number);
    const birthDateError = validateBirthDate(form.brithDay);

    setErrors({
      name: nameError,
      family: familyError,
      nationalId: nationalIdError,
      number: phoneError,
      // date: birthDateError,
    });

    if (
      !nameError &&
      !familyError &&
      !nationalIdError &&
      !phoneError
      // &&!birthDateError
    ) {
      console.log(form);
      toast.success("تغییرات با موفقیت انجام شد", { position: "top-center" });
    }
  };

  return (
    <div className={style.PIContent}>
      <h4>اطلاعات کاربری</h4>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.item}>
          <label htmlFor="name">نام</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>
        <div className={style.item}>
          <label htmlFor="family">نام خانوادگی</label>
          <input
            type="text"
            name="family"
            id="family"
            value={form.family}
            onChange={handleInputChange}
          />
          {errors.family && <p className={style.error}>{errors.family}</p>}
        </div>
        <div className={style.item}>
          <label htmlFor="nationalId">کدملی</label>
          <input
            type="text"
            name="nationalId"
            id="nationalId"
            value={form.nationalId}
            onChange={handleInputChange}
          />
          {errors.nationalId && (
            <p className={style.error}>{errors.nationalId}</p>
          )}
        </div>
        <div className={style.item}>
          <label htmlFor="number">شماره تماس</label>
          <input
            type="text"
            name="number"
            id="number"
            value={form.number}
            onChange={handleInputChange}
          />
          {errors.number && <p className={style.error}>{errors.number}</p>}
        </div>
        <div className={style.item}>
          <label htmlFor="date">تاریخ تولد</label>
          <input
            type="date"
            name="date"
            id="date"
            value={form.date}
            onChange={handleInputChange}
          />
          {errors.date && <p className={style.error}>{errors.date}</p>}
        </div>

        <div className={style.btnSave}>
          <button type="submit">ذخیره</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInformation;
