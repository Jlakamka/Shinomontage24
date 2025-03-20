import Image from "next/image";
import equipmentImg1 from "../../image/equipment/equipmentImg1.webp";
import equipmentImg2 from "../../image/equipment/equipmentImg2.webp";
import equipmentImg3 from "../../image/equipment/equipmentImg3.webp";
import equipmentImg4 from "../../image/equipment/equipmentImg4.webp";
import equipmentImg5 from "../../image/equipment/equipmentImg5.webp";
import equipmentImg6 from "../../image/equipment/equipmentImg6j.jpg";
import "./equipment.css";
export default function Equipment() {
  const exampleDate = [
    { image: equipmentImg1, id: 1 },
    { image: equipmentImg2, id: 2 },
    { image: equipmentImg3, id: 3 },
    { image: equipmentImg4, id: 4 },
    { image: equipmentImg5, id: 5 },
    { image: equipmentImg6, id: 6 },
  ];
  return (
    <section className="container equipment">
      <h3>Наше оборудование</h3>
      <div className="equipment__images">
        {exampleDate.map((el) => (
          <Image
            key={el.id}
            src={el.image}
            alt="image"
            className="equipment__image"
          />
        ))}
      </div>
    </section>
  );
}
