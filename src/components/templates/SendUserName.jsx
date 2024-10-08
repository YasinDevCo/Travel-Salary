import React from "react";
import { useMutation } from "react-query";
import { checkUserNamePassword } from "../../services/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./SendUserName.module.css";
import { Link } from "react-router-dom";
import { validateUsername, validatePassword } from "../../services/validation"; // وارد کردن توابع اعتبارسنجی

function SendUserName({
  setStep,
  username,
  setUsername,
  password,
  setPassword,
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;

    const usernameError = validateUsername(username);
    if (usernameError) {
      toast.warning(usernameError);
      isValid = false;
    }
    const passwordError = validatePassword(password);
    if (passwordError) {
      toast.warning(passwordError);
      isValid = false;
    }
    if (!isValid) {
      return;
    }
    try {
      const { response, error } = await checkUserNamePassword(
        username,
        password
      );

      if (response.data.data.Result==="@1") {
        setStep(1);
        console.log("ورود موفقیت‌آمیز بود.",response.data.data.Result);
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
      <form className={style.form} onSubmit={handleSubmit} >
        <div className={style.itemInput}>
          <input
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className={style.label}>نام کاربری</label>
        </div>
        <div className={style.itemInput}>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={style.label}>رمز عبور</label>
        </div>

        <div style={{ width: "100%" }}>
          <button style={{ width: "100%" }} type="submit">
            وارد شوید
          </button>
          <div className={style.other}>
            <span className={style.register}>
              ثبت نام نکردید
              <Link
                style={{
                  color: "var(--main-blue)",
                  borderBottom: "1px solid var(--main-blue)",
                }}
                onClick={() => setStep(2)}
              >
                {" "}
                کلیک
              </Link>{" "}
              کنید
            </span>
            <Link className={style.forgot}>فراموشی رمز عبور</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SendUserName;
