import React from "react";
import style from "./footer.module.css";
import logo from "./../assets/logo.png";
import logoMobile from "./../assets/logoMobile.svg";
import none from "./../assets/none.png";
import star from "./../assets/Star 11.png";
import { further_information, other_pages, services } from "../constants/list";
import { Link } from "react-router-dom";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiArrowCircleUpLeftFill } from "react-icons/pi";
function Footer() {
  return (
    <div className={style.container}>
      <footer className={style.footer}>
        <div className={style.topFooter}>
          <div className={style.right}>
            <div className={style.footerLink}>
              <h4>
                <img src={star} alt="" />
                <span>خدمات</span>
              </h4>
              <div className={style.content}>
                {services.map((i) => (
                  <Link key={i.id}>{i.type}</Link>
                ))}
              </div>
            </div>
            <div className={style.footerLink}>
              <h4>
                <img src={star} alt="" />
                <span>اطلاعات تکمیلی</span>
              </h4>
              <div className={style.content}>
                {further_information.map((i) => (
                  <Link key={i.id}>{i.type}</Link>
                ))}
              </div>
            </div>
            <div className={style.footerLink}>
              <h4>
                <img src={star} alt="" />
                <span>سایر صفحات</span>
              </h4>
              <div className={style.content}>
                {other_pages.map((i) => (
                  <Link key={i.id}>{i.type}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className={style.left}>
            <div className={style.img}>
              <img src={logo} alt="" />
            </div>
            <p>
              سامانه آنلاین خرید بلیط هواپیما، بلیط قطار، بلیط اتوبوس، بلیط
              هواپیما چارتری و رزرو هتل است؛ راهی سریع و آسان برای برنامه ریزی
              سفرهایتان! تنها با چند کلیک می توانید بلیط خود را به هر مقصدی که
              بخواهید تهیه کرده، صورتحسابتان را آنلاین پرداخت کنید و بی دغدغه
              آماده سفر خود باشید
            </p>
            <div className={style.boxActive}>
              <h4>راهکارهای سازمانی</h4>
              <span>
                خدمات اختصاصیِ برای ماموریت‌های کاری و رفاهیاتِ پرسنلِ سازمان‌ها
              </span>
              <Link>
                <span>
                  <PiArrowCircleUpLeftFill size={35} />
                </span>
                <p>فعال سازی پنل سازمانی</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.middle}>
          <div className={style.communication}>
            <div>
              تلفن پشتیبانی :<span> 021-40000000</span>
            </div>
            <div>
              ایمیل پشتیبانی : <span>support@xxxxxx.ir</span>
            </div>
          </div>
          <div className={style.circle}>
            <img src={none} alt="" />
            <img src={none} alt="" />
            <img src={none} alt="" />
            <img src={none} alt="" />
            <img src={none} alt="" />
            <img src={none} alt="" />
          </div>
        </div>
        <div className={style.bottom}>
          <p>
            کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به
            شرکت X می‌باشد.
          </p>
          <div className={style.apps}>
            <FaYoutube color="var(--main-gray)" size={30} />
            <FaTelegram color="var(--main-gray)" size={30} />
            <FaSquareXTwitter color="var(--main-gray)" size={30} />
          </div>
        </div>

        <div className={style.tabletBottom}>
          <div className={style.circleApp}>
            <div className={style.apps}>
              <FaYoutube color="var(--main-gray)" size={30} />
              <FaTelegram color="var(--main-gray)" size={30} />
              <FaSquareXTwitter color="var(--main-gray)" size={30} />
            </div>
            <div className={style.circle}>
              <img src={none} alt="" />
              <img src={none} alt="" />
              <img src={none} alt="" />
              <img src={none} alt="" />
              <img src={none} alt="" />
              <img src={none} alt="" />
            </div>
          </div>
          <div className={style.communication}>
            <div>
              تلفن پشتیبانی :<span> 021-40000000</span>
            </div>
            <div>
              ایمیل پشتیبانی : <span>support@xxxxxx.ir</span>
            </div>
          </div>
          <p>
            کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به
            شرکت X می‌باشد.
          </p>
        </div>

        <div className={style.mobile}>
          <div className={style.top}>
            <div className={style.img}>
              <img src={logoMobile} alt="" />
            </div>
            <p>
              سامانه آنلاین خرید بلیط هواپیما، بلیط قطار، بلیط اتوبوس، بلیط
              هواپیما چارتری و رزرو هتل است؛ راهی سریع و آسان برای برنامه ریزی
              سفرهایتان! تنها با چند کلیک می توانید بلیط خود را به هر مقصدی که
              بخواهید تهیه کرده، صورتحسابتان را آنلاین پرداخت کنید و بی دغدغه
              آماده سفر خود باشید
            </p>
          </div>
          <div className={style.boxActive}>
            <h4>راهکارهای سازمانی</h4>
            <span>
              خدمات اختصاصیِ برای ماموریت‌های کاری و رفاهیاتِ پرسنلِ سازمان‌ها
            </span>
            <Link>
              <span>
                <PiArrowCircleUpLeftFill size={35} />
              </span>
              <p>فعال سازی پنل سازمانی</p>
            </Link>
          </div>
          <div className={style.communication}>
            <div>
              تلفن پشتیبانی :<span> 021-40000000</span>
            </div>
            <div>
              ایمیل پشتیبانی : <span>support@xxxxxx.ir</span>
            </div>
          </div>
          <p>
            کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به
            شرکت X می‌باشد.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

// import { FaTelegram, FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { further_information, other_pages, services } from "../constants/list";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { PiArrowCircleUpLeftFill } from "react-icons/pi";
// import React from "react";
// import style from "./footer.module.css";
// import { GiStarShuriken } from "react-icons/gi";
// function Footer() {
//   return (
//     <div className={style.container}>
//       <footer className={style.footer}>
//         <div className={style.topFooter}>
//           <div className={style.rtlTopFooter}>
//             <ul className={style.containerServices}>
//               <h3 className={style.titleFooter}>
//                 <GiStarShuriken size={20} /> خدمات
//               </h3>
//               <div className={style.items}>
//                 {services.map((item) => (
//                   <li className={style.servicesItem} key={item.id}>
//                     {item.type}
//                   </li>
//                 ))}
//               </div>
//             </ul>
//             <ul className={style.containerServices}>
//               <h3 className={style.titleFooter}>
//                 <GiStarShuriken size={20} /> اطلاعات تکمیلی
//               </h3>
//               <div className={style.items}>
//                 {further_information.map((item) => (
//                   <li className={style.servicesItem} key={item.id}>
//                     {item.type}
//                   </li>
//                 ))}
//               </div>
//             </ul>
//             <ul className={style.containerServices}>
//               <h3 className={style.titleFooter}>
//                 <GiStarShuriken size={20} /> سایر صفحات
//               </h3>
//               <div className={style.items}>
//               {other_pages.map((item) => (
//                 <li className={style.servicesItem} key={item.id}>
//                   {item.type}
//                 </li>
//               ))}
//               </div>
//             </ul>
//           </div>
//           <div className={style.ltrTopFooter}>
//             <Link className={style.footerLogo}>LOGO</Link>
//             <p className={style.textFooter}>
//               سامانه آنلاین خرید بلیط هواپیما، بلیط قطار، بلیط اتوبوس، بلیط
//               هواپیما چارتری و رزرو هتل است؛ راهی سریع و آسان برای برنامه ریزی
//               سفرهایتان! تنها با چند کلیک می توانید بلیط خود را به هر مقصدی که
//               بخواهید تهیه کرده، صورتحسابتان را آنلاین پرداخت کنید و بی دغدغه
//               آماده سفر خود باشید
//             </p>
//             <div className={style.bottonltrTopFooter}>
//               <h3>راهکارهای سازمانی</h3>
//               <p>
//                 خدمات اختصاصیِ مِستربلیط برای ماموریت‌های کاری و رفاهیاتِ پرسنلِ
//                 سازمان‌ها
//               </p>
//               <Link className={style.btn}>
//                 <p>فعال سازی پنل سازمانی</p>
//                 <PiArrowCircleUpLeftFill color="#256A9C" size={40} />
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className={style.bottomFooter}>
//           <div className={style.topBottomFooter}>
//             <div className={style.call}>
//               <h3>
//                 تلفن پشتیبانی : <span>40000000-021</span>{" "}
//               </h3>
//               <h3>
//                 ایمیل پشتیبانی : <span>support@xxxxxx.ir</span>{" "}
//               </h3>
//             </div>
//             <div>
//               <Link>
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAYdJREFUeF7tnEEPQ0AQha0LN0c/t/xcRzculANBUpPxJGzz9aZTJY958+0aGxLj0/d9FUL4LD/rui6Zvlv3yrIsyfN83fbGi6LYnUHbtrttT9x7bOvch2Goy7KsziQKCPj74iOgmB0I+AYBm6ap0jRdPdDyDW9c8bzZfrb7e49teeY4jvX0n5oHIiACXiYG7kARuW4REA6EAy9DPhjzBoyZMGE3lLNGLv8Unz1wGkqCMctF9XLiLUUEDoQDn+VAPFD0QDgQDoQDt2h0Nntjza5447eANB4oeiAYA8Y8izHcgeIdiAeKHggHwoFwIBwY6SQh84FveKgExogYg4CigGAMGAPGRI0xpLCYwhQRsYggIAIyH7gtImdd+97OA+sZyS2dCRQRsYggIAIC0lGDNBgDxoAxUWMMKSymMBgDxoAxUWMMKSymMEVELCIIiIDPgjTtbbS3gTFgzMnCPJ6FdY6LTMzb2/2tKXpvnNccxLY62ttob9uvC3NMWdaNOSycYwlkxZ94rPkF0CID1dckqToAAAAASUVORK5CYII="
//                   alt=""
//                 />
//                 {/* <FaCircle size={50} /> */}
//               </Link>

//               <Link>
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAYdJREFUeF7tnEEPQ0AQha0LN0c/t/xcRzculANBUpPxJGzz9aZTJY958+0aGxLj0/d9FUL4LD/rui6Zvlv3yrIsyfN83fbGi6LYnUHbtrttT9x7bOvch2Goy7KsziQKCPj74iOgmB0I+AYBm6ap0jRdPdDyDW9c8bzZfrb7e49teeY4jvX0n5oHIiACXiYG7kARuW4REA6EAy9DPhjzBoyZMGE3lLNGLv8Unz1wGkqCMctF9XLiLUUEDoQDn+VAPFD0QDgQDoQDt2h0Nntjza5447eANB4oeiAYA8Y8izHcgeIdiAeKHggHwoFwIBwY6SQh84FveKgExogYg4CigGAMGAPGRI0xpLCYwhQRsYggIAIyH7gtImdd+97OA+sZyS2dCRQRsYggIAIC0lGDNBgDxoAxUWMMKSymMBgDxoAxUWMMKSymMEVELCIIiIDPgjTtbbS3gTFgzMnCPJ6FdY6LTMzb2/2tKXpvnNccxLY62ttob9uvC3NMWdaNOSycYwlkxZ94rPkF0CID1dckqToAAAAASUVORK5CYII="
//                   alt=""
//                 />
//                 {/* <FaCircle size={50} /> */}
//               </Link>

//               <Link>
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAYdJREFUeF7tnEEPQ0AQha0LN0c/t/xcRzculANBUpPxJGzz9aZTJY958+0aGxLj0/d9FUL4LD/rui6Zvlv3yrIsyfN83fbGi6LYnUHbtrttT9x7bOvch2Goy7KsziQKCPj74iOgmB0I+AYBm6ap0jRdPdDyDW9c8bzZfrb7e49teeY4jvX0n5oHIiACXiYG7kARuW4REA6EAy9DPhjzBoyZMGE3lLNGLv8Unz1wGkqCMctF9XLiLUUEDoQDn+VAPFD0QDgQDoQDt2h0Nntjza5447eANB4oeiAYA8Y8izHcgeIdiAeKHggHwoFwIBwY6SQh84FveKgExogYg4CigGAMGAPGRI0xpLCYwhQRsYggIAIyH7gtImdd+97OA+sZyS2dCRQRsYggIAIC0lGDNBgDxoAxUWMMKSymMBgDxoAxUWMMKSymMEVELCIIiIDPgjTtbbS3gTFgzMnCPJ6FdY6LTMzb2/2tKXpvnNccxLY62ttob9uvC3NMWdaNOSycYwlkxZ94rPkF0CID1dckqToAAAAASUVORK5CYII="
//                   alt=""
//                 />
//                 {/* <FaCircle size={50} /> */}
//               </Link>

//               <Link>
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAYdJREFUeF7tnEEPQ0AQha0LN0c/t/xcRzculANBUpPxJGzz9aZTJY958+0aGxLj0/d9FUL4LD/rui6Zvlv3yrIsyfN83fbGi6LYnUHbtrttT9x7bOvch2Goy7KsziQKCPj74iOgmB0I+AYBm6ap0jRdPdDyDW9c8bzZfrb7e49teeY4jvX0n5oHIiACXiYG7kARuW4REA6EAy9DPhjzBoyZMGE3lLNGLv8Unz1wGkqCMctF9XLiLUUEDoQDn+VAPFD0QDgQDoQDt2h0Nntjza5447eANB4oeiAYA8Y8izHcgeIdiAeKHggHwoFwIBwY6SQh84FveKgExogYg4CigGAMGAPGRI0xpLCYwhQRsYggIAIyH7gtImdd+97OA+sZyS2dCRQRsYggIAIC0lGDNBgDxoAxUWMMKSymMBgDxoAxUWMMKSymMEVELCIIiIDPgjTtbbS3gTFgzMnCPJ6FdY6LTMzb2/2tKXpvnNccxLY62ttob9uvC3NMWdaNOSycYwlkxZ94rPkF0CID1dckqToAAAAASUVORK5CYII="
//                   alt=""
//                 />
//                 {/* <FaCircle size={50} /> */}
//               </Link>

//               <Link>
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAYdJREFUeF7tnEEPQ0AQha0LN0c/t/xcRzculANBUpPxJGzz9aZTJY958+0aGxLj0/d9FUL4LD/rui6Zvlv3yrIsyfN83fbGi6LYnUHbtrttT9x7bOvch2Goy7KsziQKCPj74iOgmB0I+AYBm6ap0jRdPdDyDW9c8bzZfrb7e49teeY4jvX0n5oHIiACXiYG7kARuW4REA6EAy9DPhjzBoyZMGE3lLNGLv8Unz1wGkqCMctF9XLiLUUEDoQDn+VAPFD0QDgQDoQDt2h0Nntjza5447eANB4oeiAYA8Y8izHcgeIdiAeKHggHwoFwIBwY6SQh84FveKgExogYg4CigGAMGAPGRI0xpLCYwhQRsYggIAIyH7gtImdd+97OA+sZyS2dCRQRsYggIAIC0lGDNBgDxoAxUWMMKSymMBgDxoAxUWMMKSymMEVELCIIiIDPgjTtbbS3gTFgzMnCPJ6FdY6LTMzb2/2tKXpvnNccxLY62ttob9uvC3NMWdaNOSycYwlkxZ94rPkF0CID1dckqToAAAAASUVORK5CYII="
//                   alt=""
//                 />
//                 {/* <FaCircle size={50} /> */}
//               </Link>

//               <Link>
//                 <img
//                   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAAAYdJREFUeF7tnEEPQ0AQha0LN0c/t/xcRzculANBUpPxJGzz9aZTJY958+0aGxLj0/d9FUL4LD/rui6Zvlv3yrIsyfN83fbGi6LYnUHbtrttT9x7bOvch2Goy7KsziQKCPj74iOgmB0I+AYBm6ap0jRdPdDyDW9c8bzZfrb7e49teeY4jvX0n5oHIiACXiYG7kARuW4REA6EAy9DPhjzBoyZMGE3lLNGLv8Unz1wGkqCMctF9XLiLUUEDoQDn+VAPFD0QDgQDoQDt2h0Nntjza5447eANB4oeiAYA8Y8izHcgeIdiAeKHggHwoFwIBwY6SQh84FveKgExogYg4CigGAMGAPGRI0xpLCYwhQRsYggIAIyH7gtImdd+97OA+sZyS2dCRQRsYggIAIC0lGDNBgDxoAxUWMMKSymMBgDxoAxUWMMKSymMEVELCIIiIDPgjTtbbS3gTFgzMnCPJ6FdY6LTMzb2/2tKXpvnNccxLY62ttob9uvC3NMWdaNOSycYwlkxZ94rPkF0CID1dckqToAAAAASUVORK5CYII="
//                   alt=""
//                 />
//                 {/* <FaCircle size={50} /> */}
//               </Link>
//             </div>
//           </div>
//           <hr />
//           <div className={style.bottomBottomFooter}>
//             <p>
//               کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق
//               به شرکت X می‌باشد.
//             </p>
//             <div>
//               <FaYoutube size={40} />
//               <FaTelegram size={40} />
//               <FaSquareXTwitter size={40} />
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;
