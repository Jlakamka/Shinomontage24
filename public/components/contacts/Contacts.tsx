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
        <h3>Контакты</h3>
        <h4>Номер телефона</h4>
        <p>+7 (920) 112-97-37</p>
        <h4>График работы</h4>
        <p>Круглосуточно</p>
        <h4>Адрес</h4>
        <p>Тутаевское ш., 16А, Ярославль</p>
      </div>
      <div className="contacts__images">
        {contactsImg.map((el) => (
          <Image className="contacts__image" src={el.img} alt="image" />
        ))}
      </div>
    </section>
  );
}
