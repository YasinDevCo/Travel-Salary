import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./Register.module.css"; // به فایل CSS برای استایل نیاز دارید
import { Link } from "react-router-dom";
import {
  validateGender,
  validateName,
  validateNationalCode,
  validatePassword,
  validateUsername,
} from "../../services/validation";

// toast.configure(); // تنظیمات توست

function Register({
  step,
  setStep,
  username,
  setUsername,
  password,
  setPassword,
  name,
  setName,
  gender,
  setGender,
  nationalCode,
  setNationalCode,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    const validations = [
      { error: validateName(name), message: "nameError" },
      { error: validateUsername(username), message: "usernameError" },
      { error: validatePassword(password), message: "passwordError" },
      {
        error: validateNationalCode(nationalCode),
        message: "nationalCodeError",
      },
      { error: validateGender(gender), message: "genderError" },
    ];

    validations.forEach(({ error }) => {
      if (error) {
        toast.warning(error);
        isValid = false;
      }
    });
    if (!isValid) {
      return;
    }

    // post
    console.log({ name, username, password, gender });
    toast.success("ثبت‌نام با موفقیت انجام شد!");

    setName("");
    setUsername("");
    setPassword("");
    setGender("");
    setNationalCode("");
  };

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%",
          }}
        >
          <div className={style.itemInput}>
            <input
              style={{ width: "100%" }}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className={style.label}>نام </label>
          </div>

          <div className={style.itemInput}>
            <input
              style={{ width: "100%" }}
              ty  pe="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className={style.label}>نام کاربری </label>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%",
          }}
        >
          <div className={style.itemInput}>
            <input
              type="text"
              id="nationalId"
              value={nationalCode}
              onChange={(e) => setNationalCode(e.target.value)}
              required
            />
            <label className={style.label}>کدملی </label>
          </div>
          <div className={style.itemInput}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className={style.label}> رمز عبور </label>
          </div>
        </div>

        <div className={style.radio}>
          <label>جنسیت:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="مرد"
                checked={gender === "مرد"}
                onChange={(e) => setGender(e.target.value)}
              />
              مرد
            </label>{" "}
            <label>
              <input
                type="radio"
                name="gender"
                value="زن"
                checked={gender === "زن"}
                onChange={(e) => setGender(e.target.value)}
              />
              زن
            </label>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <button className="btnSub" style={{ width: "100%" }} type="submit">
            ثبت‌ نام
          </button>

          <span className={style.register}>
            قبلا ثبت نام کردید
            <Link
              style={{
                color: "var(--main-blue)",
                borderBottom: "1px solid var(--main-blue)",
              }}
              onClick={() => setStep(0)}
            >
              {" "}
              کلیک
            </Link>{" "}
            کنید
          </span>
        </div>
      </form>
    </div>
  );
}

export default Register;
