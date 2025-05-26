import Image from "next/image";
import exampleImage from "../../image/image_block.webp";
import exampleImage1 from "../../image/example/exampleImg1.jpg";
import exampleImage3 from "../../image/example/exampleImg3.webp";
import exampleImage4 from "../../image/example/exampleImg4.webp";
import exampleImage5 from "../../image/example/exampleImg5.webp";
import "./example.css";
import { TtypesImage } from "@/app/types/TypesImage";
export default function Example() {
  const exampleDate: TtypesImage[] = [
    { img: exampleImage3, id: 1 },
    { img: exampleImage4, id: 2 },
    { img: exampleImage5, id: 3 },
    // { img: exampleImage, id: 4 },
    // { img: exampleImage, id: 5 },
    // { img: exampleImage, id: 6 },
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
