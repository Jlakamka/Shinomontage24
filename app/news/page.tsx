import Footer from "@/public/components/footer/Footer";
import Header from "@/public/components/header/Header";
import Information from "@/public/components/home/Home";
import News from "@/public/components/news/news";
import Image from "next/image";

export default function NewsPage() {
  return (
    <>
      <Header />
      <News />
      <Footer />
    </>
  );
}
