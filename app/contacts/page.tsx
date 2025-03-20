import Contacts from "@/public/components/contacts/Contacts";
import Footer from "@/public/components/footer/Footer";
import Header from "@/public/components/header/Header";
import Information from "@/public/components/information/Information";
import Image from "next/image";

export default function ContactsPage() {
  return (
    <>
      <Header />
      <Contacts />
      <Footer />
    </>
  );
}
