class _baseModel {
  Data = "";
  Tkn = "";
  Coding = 0;
  Mode = 0;
  Ip = "";
  Mac = "";
  Browser = "";
}
class LoginUser extends _baseModel {
  UserName = "";
  Password = "";
  SmsCode = 0;
 Captcha = 0;
}

export { _baseModel, LoginUser };
