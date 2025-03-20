import "./news.css";
import newsImg from "../../image/news/news.webp";
import Image from "next/image";
export default function News() {
  const contactsImg = [
    {
      img: newsImg,
      id: 1,
    },
    {
      img: newsImg,
      id: 2,
    },
    {
      img: newsImg,
      id: 3,
    },
    {
      img: newsImg,
      id: 4,
    },
    {
      img: newsImg,
      id: 5,
    },
    {
      img: newsImg,
      id: 6,
    },
  ];
  return (
    <section className="news container">
      <h3>Новости</h3>
      <div className="news__images">
        {contactsImg.map((el) => (
          <>
            <Image className="news__image" src={el.img} alt="image" />
            <div className="news__block">
              <p className="news__text">Текст новости</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
