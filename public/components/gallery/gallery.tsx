import "./gallery.css";
import place2 from "../../image/place/place2.webp";
import place3 from "../../image/place/place3.webp";
import place4 from "../../image/place/place4.webp";

import place5 from "../../image/place/place5.webp";
import equipmentImg1 from "../../image/equipment/equipmentImg1.webp";
import equipmentImg2 from "../../image/equipment/equipmentImg2.webp";
import equipmentImg3 from "../../image/equipment/equipmentImg3.webp";
import equipmentImg4 from "../../image/equipment/equipmentImg4.webp";
import equipmentImg5 from "../../image/equipment/equipmentImg5.webp";
import equipmentImg6 from "../../image/equipment/equipmentImg6j.jpg";
import Image from "next/image";
export default function Gallery() {
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
    { img: equipmentImg1, id: 5 },
    { img: equipmentImg2, id: 6 },
    { img: equipmentImg3, id: 7 },
    { img: equipmentImg4, id: 8 },
    { img: equipmentImg5, id: 9 },
    { img: equipmentImg6, id: 10 },
  ];
  return (
    <section className="gallery">
      <div className="gallery__images">
        {contactsImg.map((el) => (
          <Image className="gallery__image" src={el.img} alt="image" />
        ))}
      </div>
    </section>
  );
}
