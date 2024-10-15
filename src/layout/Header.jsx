import { SlArrowDown } from "react-icons/sl";
import { GiSchoolBag } from "react-icons/gi";
import { LiaCoinsSolid } from "react-icons/lia";
import { BsPersonCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./header.module.css";
import logo from "../assets/logo.png";
import loginIcone from "../assets/loginIcone.svg";
import home from "../assets/icones/home.svg";
import service from "../assets/icones/service.svg";
import travel from "../assets/icones/bagpack.svg";
import account from "../assets/icones/login.svg";
import homeBlue from "../assets/icones/homeBlue.svg";
import serviceBlue from "../assets/icones/serviceBlue.svg";
import travelBlue from "../assets/icones/bagpackBlue.svg";
import accountBlue from "../assets/icones/loginBlue.svg";

function Header({ setShowLoginPage }) {
  const [login, setLogin] = useState(3); // وضعیت ورود
  const [validity, setValidity] = useState(0); // اعتبار
  const location = useLocation(); // گرفتن URL فعلی
  const [selectedLink, setSelectedLink] = useState("home"); // لینک انتخاب‌شده

  // تغییر لینک انتخاب‌شده بر اساس URL فعلی
  useEffect(() => {
    
    const path = location.pathname;
    if (path === "/home") {
      setSelectedLink("home");
    } else if (path === "/home/services") {
      setSelectedLink("services");
    } else if (path === "/home/travels") {
      setSelectedLink("travels");
    } else if (path === "/home/admin") {
      setSelectedLink("admin");
    } else {
      setSelectedLink("user");
    }
  }, [location]);

  const showHandler = () => {
    setShowLoginPage(true);
  };

  return (
    <>
      <div className={style.container}>
        <header className={style.header}>
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.menu}>
            <ul>
              <li className={style.dropdown}>
                <Link to="home/services">خدمات سفر</Link>
                <SlArrowDown size={15} />
                <div className={style.content}>
                  <Link className={style.item}>1خدمات سفر</Link>
                  <Link className={style.item}>2خدمات سفر</Link>
                  <Link className={style.item}>3خدمات سفر</Link>
                </div>
              </li>
              <li className={style.dropdown}>
                <Link to="home/">مرکز پشتیبانی</Link>
                <SlArrowDown size={15} />
                <div className={style.content}>
                  <Link className={style.item}>1مرکز پشتیبانی</Link>
                  <Link className={style.item}>2مرکز پشتیبانی</Link>
                  <Link className={style.item}>3مرکز پشتیبانی</Link>
                </div>
              </li>

              <li>
                <GiSchoolBag size={25} />
                <Link to="home/travels">سفر های من</Link>
              </li>
              <li>
                <LiaCoinsSolid size={27} />
                <Link to="home/">اعتبار : {validity} تومان</Link>
              </li>
            </ul>
          </div>

          {/*  menuTablet */}
          <div className={style.menuTablet}>
            <ul>
              <li className={style.dropdown}>
                <Link to={"/home"}> پشتیبانی</Link>
                <SlArrowDown size={15} />
                <div className={style.content}>
                  <Link className={style.item}>1مرکز پشتیبانی</Link>
                  <Link className={style.item}>2مرکز پشتیبانی</Link>
                  <Link className={style.item}>3مرکز پشتیبانی</Link>
                </div>
              </li>
              |
              <li>
                <GiSchoolBag size={25} />
                <Link to={"/home/travels"}>سفر های من</Link>
              </li>
              |
              <li>
                <LiaCoinsSolid size={27} />
                <Link to={"/home"}>{validity} </Link>
              </li>
            </ul>
          </div>

          {login === 2 && (
            <>
              <Link to={"home/admin"}>
                <button
                  className={style.btnAcount}
                  style={{ cursor: "pointer" }}
                >
                  پنل ادمین
                </button>
                <button
                  className={style.btnAcountIcone}
                  style={{ cursor: "pointer" }}
                >
                  <img src={loginIcone} alt="Login Icon" />
                </button>
              </Link>
            </>
          )}
          {login === 3 && (
            <>
              <button onClick={showHandler} className={style.btnAcount}>
                ورود | ثبت نام
              </button>
              <button onClick={showHandler} className={style.btnAcountIcone}>
                <img src={loginIcone} alt="Login Icon" />
              </button>
            </>
          )}
        </header>
      </div>

      {/* منو موبایل */}
      <div className={style.mobileContainer}>
        <div className={style.topMobile}>
          <img src={logo} alt="logo" className={style.logo} />
        </div>
        <div className={style.menuMobile}>
          <ul>
            <li>
              <Link to={"/home"}>
                <img
                  src={selectedLink === "home" ? homeBlue : home}
                  alt="Home"
                />
              </Link>
            </li>
            <li>
              <Link to={"/home/services"}>
                <img
                  src={selectedLink === "services" ? serviceBlue : service}
                  alt="Services"
                />
              </Link>
            </li>
            <li>
              <Link to={"/home/travels"}>
                <img
                  src={selectedLink === "travels" ? travelBlue : travel}
                  alt="Travels"
                />
              </Link>
            </li>
            <li>
              {login === 1 && (
                <Link onClick={showHandler}>
                  <img
                    src={selectedLink === "admin" ? accountBlue : account}
                    alt="Admin"
                  />
                </Link>
              )}{" "}
              {login === 2 && (
                <Link to={"/home/admin"}>
                  <img
                    src={selectedLink === "admin" ? accountBlue : account}
                    alt="Admin"
                  />
                </Link>
              )}
              {login === 3 && (
                <Link to={"/home"}>
                  <img
                    src={selectedLink === "admin" ? accountBlue : account}
                    alt="Admin"
                  />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
