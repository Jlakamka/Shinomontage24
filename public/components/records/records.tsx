"use client";
import { useEffect, useState } from "react";
import "./records.css";
import { TtypesRecord } from "@/app/types/TypesRecord";
export default function Records() {
  let [records, setRecords] = useState<TtypesRecord[]>();
  let test = {};
  useEffect(() => {
    const response = fetch(
      "https://shinomontage24backend.onrender.com/records/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
      .then((res) => res.json())
      .then((date) => setRecords(date));
  }, []);
  return (
    <section className="records container">
      <h3>Записи</h3>
      {/* {console.log(records)} */}
      <table className="records__table">
        <thead className="records__table-head">
          <tr className="records__table-tr">
            <th>Число</th>
            <th>Время</th>
            <th>Тип услуги</th>
          </tr>
        </thead>
        <tbody className="records__table-body">
          {records?.map((el) => (
            <tr className="records__table-tr" key={el.id}>
              <td>{el.day}</td>
              <td className="records__table-price">{el.time}</td>
              <td className="records__table-price">
                {el.type || "Неизвестно"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
