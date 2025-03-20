import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/public/components/header/Header";
import About from "@/public/components/about/About";
import Footer from "@/public/components/footer/Footer";
import Services from "@/public/components/services/Services";
import Information from "@/public/components/information/Information";
import Example from "@/public/components/example/Example";
import Location from "@/public/components/location/Location";

export default function Home() {
  return (
    <div>
      <Header />
      <Information />
      <Example />
      <Services />
      {/* <About /> */}
      <Location />
      <Footer />
    </div>
  );
}
