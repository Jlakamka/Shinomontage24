import "./services.css";
export default function Services() {
  const basikServicesDate = {
    head: {
      name: "Виды услуг",
      price: "Стоимость",
    },
    body: [
      {
        name: "Жгуток (шнурок)",
        price: "350",
      },
      {
        name: "Грибок 4",
        price: "300",
      },
      {
        name: "Грибок 7",
        price: "350",
      },
      {
        name: "Грибок 9",
        price: "400",
      },
      {
        name: "Заплата 32",
        price: "250",
      },
      {
        name: "Заплата 50",
        price: "200",
      },
      {
        name: "Заплата 72",
        price: "250",
      },
      {
        name: "Вентиль безкамерный",
        price: "50",
      },
      {
        name: "Вентиль камерный",
        price: "300",
      },
      {
        name: "Камера новая R 13-14",
        price: "800",
      },
      {
        name: "Камера новая R 16",
        price: "1000",
      },
      {
        name: "Пакет новый",
        price: "25",
      },
    ],
  };
  const standartServicesDate = {
    head: {
      name: "Виды услуг",
      price: "Стоимость",
    },
    body: [
      {
        name: "Вулканизация (1 порез)",
        price: "от 600",
      },
      {
        name: "Пластырь армированный холодный 11",
        price: "400",
      },
      {
        name: "Пластырь армированный холодный 14",
        price: "500",
      },
      {
        name: "Пластырь армированный холодный 23",
        price: "600",
      },
      {
        name: "Пластырь армированный холодный 24",
        price: "800",
      },
      {
        name: "Пластырь армированный холодный 33",
        price: "600",
      },
      {
        name: "Пластырь армированный холодный 231",
        price: "600",
      },
      {
        name: "Пластырь армированный горячий 16",
        price: "500",
      },
      {
        name: "Пластырь армированный горячий 19",
        price: "550",
      },
      {
        name: "Пластырь армированный горячий 20",
        price: "600",
      },
      {
        name: "Пластырь армированный горячий 25",
        price: "600",
      },
      {
        name: "Пластырь армированный горячий 252",
        price: "800",
      },
      {
        name: "Пластырь армированный горячий (НП) 201",
        price: "600",
      },
      {
        name: "Пластырь армированный горячий (НП) 202",
        price: "600",
      },
    ],
  };
  const addServicesDate = {
    head: {
      name: "Виды услуг",
      price: "Стоимость",
    },
    body: [
      {
        name: "Подкачка (всех колес)",
        price: "100",
      },
      {
        name: "Секретка",
        price: "50",
      },
      {
        name: "Пакет под колесо",
        price: "100",
      },
      {
        name: "Индекс C / AT",
        price: "100",
      },
      {
        name: "Низкий профиль (50 и ниже)",
        price: "100",
      },
      {
        name: "Хомут-стяжка на колпак",
        price: "25",
      },
      {
        name: "Монтаж / демонтаж камеры",
        price: "100",
      },
      {
        name: "Замена вентиля",
        price: "50",
      },
      {
        name: "Мойка колеса от грязи",
        price: "50",
      },
      {
        name: "Чистка борта / нанесение герметика",
        price: "50",
      },
    ],
  };

  return (
    <section className="services container">
      {/* <h3>Шиномонтаж легковых автомобилей</h3> */}
      <h3>Экспресс ремонт</h3>
      <table className="services__table">
        <thead className="services__table-head">
          <tr className="services__table-tr">
            <th>{basikServicesDate.head.name}</th>
            <th>{basikServicesDate.head.price}</th>
          </tr>
        </thead>
        <tbody className="services__table-body">
          {basikServicesDate.body.map((el) => (
            <tr className="services__table-tr">
              <td>{el.name}</td>
              <td className="services__table-price">{el.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Стандартный ремонт</h3>
      <table className="services__table">
        <thead className="services__table-head">
          <tr className="services__table-tr">
            <th>{standartServicesDate.head.name}</th>
            <th>{standartServicesDate.head.price}</th>
          </tr>
        </thead>
        <tbody className="services__table-body">
          {standartServicesDate.body.map((el) => (
            <tr className="services__table-tr">
              <td>{el.name}</td>
              <td className="services__table-price">{el.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Дополнительные услуги</h3>
      <table className="services__table">
        <thead className="services__table-head">
          <tr className="services__table-tr">
            <th>{addServicesDate.head.name}</th>
            <th>{addServicesDate.head.price}</th>
          </tr>
        </thead>
        <tbody className="services__table-body">
          {addServicesDate.body.map((el) => (
            <tr className="services__table-tr">
              <td>{el.name}</td>
              <td className="services__table-price">{el.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
