import styles from "./page.module.css";
import Header from "@/public/components/header/Header";
import About from "@/public/components/about/About";
import Footer from "@/public/components/footer/Footer";
import Example from "@/public/components/example/Example";
import Location from "@/public/components/location/Location";
import Equipment from "@/public/components/equipment/Equipment";
import Home from "@/public/components/home/Home";
import Works from "@/public/components/works/Works";
import Reviews from "@/public/components/reviews/Reviews";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Home />
      {/* <Example /> */}
      <Works />
      <Equipment />
      {/* <About /> */}
      <Location />
      <Reviews />
      <Footer />
    </div>
  );
}
