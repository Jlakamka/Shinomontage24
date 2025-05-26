import "./home.css";
import Image from "next/image";
import startImg from "../../image/startPage.jpg";
import startImg2 from "../../image/homePageImg.jpg";

export default function Home() {
  return (
    <section className="home container">
      <Image className="home__img" src={startImg2} alt="startImg" />
    </section>
  );
}
