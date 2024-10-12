import React from "react";
import style from "./Comments.module.css";
import coma from "./../assets/coma.svg";
import avatar1 from "./../assets/avatar1.jpg";
import avatar2 from "./../assets/avatar2.jpg";
import avatar3 from "./../assets/avatar3.jpg";
import avatar4 from "./../assets/avatar4.jpg";

const comments = [
  {
    id: 1,
    name: "علی رضایی",
    comment: "سرویس بسیار خوبی بود. راننده به موقع رسید و سفر راحتی داشتیم.",
    avatar: avatar1,
  },
//   {
//     id: 2,
//     name: "ندا محمدی",
//     comment:
//       "کیفیت خدمات عالی بود، اما کمی تأخیر در رسیدن داشتیم. در کل راضی هستم.",
//     avatar: avatar2,
//   },
//   {
//     id: 3,
//     name: "حسین احمدی",
//     comment: "تجربه خوبی بود. قیمت مناسب و خدمات حرفه‌ای. پیشنهاد می‌کنم.",
//     avatar: avatar3,
//   },
//   {
//     id: 4,
//     name: "سمیرا بیات",
//     comment: "خدمات خوب بود، اما خودرو کمی تمیزتر از این می‌توانست باشد.",
//     avatar: avatar4,
//   },
//   {
//     id: 5,
//     name: "امیر حسینی",
//     comment:
//       "سفر راحتی داشتیم، اما بهتر است اطلاع‌رسانی در مورد تغییرات زمان سفر بیشتر شود.",
//     avatar: avatar1,
//   },
//   {
//     id: 6,
//     name: "مریم سلطانی",
//     comment:
//       "خدمات عالی و راننده بسیار مودب و حرفه‌ای بود. حتماً دوباره استفاده خواهیم کرد.",
//     avatar: avatar2,
//   },
//   {
//     id: 7,
//     name: "جواد فلاح",
//     comment: "تأخیر زیادی داشتیم و ارتباط با پشتیبانی هم کمی مشکل بود.",
//     avatar: avatar3,
//   },
//   {
//     id: 8,
//     name: "ریحانه صادقی",
//     comment: "سفر بسیار راحت و بی‌دردسری بود. به نظرم قیمت‌ها هم مناسب است.",
//     avatar: avatar4,
//   },
];
function Comments() {
  return (
    <div className={style.sliderComments}>
      {comments.map((i) => (
        <div key={i.id} className={style.comment}>
          <p>{i.comment}</p>
          <div>
            <img src={i.avatar} alt={i.name} />
            <span>{i.name}</span>
          </div>
          <img className={style.coma} src={coma} />
        </div>
      ))}
    </div>
  );
}

export default Comments;
