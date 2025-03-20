import "./services.css";
import Image from "next/image";
import image1 from "../../image/image_block.webp";

export default function Services() {
  const content = [
    {
      heading: "Шиномонтаж",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis tenetur provident doloribus, eum officia officiis ab iure molestias beatae in voluptatem totam dolorum rem aliquid exercitationem cum. Hic, voluptatibus.",
      image: image1,
      id: 1,
    },
    {
      heading: "Шиномонтаж",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis tenetur provident doloribus, eum officia officiis ab iure molestias beatae in voluptatem totam dolorum rem aliquid exercitationem cum. Hic, voluptatibus.",
      image: image1,
      id: 2,
    },
    {
      heading: "Шиномонтаж",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reiciendis tenetur provident doloribus, eum officia officiis ab iure molestias beatae in voluptatem totam dolorum rem aliquid exercitationem cum. Hic, voluptatibus.",
      image: image1,
      id: 3,
    },
  ];
  return (
    <section className="container services">
      <h3 className="services__heading heading-petal">Услуги</h3>
      <div className="services__content">
        {content.map((el) =>
          el.id % 2 === 0 ? (
            <div key={el.id} className="services__section">
              <div className="services__block">
                <h2 className="services__block-heading">{el.heading}</h2>
                <p className="services__block-text">{el.description}</p>
              </div>
              <div className="services__block">
                <div className="services__block-img">
                  <Image
                    className="services__image"
                    src={el.image}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div key={el.id} className="services__section">
              <div className="services__block">
                <div className="services__block-img">
                  <Image src={el.image} alt="image" />
                </div>
              </div>
              <div className="services__block">
                <h2 className="services__block-heading">{el.heading}</h2>
                <p className="services__block-text">{el.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
