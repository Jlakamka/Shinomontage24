import "./works.css";
import Image from "next/image";
import image1 from "../../image/image_block.webp";

export default function Works() {
  const content = [
    {
      heading: "Шиномонтаж",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis tenetur provident doloribus, eum officia officiis ab iure molestias beatae in voluptatem totam dolorum rem aliquid exercitationem cum. Hic, voluptatibus.",
      image: image1,
      id: 1,
    },
    {
      heading: "Комплексное обслуживание",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis tenetur provident doloribus, eum officia officiis ab iure molestias beatae in voluptatem totam dolorum rem aliquid exercitationem cum. Hic, voluptatibus.",
      image: image1,
      id: 2,
    },
    {
      heading: "Ремонт",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis tenetur provident doloribus, eum officia officiis ab iure molestias beatae in voluptatem totam dolorum rem aliquid exercitationem cum. Hic, voluptatibus.",
      image: image1,
      id: 3,
    },
  ];
  return (
    <section className="container works">
      <h3 className="works__heading heading-petal">Услуги</h3>
      <div className="works__content">
        {content.map((el) =>
          el.id % 2 === 0 ? (
            <div key={el.id} className="works__section">
              <div className="works__block">
                <h2 className="works__block-heading">{el.heading}</h2>
                <p className="works__block-text">{el.description}</p>
              </div>
              <div className="works__block">
                <div className="works__block-img">
                  <Image className="works__image" src={el.image} alt="image" />
                </div>
              </div>
            </div>
          ) : (
            <div key={el.id} className="works__section">
              <div className="works__block">
                <div className="works__block-img">
                  <Image src={el.image} alt="image" />
                </div>
              </div>
              <div className="works__block">
                <h2 className="works__block-heading">{el.heading}</h2>
                <p className="works__block-text">{el.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
