import style from "./SubmitRequest.module.css";
import { useState } from "react";
import arrowIcon from "../../assets/icones/angle-small-down.svg"; // Import as image
import cate from "./../../assets/icones/submitMessage.svg";

function SubmitRequest({ step }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("نوع درخواست");
  const [description, setDescription] = useState("");

  const options = ["درخواست ۱", "درخواست ۲", "درخواست ۳"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      alert("لطفاً شرح درخواست را وارد کنید.");
      return;
    }
    // انجام عملیات ارسال فرم
    setSelectedOption("نوع درخواست");
    setDescription("");
    console.log("درخواست ارسال شد:", selectedOption, description);
  };

  const handleCancel = () => {
    setSelectedOption("نوع درخواست");
    setDescription("");
  };

  return (
    <div className={style.content}>
      <div className={style.cate}>
        <img src={cate} alt="Submit Icon" />
        <h3> ثبت در خواست {step}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style.dropdown}>
          <div className={style.dropdownHeader} onClick={toggleDropdown}>
            <span>{selectedOption}</span>
            <img
              src={arrowIcon}
              alt="Arrow Icon"
              className={`${style.arrowIcon} ${isOpen ? style.open : ""}`}
            />
          </div>
          {isOpen && (
            <ul className={style.dropdownList}>
              {options.map((option, index) => (
                <li
                  key={index}
                  className={style.dropdownItem}
                  onClick={() => selectOption(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={style.descriptionContainer}>
          <textarea
            className={style.textarea}
            placeholder="شرح درخواست"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={style.btns}>
          <button className={style.btnSubmit} type="submit">
            ثبت درخواست
          </button>
          <button
            className={style.btnExit}
            type="button"
            onClick={handleCancel}
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubmitRequest;
