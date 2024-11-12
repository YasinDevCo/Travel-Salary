import { useState } from "react";
import style from "./CateRequest.module.css";
import iconeWhite from "./../../assets/icones/bastehSafarTow.svg";
import iconeBlack from "./../../assets/icones/bastehSafarBlackTow.svg";
import cate from "./../../assets/icones/cate.svg";

function CateRequest({ step, setStep }) {
  const [activeId, setActiveId] = useState(1); // تنظیم مقدار اولیه برای آیتم انتخاب شده

  const categories = [
    { id: 1, item: "1بسته سفر", icon: iconeBlack },
    { id: 2, item: "2بسته سفر", icon: iconeBlack },
    { id: 3, item: "3بسته سفر", icon: iconeBlack },
    { id: 4, item: "4بسته سفر", icon: iconeBlack },
    { id: 5, item: "5بسته سفر", icon: iconeBlack },
    { id: 6, item: "6بسته سفر", icon: iconeBlack },
  ];

  // تابعی برای تنظیم activeId و step
  const handleClick = (id) => {
    setActiveId(id); // به‌روزرسانی آیتم فعال
    setStep(id); // تنظیم step به id آیتم کلیک‌شده
  };

  return (
    <div className={style.category}>
      <div className={style.cate}>
        <img src={cate} alt="" />
        <h3>دسته بندی ها</h3>
      </div>

      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleClick(category.id)} // فراخوانی تابع handleClick با id آیتم
            className={activeId === category.id ? style.active : ""}
          >
            <img
              src={activeId === category.id ? iconeWhite : category.icon}
              alt=""
            />
            {category.item}
          </li>
        ))}
      </ul>     
    </div>
  );
}

export default CateRequest;
