import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./../SendUserName.module.css";
import { Link } from "react-router-dom";
import { validatePassword } from "../../../services/validation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // ایمپورت آیکون‌های چشم

function CheckPass({ setStep, password, setPassword }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // کنترل نمایش رمز عبور
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // کنترل نمایش تکرار رمز عبور

  const handleSubmit = async (event) => {
    event.preventDefault();

    const passwordError = validatePassword(password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("رمز عبور و تکرار آن یکسان نیستند.");
      return;
    }

    try {
      toast.success("رمز عبور با موفقیت ثبت شد!");
      setStep(0);
    } catch (error) {
      toast.error("خطایی در تغییر رمز عبور رخ داد.");
    }
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.itemInput}>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور جدید"
          />
          <span
            className={style.eyeIcon} // اضافه کردن کلاس `eyeIcon`
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        <div className={style.itemInput}>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="تکرار رمز عبور جدید"
          />
          <span
            className={style.eyeIcon} // اضافه کردن کلاس `eyeIcon`
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        <div style={{ width: "100%" }}>
          <button style={{ width: "100%" }} type="submit">
            ثبت رمز عبور
          </button>
          <div className={style.other}>
            <span className={style.register}>
              ورود با رمز یکبار مصرف{" "}
              <Link
                style={{
                  color: "var(--main-blue)",
                  borderBottom: "1px solid var(--main-blue)",
                }}
                onClick={() => setStep(2)}
              >
                کلیک{" "}
              </Link>
              کنید
            </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default CheckPass;
