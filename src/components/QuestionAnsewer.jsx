import React, { useState } from "react";
import style from "./QuestionAnsewer.module.css";
import { BsQuestionCircle } from "react-icons/bs";
import { faqs } from "../constants/FAQs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import qi from "./../assets/qustionIcone.svg"
function QuestionAnswer() {
  const [activeIndex, setActiveIndex] = useState(null); // نگه‌داری id سوال فعال

  const toggleAccordion = (index) => {
    // اگر سوال فعال باشد، غیرفعال می‌کنیم، وگرنه فعال می‌کنیم
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
 <div className={style.container}>
       <div className={style.accordion} >
      {faqs.map((item, index) => (
        <div key={item.id} className={style.item}  onClick={() => toggleAccordion(index)}>
          <span className={style.iconeQuestion}>
           <img src={qi} alt="" />
          </span>
          <p className={style.text}>{item.question}</p>

          <span
            className={style.iconArrow}
           
          >
            {activeIndex === index ? (
              <SlArrowUp size={30} />
            ) : (
              <SlArrowDown size={30} />
            )}
          </span>
          {/* نمایش پاسخ بر اساس id سوال فعال */}
          <div
            className={`${style.hiddenBox} ${
              activeIndex === index ? style.active : ""
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
 </div>
  );
}

export default QuestionAnswer;

// <div className={style.container}>
//   <details className={style.box} name="question">
//     <summary className={style.title}>Question 1 <BiQuestionMark/></summary>
//     <p className={style.answer}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in
//       necessitatibus cupiditate nesciunt eveniet culpa, repellendus
//       voluptatibus id animi corrupti omnis recusandae maxime ipsa
//       reprehenderit qui porro non reiciendis consequuntur?
//     </p>
//   </details>
//   <details className={style.box} name="question">
//     <summary className={style.title}>Question 1</summary>
//     <p className={style.answer}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in
//       necessitatibus cupiditate nesciunt eveniet culpa, repellendus
//       voluptatibus id animi corrupti omnis recusandae maxime ipsa
//       reprehenderit qui porro non reiciendis consequuntur?
//     </p>
//   </details>{" "}
//   <details className={style.box} name="question">
//     <summary className={style.title}>Question 1</summary>
//     <p className={style.answer}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in
//       necessitatibus cupiditate nesciunt eveniet culpa, repellendus
//       voluptatibus id animi corrupti omnis recusandae maxime ipsa
//       reprehenderit qui porro non reiciendis consequuntur?
//     </p>
//   </details>{" "}
//   <details className={style.box} name="question">
//     <summary className={style.title}>Question 1</summary>
//     <p className={style.answer}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in
//       necessitatibus cupiditate nesciunt eveniet culpa, repellendus
//       voluptatibus id animi corrupti omnis recusandae maxime ipsa
//       reprehenderit qui porro non reiciendis consequuntur?
//     </p>
//   </details>{" "}
//   <details className={style.box} name="question">
//     <summary className={style.title}>Question 1</summary>
//     <p className={style.answer}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in
//       necessitatibus cupiditate nesciunt eveniet culpa, repellendus
//       voluptatibus id animi corrupti omnis recusandae maxime ipsa
//       reprehenderit qui porro non reiciendis consequuntur?
//     </p>
//   </details>
// </div>
