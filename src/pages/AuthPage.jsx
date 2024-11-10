import React, { useState } from "react";
import SendUserName from "../components/templates/SendUserName";
import CheckOtp from "../components/templates/auth/CheckOtp";
import CheckOtpChangePass from "../components/templates/auth/CheckOtpChangePass";
import { ToastContainer } from "react-toastify";
import style from "../styles/AuthPage.module.css";
import { RiCloseLargeLine } from "react-icons/ri";
import none from "./../assets/none.png";
import Register from "../components/templates/auth/Register";
import Checking from "../components/templates/auth/Checking";
import CheckPass from "../components/templates/auth/CheckPass";
import right from "./../assets/icones/arrow-right.svg";
import ChangePass from "../components/templates/auth/ChangePass";
function AuthPage({ setShowLoginPage }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [gender, setGender] = useState("");
  const [timer, setTimer] = useState(60);
  const [role, setRole] = useState("3");
  //1->ADMN
  //2->superVizer
  //3->user
  //SMS
  const [SmsCode, setSmsCode] = useState(new Array(6).fill(""));
  const maskNumber = number.replace(/(\d{2})\d{5}(\d{4})/, "$1*****$2");
  console.log(maskNumber);

  return (
    <div className={style.container}>
      <div className={style.contentIn}>
        <div className={style.content}>
          {step == 0 && <h1 className={style.title}>عضویت یا ورود </h1>}

          {step == 1 && (
            <h1 className={style.title}>
              <button
                className={style.btnArrowRight}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                <img src={right} />
              </button>
              رمز عبور خود را وارد کنید{" "}
            </h1>
          )}
          {step == 2 && (
            <h1 className={style.title}>
              {" "}
              <button
                className={style.btnArrowRight}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                <img src={right} />
              </button>
              کد تایید را وارد کنید
            </h1>
          )}
          {step == 3 && (
            <h1 className={style.title}>
              <button
                className={style.btnArrowRight}
                onClick={() => {
                  setStep(0);
                }}
              >
                <img src={right} />
              </button>
              عضویت{" "}
            </h1>
          )}
          {step == 4 && (
            <h1 className={style.title}>
              <button
                className={style.btnArrowRight}
                onClick={() => {
                  setStep(1);
                }}
              >
                <img src={right} />
              </button>
              تغیر رمز
            </h1>
          )}
          {step === 2 && (
            <h3 className={style.sendCode}>
              کد به شماره ({maskNumber}) ارسال شده است <span>ویرایش</span>
            </h3>
          )}
          {step === 1 && (
            <h3 className={style.sendCode}>
              شماره ({maskNumber}) <span>ویرایش</span>
            </h3>
          )}
          {step === 4 && (
            <h3 className={style.sendCode}>
              شماره ({maskNumber}) <span>ویرایش</span>
            </h3>
          )}
          <div className={style.form}>
            {step === 0 && (
              <Checking
                number={number}
                step={step}
                setStep={setStep}
                setNumber={setNumber}
              />
            )}
            {step === 1 && <CheckPass setStep={setStep} password={password} />}
            {step === 2 && (
              <CheckOtp
                step={step}
                setStep={setStep}
                SmsCode={SmsCode}
                setSmsCode={setSmsCode}
                password={password}
                username={username}
                timer={timer}
                setShowLoginPage={setShowLoginPage}
                role={role}
              />
            )}
            {step === 3 && (
              <Register
                step={step}
                setStep={setStep}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                name={name}
                setName={setName}
                gender={gender}
                setGender={setGender}
                nationalCode={nationalCode}
                setNationalCode={setNationalCode}
              />
            )}
            {step === 4 && (
              <CheckOtpChangePass
                step={step}
                setStep={setStep}
                SmsCode={SmsCode}
                setSmsCode={setSmsCode}
                password={password}
                username={username}
                timer={timer}
                setShowLoginPage={setShowLoginPage}
                role={role}
              />
            )}
            {step === 5 && (
              <ChangePass
                step={step}
                setStep={setStep}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                name={name}
                setName={setName}
                gender={gender}
                setGender={setGender}
                nationalCode={nationalCode}
                setNationalCode={setNationalCode}
              />
            )}{" "}
            {step === 1 || step === 0 || step === 3 || step === 2 ? (
              <div className={style.step}>
                <span
                  style={{
                    backgroundColor: `${
                      step === 0 ? "var(--main-blue)" : "var(--main-white)"
                    }`,
                  }}
                ></span>
                <span
                  style={{
                    backgroundColor: `${
                      step === 1 || step === 3 || step === 2
                        ? "var(--main-blue)"
                        : "var(--main-white)"
                    }`,
                  }}
                ></span>
              </div>
            ) : null}
          </div>
          <div className={style.image}>
            <img src={none} alt="" />
          </div>

          <span
            className={style.close}
            onClick={() => {
              setShowLoginPage(false);
              document.body.classList.remove("no-scroll");
            }}
          >
            <RiCloseLargeLine size={30} />
          </span>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AuthPage;
