import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/public/components/header/Header";
import About from "@/public/components/about/About";
import Footer from "@/public/components/footer/Footer";
import Services from "@/public/components/services/Services";
import Example from "@/public/components/example/Example";
import Location from "@/public/components/location/Location";
import Equipment from "@/public/components/equipment/Equipment";
import Home from "@/public/components/home/Home";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Home />
      <Example />
      {/* <Services /> */}
      <Equipment />
      {/* <About /> */}
      <Location />
      <Footer />
    </div>
  );
}
