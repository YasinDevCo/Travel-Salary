import { GoArrowLeft } from "react-icons/go";
import { data } from "../../data/api";
import style from "./UserSearching.module.css";
import { CiCalendarDate } from "react-icons/ci";

function UserSearching() {
  const { UserSearching } = data;
  return (
    <div className={style.containerAll}>
      <div className={style.searchBoxContent}>
        <div className={style.title}>
          <h3>
            جست و جو های اخیر ( <span>1</span>)
          </h3>
          <span className={style.clear}>پاک کردن</span>
        </div>
        <div className={style.userSrearchs}>
          {UserSearching.map((us) => (
            <div className={style.userSrearch} key={us.id}>
              <div className={style.titleOD}>
                <span>{us.origin}</span>
                <GoArrowLeft />
                <span>{us.destination}</span>
              </div>
              <p>
                <CiCalendarDate />
                <span>{us.date.day}</span>
                {us.date.mounth}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserSearching;
