import { useState } from "react";
import style from "./LoginRegister.module.css";
function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
  });

  const changeHandler = (event) => {
    console.log(event.target.name);
  };
  const submitHandler = () => {
    
  };
  return (
    <>
      <div className={style.form}>
        <div>
          <input
            type="radio"
            value="male"
            name="gender"
            id="male"
            onChange={changeHandler}
            checked={form.gender == "male"}
          />
          <label htmlFor="male">اقا</label>
          <input
            type="radio"
            value="female"
            name="gender"
            id="female"
            onChange={changeHandler}
            checked={form.gender == "female"}
          />
          <label htmlFor="female">خانم</label>
        </div>
        <div className={style.formItem}>
          <input
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="نام"
            value={form.name}
          />
          <input
            onChange={changeHandler}
            type="text"
            name="email"
            placeholder="ایمیل"
            value={form.email}
          />
        </div>
        <input
          onChange={changeHandler}
          type="password"
          name="passwoard"
          placeholder="پسورد"
          value={form.password}
        />
        <button onClick={submitHandler} type="submit">
          تایید عضویت
        </button>
      </div>
    </>
  );
}

export default Register;
