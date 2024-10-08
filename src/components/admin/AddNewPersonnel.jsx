import React, { useState } from "react";
import style from "./AddNewPersonnel.module.css";
import { RiCloseLargeLine } from "react-icons/ri";
import importOne from "./../../assets/importOne.svg";

// Import validation functions
import {
  validatePassword,
  validateUsername,
  validateNationalCode,
  validateName,
  validatePhoneNumber,
  validateBirthDate,
} from "./../../services/validation";

function AddNewPersonnel({ setShowNC, form, setForm }) {
  const {
    id,
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
    const usernameError = validateUsername(username);
    if (usernameError) newErrors.username = usernameError;
    const passwordError = validatePassword(currentPassword);
    if (passwordError) newErrors.currentPassword = passwordError;
    else if (currentPassword !== confirmPassword)
      newErrors.confirmPassword = "رمز عبور و تکرار رمز عبور مطابقت ندارند.";
    const nameError = validateName(name);
    if (nameError) newErrors.name = nameError;
    const familyError = validateName(family);
    if (familyError) newErrors.family = familyError;
    const nationalIdError = validateNationalCode(nationalId);
    if (nationalIdError) newErrors.nationalId = nationalIdError;
    const numberError = validatePhoneNumber(number);
    if (numberError) newErrors.number = numberError;

    // Validate birthDay
    // const birthDayError = validateBirthDate(form.birthDay);
    // if (birthDayError) newErrors.birthDay = birthDayError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addPersonnelHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid and ready to be submitted:", form);
      setShowNC(false);
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
    <div className={style.NewUserContent} >
      <form onSubmit={addPersonnelHandler} className={style.form}>
        <div className={style.top}>
          <span onClick={() => setShowNC(false)} style={{ cursor: "pointer" }}>
            <RiCloseLargeLine size={30} color="var(--main-text)" />
          </span>
          <div className={style.title}>
            <span>افزودن پرسنل جدید</span>
            <img src={importOne} alt="Import" />
          </div>
        </div>

        <div className={style.padForm}>
          <div className={style.item}>
            <h5>اطلاعات کاربری</h5>
            <div className={style.inputs}>
            <div>
            <input
                type="text"
                name="username"
                placeholder="نام کاربری"
                value={form.username}
                onChange={onChangeHandler}
              />
              {errors.username && (
                <p className={style.error}>{errors.username}</p>
              )}
            </div>
              <div className={style.passInput}>
                <div style={{width:"100%"}}>
                  <input
                    type="password"
                    name="currentPassword"
                    placeholder="رمز عبور"
                    value={form.currentPassword}
                    onChange={onChangeHandler}
                  />
                  {errors.currentPassword && (
                    <p className={style.error}>{errors.currentPassword}</p>
                  )}
                </div>
                <div style={{width:"100%"}}>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="تکرار رمز عبور"
                    value={form.confirmPassword}
                    onChange={onChangeHandler}
                  />
                  {errors.confirmPassword && (
                    <p className={style.error}>{errors.confirmPassword}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={style.item}>
            <h5>اطلاعات پرسنل</h5>
            <div className={style.inputs}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="نام"
                  value={form.name}
                  onChange={onChangeHandler}
                />
                {errors.name && <p className={style.error}>{errors.name}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="family"
                  placeholder="فامیل"
                  value={form.family}
                  onChange={onChangeHandler}
                />
                {errors.family && (
                  <p className={style.error}>{errors.family}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="nationalId"
                  placeholder="کد ملی"
                  value={form.nationalId}
                  onChange={onChangeHandler}
                />
                {errors.nationalId && (
                  <p className={style.error}>{errors.nationalId}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="number"
                  placeholder="شماره تماس"
                  value={form.number}
                  onChange={onChangeHandler}
                />
                {errors.number && (
                  <p className={style.error}>{errors.number}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="birthDay"
                  placeholder="تاریخ تولد"
                  value={form.birthDay}
                  onChange={onChangeHandler}
                />
                {errors.birthDay && (
                  <p className={style.error}>{errors.birthDay}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={style.btns}>
          <button type="submit">ذخیره</button>
          <button type="button" onClick={() => setShowNC(false)}>
            لغو
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewPersonnel;
