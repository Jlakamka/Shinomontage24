"use client";
import { FormEvent, SetStateAction, useId, useState } from "react";
import "./register.css";
import { TtypesRecord } from "@/app/types/TypesRecord";
export default function Register() {
  const [day, setDay] = useState<SetStateAction<string>>();
  const [time, setTime] = useState<SetStateAction<string>>();
  const [type, setType] = useState<SetStateAction<string>>();
  // let today = new Date();
  // let tomorrow = `${today.getFullYear()}-${
  //   today.getMonth() + 1
  // }-${today.getDate()}`.toString();
  // let test =
  //   today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
  // console.log(today.getMonth());
  // console.log(today.getDate());
  // console.log(tomorrow);
  // console.log(test);
  const register = (e: FormEvent) => {
    e.preventDefault();
    e.target.reset();
    fetch("https://shinomontage24backend.onrender.com/record/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        day: day,
        time: time,
        type: type,
        id: `${Date.now()}`,
      }),
    });
    console.log("test");
    // setDay("");
    // setTime("");
  };
  return (
    <section className="register container">
      <div className="register__block">
        <h3 className="register__heading">Запись</h3>
        <form
          action=""
          onSubmit={(e) => register(e)}
          className="register__form"
        >
          <label className="form__label">День</label>
          <input
            required
            type="date"
            // value={test}
            min="2025-06-20"
            max="2026-12-10"
            className="form__input"
            onChange={(e) => setDay(e.target.value)}
          />
          <label className="form__label">Время</label>
          <input
            required
            type="time"
            className="form__input"
            onChange={(e) => setTime(e.target.value)}
          />
          <button
            type="submit"
            // onSubmit={register}
            className="register__button"
          >
            Записаться
          </button>
        </form>
      </div>
    </section>
  );
}
