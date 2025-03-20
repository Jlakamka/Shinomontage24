import "./location.css";
import Image from "next/image";
import map from "../../image/map2.png";
import loc from "../../image/carbon_location-filled.svg";
import visit from "../../image/bi_calendar-week-fill.svg";
import Link from "next/link";

export default function Location() {
  return (
    <section className="location container">
      <Image className="location__img" src={map} alt="location" />
      <div className="location__card">
        <h4 className="location__card-heading">Шиномонтаж 24</h4>
        <div className="card__address">
          <Image className="card__address-img" src={loc} alt="map" />
          <p className="card__address-text">Тутаевское ш., 16А, Ярославль</p>
        </div>
        <div className="card__visit">
          <Image className="card__visit-img" src={visit} alt="map" />
          <p className="card__visit-text">Свободное посещение</p>
        </div>

        <Link
          className="card__button"
          href="https://yandex.ru/maps/16/yaroslavl/?ll=39.833736%2C57.677000&mode=poi&poi%5Bpoint%5D=39.834162%2C57.677071&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D95301190346&z=18.92"
        >
          Найти на картах
        </Link>
      </div>
    </section>
  );
}
