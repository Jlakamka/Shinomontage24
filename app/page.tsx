import Header from "@/public/components/header/Header";
import Example from "@/public/components/example/Example";
import Location from "@/public/components/location/Location";
import Equipment from "@/public/components/equipment/Equipment";
import Home from "@/public/components/home/Home";
import Works from "@/public/components/works/Works";
import Reviews from "@/public/components/reviews/Reviews";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Works />
      <Equipment />
      <Example />
      <Location />
      <Reviews />
    </>
  );
}
