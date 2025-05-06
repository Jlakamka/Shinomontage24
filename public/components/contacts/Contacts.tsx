import "./contacts.css";
import place2 from "../../image/place/place2.webp";
import place3 from "../../image/place/place3.webp";
import place4 from "../../image/place/place4.webp";

import place5 from "../../image/place/place5.webp";
import Image from "next/image";
export default function Contacts() {
  const contactsImg = [
    {
      img: place2,
      id: 1,
    },
    {
      img: place5,
      id: 2,
    },
    {
      img: place3,
      id: 3,
    },
    {
      img: place4,
      id: 4,
    },
  ];
  return (
    <section className="contacts">
      <div className="contacts__date">
        <h3 className="contacts__date-contacts">Контакты</h3>
        <div className="contacts__date-number">
          <h4 className="">Номер телефона</h4>
          <p className="">
            <a href="tel:+79201129737">+7 (920) 112-97-37</a>
          </p>
        </div>
        <div className="contacts__date-schedule">
          <h4 className="">График работы</h4>
          <p className="">Круглосуточно</p>
        </div>
        <div className="contacts__date-adress">
          <h4 className="">Адрес</h4>
          <p className="">Тутаевское ш., 16А, Ярославль</p>
        </div>
      </div>
      <div className="contacts__images">
        {contactsImg.map((el) => (
          <Image className="contacts__image" src={el.img} alt="image" />
        ))}
      </div>
    </section>
  );
}
