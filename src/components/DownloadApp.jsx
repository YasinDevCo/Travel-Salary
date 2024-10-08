import { Link } from "react-router-dom";
import style from "./DownloadApp.module.css";
import { GoArrowUpLeft } from "react-icons/go";
import none from "../assets/none.png";
import { BsAndroid } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

function DownloadApp() {
  return (
    <div className={style.container}>
      <div className={style.downloadPart}>
      <div className={style.back}>
        <div className={style.contentDownload}>
          <div className={style.barcode}>
            <div className={style.backBarcode}>
              <img src={none} alt="" />
            </div>
            <span>برای دانلود بارکد اسکن کنید </span>
          </div>
          <div className={style.info}>
            <h3>ساده‌تر با اپلیکیشن فروش بلیط</h3>
            <p className={style.p1}>سریع‌تر و مطمئن‌تر به سفر بروید ‌</p>
           <div className={style.other}>
           <Link className={style.link}>
              <p>مشاهده لینک های دانلود</p>
              <div className={style.linkIcone}>
                <GoArrowUpLeft  color="f1f1f1" size={30} />
              </div>
            </Link>
            <div className={style.p2}>
              <BsAndroid /> <FaApple />
             <p> قابلیت نصب روی Android و iOS</p>
            </div>
           </div>
          </div>
        </div>


        <img className={style.pic} src={none} alt="" />
        <img className={style.pic2} src={none} alt="" />
 

      </div>
      </div>
    </div>
  );
}

export default DownloadApp;
