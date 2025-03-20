import "./home.css";
import Image from "next/image";
import startImg from "../../image/startPage.jpg";

export default function Home() {
  return (
    <section className="home">
      <Image className="home__img" src={startImg} alt="startImg" />
    </section>
  );
}
