import "./reviews.css";
export default function Reviews() {
  return (
    <section className="reviews container">
      <div className="reviews__block">
        <iframe
          className="reviews__iframe"
          src="https://yandex.ru/maps-reviews-widget/95301190346?comments"
        ></iframe>
        <a
          href="https://yandex.ru/maps/org/shinomontazh/95301190346/"
          target="_blank"
          className="reviews__link"
        >
          Шиномонтаж на карте Ярославля — Яндекс Карты
        </a>
      </div>
    </section>
  );
}
