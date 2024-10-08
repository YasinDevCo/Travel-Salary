import React, { useState } from "react";
import style from "./PasswoardChange.module.css";
import { RiCloseLargeLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  validatePassword,
  validateUsername,
} from "../../services/validation"; // اعتبارسنجی‌ها را ایمپورت کنید
import { toast } from "react-toastify";

const InputField = ({ value, onChange, placeholder, name }) => (
  <div className={style.inputContainer}>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

const PasswordField = ({
  value,
  onChange,
  placeholder,
  showPassword,
  togglePasswordVisibility,
  name,
}) => (
  <div className={style.inputContainer}>
    <input
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
    <span onClick={togglePasswordVisibility}>
      {showPassword ? (
        <AiOutlineEyeInvisible size={20} />
      ) : (
        <AiOutlineEye size={20} />
      )}
    </span>
  </div>
);

function PasswoardChange({ setShowPass }) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const clickHandler = (e) => {
    e.preventDefault();

    const usernameError = validateUsername(userInfo.username);
    const passwordError = validatePassword(userInfo.newPassword);

    // تطبیق رمز عبور جدید و تأیید آن
    const confirmPasswordError =
      userInfo.newPassword !== userInfo.confirmPassword
        ? "رمزهای عبور جدید و تأیید مطابقت ندارند!"
        : null;

    setErrorMessage({
      username: usernameError,
      newPassword: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (!usernameError && !passwordError && !confirmPasswordError) {
      toast.success("رمز عبور و نام کاربری با موفقیت تغییر یافت!",{position:"top-center"});
      setShowPass(false);
      console.log(userInfo);
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <div className={style.changeContent}>
      <form className={style.form} onSubmit={clickHandler}>
        <div className={style.top}>
          <span onClick={() => setShowPass(false)}>
            <RiCloseLargeLine size={30} color="var(--main-text)" />
          </span>
          <h4>تغییر نام کاربری و رمز عبور</h4>
        </div>
        <div className={style.content}>
          <InputField
            value={userInfo.username}
            onChange={handleInputChange}
            name="username"
            placeholder="نام کاربری جدید"
          />
          {errorMessage.username && <p className={style.error}>{errorMessage.username}</p>}
          
          <PasswordField
            value={userInfo.currentPassword}
            onChange={handleInputChange}
            name="currentPassword"
            placeholder="رمز عبور فعلی"
            showPassword={showPassword.showCurrentPassword}
            togglePasswordVisibility={() =>
              togglePasswordVisibility("showCurrentPassword")
            }
          />
          <PasswordField
            value={userInfo.newPassword}
            onChange={handleInputChange}
            name="newPassword"
            placeholder="رمز عبور جدید"
            showPassword={showPassword.showNewPassword}
            togglePasswordVisibility={() =>
              togglePasswordVisibility("showNewPassword")
            }
          />
          {errorMessage.newPassword && <p className={style.error}>{errorMessage.newPassword}</p>}
          
          <PasswordField
            value={userInfo.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
            placeholder="تأیید رمز عبور جدید"
            showPassword={showPassword.showConfirmPassword}
            togglePasswordVisibility={() =>
              togglePasswordVisibility("showConfirmPassword")
            }
          />
          {errorMessage.confirmPassword && <p className={style.error}>{errorMessage.confirmPassword}</p>}
          
          <button type="submit">ذخیره</button>
        </div>
      </form>
    </div>
  );
}

export default PasswoardChange;
