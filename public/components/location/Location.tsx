import "./location.css";
import Image from "next/image";
import map from "../../image/map2.png";
import loc from "../../image/carbon_location-filled.svg";
import visit from "../../image/bi_calendar-week-fill.svg";

export default function Location() {
  return (
    <section className="location container">
      <Image className="location__img" src={map} alt="location" />
      <div className="location__card">
        <h4>Шиномонтаж 24</h4>
        <div className="card__address">
          <Image className="card__address-img" src={loc} alt="map" />
          <p className="card__address-text">Адрес</p>
        </div>
        <div className="card__visit">
          <Image className="card__visit-img" src={visit} alt="map" />
          <p className="card__visit-text">Свободное посещение</p>
        </div>

        <button className="card__button">Найти на картах</button>
      </div>
    </section>
  );
}
