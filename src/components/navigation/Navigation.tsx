import React from "react";
import style from "../../app/calendar/calendar.module.css";
import { imgMember, projectLists, taskPercentContent } from "@/helpers";
import Tool from "./components/Tools/Tool";
function Navigation() {
  return (
    <>
      <div className={style.calendar_navigation}>
        <div className={style.calendar_navigation_header}>Task Manager</div>
        <div className={style.calendar_navigation_content}>
          <img
            src="https://th.bing.com/th/id/R.be910db951bafca7bbf5cd2c84600731?rik=0wzI7TFFeEPLJg&pid=ImgRaw&r=0"
            alt=""
            className={style.calendar_navigation_avatar}
          />
          <h2>nguyen huu duc</h2>
          <p>duclatoi@gmail.com</p>
          <Tool />
          <div className={style.task_percent}>
            {taskPercentContent.map((taskPercent, key) => {
              return (
                <div key={key} className={style.task_percent_complete}>
                  <h2>{taskPercent.numTaskComplete}</h2>
                  <p>{taskPercent.content}</p>
                  <p>{taskPercent.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={style.body_content}>
          <h1>Project</h1>
          {projectLists.map((project, index) => {
            return <p key={index}>{project}</p>;
          })}
        </div>
        <div className={style.display_member}>
          <h1>Team</h1>
          <ul>
            {imgMember.map((imgUrl, index) => {
              return (
                <li key={index}>
                  <img
                    src={imgUrl}
                    alt="member"
                    className={style.calendar_navigation_member}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
