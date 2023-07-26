"use client";
import React, { useState } from "react";
import style from "../../app/calendar/calendar.module.css";
import { days, memberOptions } from "@/helpers";

function Footer() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className={style.footer}>
        <div className={style.footer_content}>
          <div className={style.footer_day}>
            {days.map((day) => {
              return <div className={style.footer_day_detail}>{day}</div>;
            })}
          </div>
          <div className={style.footer_day_content}>
            {memberOptions.map((member, index) => {
              return (
                <div key={index} className={style.footer_content_detail}>
                  <h1>{member.day}</h1>
                  <ul>
                    {member.action &&
                      member.listTasks.map((listTask) => {
                        return <li>{listTask}</li>;
                      })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={style.footer_day_content}>
            {memberOptions.map((member, index) => {
              return (
                <div
                  key={index}
                  className={`${style.footer_content_detail} ${
                    member.action && style.active
                  }`}
                >
                  <h1>{member.day}</h1>
                  <ul>
                    {member.action &&
                      member.listTasks.map((listTask, index) => {
                        return <li key={index}>{listTask}</li>;
                      })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={style.footer_day_content}>
            {memberOptions.map((member, index) => {
              return (
                <div
                  key={index}
                  className={`${style.footer_content_detail} ${
                    member.action && style.active
                  } 
                  `}
                >
                  <h1>{member.day}</h1>
                  <ul>
                    {member.action &&
                      member.listTasks.map((listTask, index) => {
                        return <li key={index}>{listTask}</li>;
                      })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={style.footer_day_content}>
            {memberOptions.map((member, index) => {
              return (
                <div
                  key={index}
                  className={`${style.footer_content_detail} ${
                    member.action && style.active
                  }`}
                >
                  <h1>{member.day}</h1>
                  <ul>
                    {member.action &&
                      member.listTasks.map((listTask, index) => {
                        return <li key={index}>{listTask}</li>;
                      })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={style.footer_day_content}>
            <div
              className={`${style.footer_content_detail} ${style.active} ${style.left_style} `}
              onClick={() => {
                setActive(!active);
              }}
            >
              {/* {active && <div className={style.set}></div>} */}
              <h1>1</h1>
              <ul>
                <li>write an article about design</li>
                <li>write an article about design</li>
              </ul>
            </div>
            <div className={style.footer_content_detail}>
              <h1>1</h1>
            </div>
            <div className={style.footer_content_detail}>
              <h1>1</h1>
            </div>
            <div className={style.footer_content_detail}>
              <h1>1</h1>
            </div>
            <div className={style.footer_content_detail}>
              <h1>1</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
