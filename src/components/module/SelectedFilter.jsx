import React, { useState } from "react";
import style from "./SelectedFilter.module.css";
import { CgChevronDown } from "react-icons/cg";

const SelectedFilter = () => {
  const [selectedOption, setSelectedOption] = useState("یک طرفه");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const clickHandler = () => {
    const newOption = selectedOption === "یک طرفه" ? "دو طرفه" : "یک طرفه";
    setSelectedOption(newOption);
    setIsOpen(false);
    console.log(newOption);
  };

  return (
    <div className={style.selectMenue}>
      <div className={style.selectBtn} onClick={toggleDropdown}>
        <span className={style.selectBtnText}>{selectedOption}</span>
        <CgChevronDown color="var(--text-color)" size={25} />
      </div>
      {isOpen && (
        <ul className={style.options}>
          <li className={style.option} onClick={clickHandler}>
            {selectedOption === "یک طرفه" ? "دو طرفه" : "یک طرفه"}
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectedFilter;
