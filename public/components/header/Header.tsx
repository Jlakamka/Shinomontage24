import Link from "next/link";
import "./header.css";
export default function Header() {
  const linkDate = [
    {
      heading: "Главная",
      path: "/",
      id: 1,
    },

    {
      heading: "Галерея",
      path: "gallery",
      id: 2,
    },

    {
      heading: "Услуги",
      path: "/services",
      id: 5,
    },
    {
      heading: "Новости",
      path: "news",
      id: 4,
    },
    {
      heading: "Контакты",
      path: "contacts",
      id: 6,
    },
  ];
  return (
    <header className="header">
      <ul className="header__list">
        {linkDate.map((el) => (
          <li key={el.id}>
            <Link href={el.path}>
              <h2>{el.heading}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
