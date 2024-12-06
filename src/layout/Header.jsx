import { SlArrowDown } from "react-icons/sl";
import { GiSchoolBag } from "react-icons/gi";
import { LiaCoinsSolid } from "react-icons/lia";
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
  const [login, setLogin] = useState(2); // وضعیت ورود
  const [validity, setValidity] = useState(0); // اعتبار
  const location = useLocation(); // گرفتن URL فعلی
  const [selectedLink, setSelectedLink] = useState("home"); // لینک انتخاب‌شده

  // تغییر لینک انتخاب‌شده بر اساس URL فعلی
  useEffect(() => {
    const path = location.pathname;
    if (path === "/home") setSelectedLink("home");
    else if (path === "/home/services") setSelectedLink("services");
    else if (path === "/home/travels") setSelectedLink("travels");
    else if (path === "/home/admin") setSelectedLink("admin");
    else setSelectedLink("user");
  }, [location]);

  const showHandler = () => {
    setShowLoginPage(true);
    document.body.classList.add("no-scroll");
  };

  // تابع برای رندر محتوای label
  const renderLabel = (label) =>
    label.includes("<span") ? (
      <span dangerouslySetInnerHTML={{ __html: label }} />
    ) : (
      label
    );

  const menuItems = [
    {
      to: "home/services",
      label: "خدمات سفر",
      icon: <SlArrowDown size={15} />,
      subMenu: ["1خدمات سفر", "2خدمات سفر", "3خدمات سفر"],
    },
    {
      to: "home/",
      label: "پشتیبانی",
      icon: <SlArrowDown size={15} />,
      subMenu: ["1مرکز پشتیبانی", "2مرکز پشتیبانی", "3مرکز پشتیبانی"],
    },
    {
      to: "home/travels",
      label: "سفر های من",
      icon: <GiSchoolBag size={25} />,
    },
    {
      to: "home/",
      label: `<span class="${style.disNone}">اعتبار : </span>${validity} <span class="${style.disNone}">تومان</span>`,
      icon: <LiaCoinsSolid size={27} />,
    },
  ];

  return (
    <>
      {/* منوی دسکتاپ */}
      <div className={style.container}>
        <header className={style.header}>
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.menu}>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className={style.dropdown}>
                  <Link to={item.to}>{renderLabel(item.label)}</Link>
                  {item.icon}
                  {item.subMenu && (
                    <div className={style.content}>
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link key={subIndex} className={style.item}>
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* منوی تبلت */}
          <div className={style.menuTablet}>
            <ul>
              {menuItems.slice(1, 4).map((item, index) => (
                <li key={index} className={style.dropdown}>
                  <Link to={item.to}>{renderLabel(item.label)}</Link>
                  {item.icon}
                  {item.subMenu && (
                    <div className={style.content}>
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link key={subIndex} className={style.item}>
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* دکمه‌های ورود و پنل ادمین */}
          {login === 2 && (
            <Link to={"home/admin"}>
              <button className={style.btnAcount}>پنل ادمین</button>
              <button className={style.btnAcountIcone}>
                <img src={loginIcone} alt="Login Icon" />
              </button>
            </Link>
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

      {/* منوی موبایل */}
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
              {login === 2 && (
                <Link to={"/home/admin"}>
                  <img
                    src={selectedLink === "admin" ? accountBlue : account}
                    alt="Admin"
                  />
                </Link>
              )}
              {login === 3 && (
                <Link onClick={showHandler}>
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
