import api from "./../config/api";
import { LoginUser, RegisterUser } from "./dataClass";

const checkNumber = async (number) => {
  try {
    debugger;
    const data = new LoginUser();
    data.UserName = number;
    console.log("data", data);
    const response = await api.post(
      "identity/Authentication/",
      JSON.stringify(data)
    );
    return { response };
  } catch (error) {
    return { error };
  }
};
const checkPasswoard = async (password) => {
  try {
    debugger;
    const data = new LoginUser();
    data.Password = password;
    console.log("data", data);
    const response = await api.post(
      "identity/Authentication/",
      JSON.stringify(data)
    );
    return { response };
  } catch (error) {
    return { error };
  }
};
const checkOtp = async (userName, password, sms) => {
  try {
    debugger;
    const data = new LoginUser();
    data.UserName = userName;
    data.Password = password;
    data.SmsCode = sms;
    console.log("data", data);
    const response = await api.post(
      "identity/Authentication/",
      JSON.stringify(data)
    );
    return { response };
  } catch (error) {
    return { error };
  }
};

const sendInfoRegister = async (
  name,
  username,
  password,
  gender,
  nationalCode
) => {
  try {
    debugger;
    const data = new RegisterUser();
    data.UserName = username;
    data.Password = password;
    data.Name = name;
    data.Gender = gender;
    data.NationalCode = nationalCode;
    console.log("data", data);
    const response = await api.post(
      "identity/Authentication/registeruser",
      JSON.stringify(data)
    );
    return { response };
  } catch (error) {
    return { error };
  }
};

export { checkNumber, checkOtp, checkPasswoard, sendInfoRegister };
