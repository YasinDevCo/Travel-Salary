import React, { useState } from "react";
import SendUserName from "../components/templates/SendUserName";
import CheckOtp from "../components/templates/CheckOtp";
import { ToastContainer } from "react-toastify";
import style from "../styles/AuthPage.module.css";
import { RiCloseLargeLine } from "react-icons/ri";
import none from "./../assets/none.png";
import Register from "../components/templates/Register";
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
  return (
    <div className={style.container}>
      <div className={style.contentIn}>
        <div className={style.content}>
          {step === 1 || step === 0 ? (
            <h1 className={style.title}>ورود</h1>
          ) : (
            <h1 className={style.title}>ثبت نام</h1>
          )}
          {step === 1 && (
            <h3 className={style.sendCode}>
              کد به شماره ({number}) ارسال شده است | <span>ویرایش</span>
            </h3>
          )}
          <div className={style.form}>
            {step === 0 && (
              <SendUserName
                step={step}
                setStep={setStep}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            )}
            {step === 1 && (
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
            {step === 2 && (
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
            {step === 1 || step === 0 ? (
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
                      step === 1 ? "var(--main-blue)" : "var(--main-white)"
                    }`,
                  }}
                ></span>
              </div>
            ) : null}
          </div>
          <div className={style.image}>
            <img src={none} alt="" />
          </div>

          <span className={style.close} onClick={() => setShowLoginPage(false)}>
            <RiCloseLargeLine size={30} />
          </span>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AuthPage;
