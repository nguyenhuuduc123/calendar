import React from "react";
import style from "./calendar.module.css";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";
function Calendar() {
  return (
    <div className={style.calendar}>
      <Navigation />
      <div className={style.calendar_main}>
        <Header />
        <div className={style.calendar_main_content}>
          <div className={style.main_content_header}>
            <div className={style.keep_button}>
              <p className={style.week}>week</p>
              <p className={style.month}>month</p>
            </div>
            <div className={style.main_content_center}>
              <div className={style.date_choice}>
                <div className={style.date_choice_top}>
                  <i className="fa-solid fa-chevron-left"></i>
                  <p>October</p>
                  <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className={style.date_choice_bottom}>2022</div>
              </div>
            </div>
            <div className={style.main_content_right}>
              <a href="#!" className={`${style.btn}  ${style.btn_weekend}`}>
                Weekends
              </a>
              <a href="#!" className={`${style.btn}  ${style.btn_add_task}`}>
                Add task
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
