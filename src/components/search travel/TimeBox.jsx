import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from "./TimeBox.module.css";

function TimeBox() {
  return (
    <div className={style.timeBox}>
      <button className={style.btnR}>
        <IoIosArrowForward size={30}/>
      </button>

      <div style={{width:'100%',height:'100%',display:'flex',padding:"7px 0",background:"var(--gray-2)"}}>
      <span className={style.span}></span>
      <span className={style.span}></span>
      <span className={style.span}></span>
      <span className={style.span}></span>
      <span className={style.span}></span>
      <span className={style.span}></span>
      </div>

      <button className={style.btnL}>
      <IoIosArrowBack size={30}/>
      </button>
    </div>
  );
}

export default TimeBox;
