import React, { useState } from "react";
import style from "./AddNewGroupPersonnel.module.css";
import { RiCloseLargeLine } from "react-icons/ri";
import importOne from "./../../assets/importOne.svg";
import none from "./../../assets/none.png";
// Import validation functions
import {
  validatePassword,
  validateUsername,
  validateNationalCode,
  validateName,
  validatePhoneNumber,
  validateBirthDate,
} from "../../services/validation";

function AddNewGroupPersonnel({ setshowNCG, form, setForm }) {
  const {
    name,
    family,
    number,
    nationalId,
    birthDay,
    username,
    currentPassword,
    confirmPassword,
  } = form;

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!validateName(name)) {
      newErrors.name = "نام معتبر وارد کنید";
    }

    if (!validateName(family)) {
      newErrors.family = "نام خانوادگی معتبر وارد کنید";
    }

    if (!validatePhoneNumber(number)) {
      newErrors.number = "شماره تلفن معتبر وارد کنید";
    }

    if (!validateNationalCode(nationalId)) {
      newErrors.nationalId = "کد ملی معتبر وارد کنید";
    }

    if (!validateBirthDate(birthDay)) {
      newErrors.birthDay = "تاریخ تولد معتبر وارد کنید";
    }

    if (!validateUsername(username)) {
      newErrors.username = "نام کاربری معتبر وارد کنید";
    }

    if (!validatePassword(currentPassword)) {
      newErrors.currentPassword = "رمز عبور باید حداقل 8 کاراکتر باشد";
    }

    if (currentPassword !== confirmPassword) {
      newErrors.confirmPassword = "رمز عبور و تایید رمز عبور یکسان نیستند";
    }

    setErrors(newErrors);

    // If no errors, return true; otherwise, false
    return Object.keys(newErrors).length === 0;
  };

  const addPersonnelHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid and ready to be submitted:", form);
      setshowNCG(false);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className={style.NewUserContent}>
      <form onSubmit={addPersonnelHandler} className={style.form}>
        <div className={style.top}>
          <span onClick={() => setshowNCG(false)} style={{ cursor: "pointer" }}>
            <RiCloseLargeLine size={30} color="var(--main-text)" />
          </span>
          <div className={style.title}>
            <span>فرمت افزودن پرسنل گروهی</span>
            <img src={importOne} alt="Import" />
          </div>
        </div>

        <div className={style.padForm}>
          <div className={style.right}>
            <div className={style.title}>
              <h3>فرمت فایل خود را انتخاب کنید </h3>
              <p>
                مرتب و مشخص کنید کدام ستون از فایل شما به کدام داده اختصاص دارد{" "}
              </p>
            </div>
            <div className={style.formInputs}>
              <div className={style.input}>
                <span>ستون اول </span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChangeHandler}
                  placeholder="نام"
                />
                {errors.name && <span className={style.error}>{errors.name}</span>}
              </div>
              <div className={style.input}>
                <span>ستون دوم </span>
                <input
                  type="text"
                  name="family"
                  value={family}
                  onChange={onChangeHandler}
                  placeholder="نام خانوادگی"
                />
                {errors.family && <span className={style.error}>{errors.family}</span>}
              </div>
              <div className={style.input}>
                <span>ستون سوم </span>
                <input
                  type="text"
                  name="number"
                  value={number}
                  onChange={onChangeHandler}
                  placeholder="شماره تلفن"
                />
                {errors.number && <span className={style.error}>{errors.number}</span>}
              </div>
              <div className={style.input}>
                <span>ستون چهارم </span>
                <input
                  type="text"
                  name="nationalId"
                  value={nationalId}
                  onChange={onChangeHandler}
                  placeholder="کد ملی"
                />
                {errors.nationalId && <span className={style.error}>{errors.nationalId}</span>}
              </div>
              <div className={style.input}>
                <span>ستون پنجم </span>
                <input
                  type="text"
                  name="birthDay"
                  value={birthDay}
                  onChange={onChangeHandler}
                  placeholder="تاریخ تولد"
                />
                {errors.birthDay && <span className={style.error}>{errors.birthDay}</span>}
              </div>
            </div>
          </div>
          <div className={style.left}>
            <div className={style.title}>
              <h3>پیشنمایش فایل آپلود شده</h3>
              <p>برای دقت در انتخاب می توانید به پیشنمایش دقت کنید .</p>
            </div>
            <div className={style.uploadFile}>
              <img src={none} alt="" />
            </div>
          </div>
        </div>
<div>
  <p>ارسال خودکار نام کاربری و رمز عبور برای کابران افزوده شده </p>
</div>
        <div className={style.btns}>
          <button type="submit">ذخیره</button>
          <button type="button" onClick={() => setshowNCG(false)}>
            لغو
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewGroupPersonnel;
