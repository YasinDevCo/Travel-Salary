import React, { useState } from "react";
import style from "./NavFilter.module.css";
import { SlArrowDown } from "react-icons/sl";

function NavFilter() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className={style.sidebar}>
      <div className={style.title}>
        <p>فیلتر ها</p>
        <span>نمایش نتیجه</span>
      </div>
      <ul className={style.menu}>
        {[
          {
            title: "ساعت حرکت",
            items: [<input type="time" placeholder="Enter time" />],
          },
          { title: "بازه قیمتی", items: ["100-200", "200-300", "300-400"] },
          { title: "کلاس پروازی", items: ["اقتصادی", "فرست کلاس", "بیزینس"] },
          { title: "تعداد توقف", items: ["بدون توقف", "یک توقف", "دو توقف"] },
          { title: "شرکت هواپیمایی", items: ["شرکت 1", "شرکت 2", "شرکت 3"] },
        ].map((menu, index) => (
          <li key={index} className={style.menuItem}>
            <span>
              {menu.title}

              <SlArrowDown
                style={{ cursor: "pointer" }}
                onClick={() => toggleDropdown(index)}
              />
            </span>
            {openDropdown === index && (
              <ul
                className={`${style.dropdownMenu} ${
                  openDropdown === index ? style.open : ""
                }`}
              >
                {menu.items.map((item, i) => (
                  <li key={i} className={style.dropdownItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavFilter;
