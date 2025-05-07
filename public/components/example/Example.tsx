import Image from "next/image";
import exampleImage from "../../image/image_block.webp";
import "./example.css";
import { TtypesImage } from "@/app/types/TypesImage";
export default function Example() {
  const exampleDate: TtypesImage[] = [
    { img: exampleImage, id: 1 },
    { img: exampleImage, id: 2 },
    { img: exampleImage, id: 3 },
    { img: exampleImage, id: 4 },
    { img: exampleImage, id: 5 },
    { img: exampleImage, id: 6 },
  ];
  return (
    <section className="container example">
      <h3>Наши работы</h3>
      <div className="example__content">
        <ul className="example__images">
          {exampleDate.map((el) => (
            <li className="example__images-list " key={el.id}>
              <Image src={el.img} alt="image" className="example__image" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
