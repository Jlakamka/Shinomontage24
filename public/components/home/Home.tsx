import "./home.css";
import Image from "next/image";
import startImg from "../../image/startPage.jpg";
import startImg1 from "../../image/homePageImg.jpg";
import startImg2 from "../../image/homePageImg2.jpg";
import startImg3 from "../../image/homePageImg3.jpg";

export default function Home() {
  return (
    <section className="home container">
      <Image className="home__img" src={startImg3} alt="startImg" />
    </section>
  );
}
