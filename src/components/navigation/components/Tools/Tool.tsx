import React from "react";
import style from "../../../../app/calendar/calendar.module.css";
function Tool() {
  return (
    <>
      <div className={style.calendar_icons}>
        <div className={style.calendar_icon}>
          <i className="fa-solid fa-gear"></i>
        </div>
        <div className={style.calendar_icon}>
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className={style.calendar_icon}>
          <i className="fa-regular fa-bell"></i>
        </div>
      </div>
      <div className={style.complete_percent}>
        <div className={style.complete}></div>
        <div className={style.non_complete}></div>
      </div>
    </>
  );
}

export default Tool;
