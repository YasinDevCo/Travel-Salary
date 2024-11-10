import React, { useRef } from "react";
import style from "./../CheckOtp.module.css";
import { handleInput } from "./../../../helpers/inputs";
import { checkOtp } from "../../../services/auth";
import { setSections } from "useref/lib/buildBlockManager";

function CheckOtp({

  timer,
  setShowLoginPage,
  username,
  password,
  SmsCode,
  setSmsCode,
  role,
}) {
  const inputRefs = useRef([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    debugger;
    const sms = SmsCode.join("");
    if (sms.length !== 5) {
      console.log(otpString)
    };

    const { response, error } = await checkOtp(username, password, sms);
    if (response.data.data.tkn ?? "" !== "") {
      toast.success("ورود با موفقیت انجام شد", {
        position: "top-center",
      });

      setSections(response.data);
      refetch();
      console.log("OTP Code: ", otpString);
      setShowLoginPage(false);
      navigate("/");
    }
    if (error) {
      toast.error("کد یا شماره موبایل نا معتیر", { position: "top-center" });
    }
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.itemInputs}>
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              autoFocus={index === 0}
              ref={(el) => (inputRefs.current[index] = el)}
              onInput={(e) =>
                handleInput(e, index, SmsCode, setSmsCode, inputRefs)
              }
              className={style.input}
            />
          ))}
        </div>

        <div style={{ width: "100%" }}>
          <span className={style.timer}>{timer} دیگر ارسال میشود</span>
          <button
            className={style.btnLog}
            style={{ width: "100%" }}
            type="submit"
          >
            تایید کد
          </button>
        </div>
      </form>
    </>
  );
}

export default CheckOtp;
