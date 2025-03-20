import Image from "next/image";
import exampleImage1 from "../../image/example/example1.jpg";
import exampleImage2 from "../../image/example/example2.jpg";
import exampleImage3 from "../../image/example/example3.jpg";
import exampleImage4 from "../../image/example/example4.jpg";
import exampleImage5 from "../../image/example/example5.jpg";
import exampleImage6 from "../../image/example/example1.jpg";
import "./example.css";
export default function Example() {
  const exampleDate = [
    exampleImage1,
    exampleImage2,
    exampleImage3,
    exampleImage4,
    exampleImage5,
    exampleImage6,
  ];
  return (
    <section className="container example">
      <h3>Примеры наших работ</h3>
      <div className="example__images">
        {exampleDate.map((el) => (
          <Image src={el} alt="image" className="example__image" />
        ))}
      </div>
    </section>
  );
}
