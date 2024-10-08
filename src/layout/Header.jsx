import { MdAccountCircle, MdOutlineAirplaneTicket } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { GiSchoolBag } from "react-icons/gi";
import { LiaCoinsSolid } from "react-icons/lia";
import { BsLuggage, BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import loginIcone from "../assets/loginIcone.svg";
import { CiHome } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { GrServices } from "react-icons/gr";
function Header({ setShowLoginPage }) {
  const [login, setLogin] = useState(2);
  //super1
  //admin2
  //user3
  const [validity, setValidity] = useState(0);
  const [choose, setChoose] = useState(true);

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
                <Link>خدمات سفر</Link>
                <SlArrowDown size={15} />
                <div className={style.content}>
                  <Link className={style.item}>1خدمات سفر</Link>
                  <Link className={style.item}>2خدمات سفر</Link>
                  <Link className={style.item}>3خدمات سفر</Link>
                </div>
              </li>
              <li className={style.dropdown}>
                <Link>مرکز پشتیبانی</Link>
                <SlArrowDown size={15} />
                <div className={style.content}>
                  <Link className={style.item}>1مرکز پشتیبانی</Link>
                  <Link className={style.item}>2مرکز پشتیبانی</Link>
                  <Link className={style.item}>3مرکز پشتیبانی</Link>
                </div>
              </li>

              <li>
                <GiSchoolBag size={25} />
                <Link>سفر های من</Link>
              </li>
              <li>
                <LiaCoinsSolid size={27} />
                <Link>اعتبار : {validity} تومان</Link>
              </li>
            </ul>
          </div>

          {/*  menuTablet */}
          <div className={style.menuTablet}>
            <ul>
              <li className={style.dropdown}>
                <Link> پشتیبانی</Link>
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
                <Link>سفر های من</Link>
              </li>
              |
              <li>
                <LiaCoinsSolid size={27} />
                <Link>{validity} </Link>
              </li>
            </ul>
          </div>

          {login === 2 && (
            <>
              <Link to={"/admin"}>
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
                  <img src={loginIcone} />
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
                <img src={loginIcone} />
              </button>
            </>
          )}
        </header>
      </div>
      <div className={style.mobileContainer}>
        <div className={style.topMobile}>
          <img src={logo} alt="logo" className={style.logo} />
        </div>
        <div className={style.menuMobile}>
          <ul>
            <li>
              <Link to={"/"}>
                خانه
                <GoHome size={50} />
              </Link>
            </li>
            <li>
              <Link>
                خدمات
                <GrServices size={50} />
              </Link>
            </li>
            <li>
              <Link>
                سفر ها <BsLuggage size={50} />
              </Link>
            </li>
            <li>
              {login === 2 && (
                <Link to={"/admin"}>
                  حساب ادمین <BsPersonCircle size={50} />
                </Link>
              )}
              {login === 3 && (
                <Link to={"/"}>
                  حساب کاربری
                  <BsPersonCircle size={50} />
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

{
  /* <MdOutlineAirplaneTicket size={60} color="black" />
<BsPersonCircle size={40} color="black" /> */
}
