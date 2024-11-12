import React, { useState } from "react";
import style from "./Navbar.module.css";
import icone1 from "./../../assets/icones/icone1.svg";
import icone2 from "./../../assets/icones/3users.svg";
// import icone3 from "./../../assets/icones/";
import { CiMenuFries } from "react-icons/ci";
const menuItems = [
  { id: 1, label: "حساب مدیریتی", icon: icone1 },
  { id: 2, label: "مدیریت پرسنل", icon: icone2 },
  { id: 3, label: "درخواست پشتیبانی آنلاین", icon: icone1 },
  { id: 4, label: "منوی تست4", icon: icone1 },
  { id: 5, label: "منوی تست5", icon: icone1 },
  { id: 6, label: "منوی تست6", icon: icone1 },
  { id: 7, label: "منوی تست7", icon: icone1 },
  { id: 8, label: "منوی تست8", icon: icone1 },
  { id: 9, label: "منوی تست9", icon: icone1 },
];
function Navbar({ page, setPage }) {
  const [activePage, setActivePage] = useState(page);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleClick = (index) => {
    setActivePage(index);
    setPage(index);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className={style.navbar}>
        {menuItems.map((i) => (
          <div
            key={i.id}
            onClick={() => handleClick(i.id)}
            className={`${style.item} ${
              activePage === i.id ? style.active : ""
            }`}
          >
            <img src={i.icon} />
            <span>{i.label}</span>
          </div>
        ))}
      </div>

      <div
        className={`${style.blur} ${isMobileMenuOpen ? style.showBlur : ""}`}
      >
        <div style={{ position: "fixed" }}>
          <button className={style.btnMenu} onClick={toggleMobileMenu}>
            <CiMenuFries size={42} />
          </button>
          <div
            className={`${style.navbarMobile} ${
              isMobileMenuOpen ? style.show : ""
            }`}
          >
            {menuItems.map((i) => (
              <div
                key={i.id}
                onClick={() => {
                  handleClick(i.id);
                  toggleMobileMenu(false);
                }}
                className={`${style.item} ${
                  activePage === i.id ? style.active : ""
                }`}
              >
                <img src={i.icon} alt="" />
                <span> {i.label}</span>
              </div>
            ))}
            <span className={style.navbarBtn}></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
