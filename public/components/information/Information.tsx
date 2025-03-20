// import "./information.css";
import Image from "next/image";
import startImg from "../../image/startPage.jpg";

export default function Information() {
  return (
    <main className="main">
      <Image src={startImg} alt="startImg" />
    </main>
  );
}
