import "./works.css";
import Image from "next/image";
import image1 from "../../image/image_block.webp";

export default function Works() {
  const content = [
    {
      heading: "Шиномонтаж",
      description:
        "Комплекс работ, связанных с обслуживанием и ремонтом автомобильных шин. Это важная и неотъемлемая часть технического обслуживания любого транспортного средства. От качества и своевременности проведения шиномонтажных работ во многом зависит безопасность, управляемость и ходовые характеристики автомобиля",
      image: image1,
      id: 1,
    },
    {
      heading: "Комплексное обслуживание",
      description:
        "Комплексный шиномонтаж – это не просто снятие старых шин и установка новых. Это целый набор процедур, направленных на обеспечение безопасности и комфорта ваших поездок. Комплексный шиномонтаж включает в себя замену колес, балансировку, а также проверку давления и состояния шин",
      image: image1,
      id: 2,
    },
    {
      heading: "Ремонт",
      description:
        "В на шсписок ремонта входит жгут, заплатка, вулканизация. Для экстренных ситуациях подойдет жгут. Для более долгосрочного использования шин может подойти заплатка. В случае повреждений шин, вулканизация может быть необходима для восстановления их целостности.",
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
