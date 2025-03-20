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
    equipmentImg1,
    equipmentImg2,
    equipmentImg3,
    equipmentImg4,
    equipmentImg5,
    equipmentImg6,
  ];
  return (
    <section className="container equipment">
      <h3>Наше оборудование</h3>
      <div className="equipment__images">
        {exampleDate.map((el) => (
          <Image src={el} alt="image" className="equipment__image" />
        ))}
      </div>
    </section>
  );
}
