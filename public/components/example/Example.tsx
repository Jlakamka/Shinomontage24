import Image from "next/image";
import exampleImage from "../../image/image_block.webp";
import exampleImage1 from "../../image/example/exampleImg1.jpg";
import exampleImage3 from "../../image/example/exampleImg3.png";
import exampleImage4 from "../../image/example/exampleImg4.png";
import exampleImage5 from "../../image/example/exampleImg5.webp";
import exampleImage6 from "../../image/example/exampleImg6.jpg";
import exampleImage7 from "../../image/example/exampleImg7.jpg";
import exampleImage8 from "../../image/example/exampleImg8.jpg";
import exampleImage10 from "../../image/example/exampleImg10.jpg";
import exampleImage11 from "../../image/example/exampleImg11.jpg";
import exampleImage12 from "../../image/example/exampleImg12.jpg";
import exampleImage13 from "../../image/example/exampleImg13.jpg";
import exampleImage14 from "../../image/example/exampleImg14.jpg";
import exampleImage15 from "../../image/example/exampleImg15.jpg";
import "./example.css";
import { TtypesImage } from "@/app/types/TypesImage";
export default function Example() {
  const exampleDate: TtypesImage[] = [
    { img: exampleImage7, id: 1 },
    // { img: exampleImage3, id: 2 },
    { img: exampleImage4, id: 3 },
    { img: exampleImage6, id: 4 },
    { img: exampleImage11, id: 5 },
    { img: exampleImage12, id: 6 },
    // { img: exampleImage13, id: 7 },
    // { img: exampleImage14, id: 8 },
    { img: exampleImage15, id: 9 },
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
