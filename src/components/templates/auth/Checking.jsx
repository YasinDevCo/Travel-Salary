import React from "react";
import { useMutation } from "react-query";
import { checkUserNamePassword, checkUserNumber } from "../../../services/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../SendUserName.module.css";
import { Link } from "react-router-dom";
import {
  validateUsername,
  validatePassword,
  validatePhoneNumber,
} from "../../../services/validation"; // وارد کردن توابع اعتبارسنجی

function Checking({ setStep, number, setNumber }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;

    const numberError = validatePhoneNumber(number);
    if (numberError) {
      toast.warning(numberError);
      isValid = false;
    }
    if (!isValid) {
      return;
    } else {
      if (number == "09913445586") {
        setStep(1);
      } else {
        setStep(3);
      }
    }
    try {
      const { response, error } = await checkUserNumber(number);

      if (response.data.data.Result === "@1") {
        setStep(1);
        console.log("ورود موفقیت‌آمیز بود.", response.data.data.Result);
      } else if (error) {
        console.log("خطا در ورود:", error);
        toast.error("ورود ناموفق. لطفاً دوباره تلاش کنید.");
      } else {
        console.log("شرایط غیرمنتظره.");
      }
    } catch (error) {
      console.error("خطا در برقراری ارتباط با سرور:", error);
      toast.error("خطا در برقراری ارتباط با سرور. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <p className={style.title}>
          لطفاً شماره تلفن همراه یا ایمیل خود را وارد کنید.
        </p>
        <div className={style.itemInput}>
          <input
            required
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="شماره تلفن / ایمیل"
          />
        </div>

        <div style={{ width: "100%" }}>
          <button style={{ width: "100%" }} type="submit">
            وارد شوید
          </button>
        </div>
      </form>
    </>
  );
}

export default Checking;
