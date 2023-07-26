import React from "react";
import style from "../../app/calendar/calendar.module.css";
function Header() {
  return (
    <>
      <div className={style.calendar_main_header}>
        <div className={style.calendar_header_rContent}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search ..." />
        </div>
        <h1 className={style.calendar_header_content}>calendar</h1>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </>
  );
}

export default Header;
