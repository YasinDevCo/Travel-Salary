import api from "./../config/api";
import { LoginUser } from "./dataClass";

const checkUserNamePassword = async (userName, password) => {
  try {
    debugger;
    const data = new LoginUser();
    data.UserName = userName;
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

export { checkUserNamePassword, checkOtp };
