import "./services.css";
export default function Services() {
  const complexServicesDate = {
    head: {
      size: "Размер",
      setting: "Снятие и установка колеса",
      replacement: "Шиномонтаж",
      balance: "Баланс",
      onlyBalance: "Комплекс без шиномонтажа",
      complex: "Полный комплекс",
    },
    body: [
      {
        size: "R13-14",
        setting: "150",
        replacement: "150",
        balance: "200",
        onlyBalance: "1400",
        complex: "2000",
      },
      {
        size: "R15-16",
        setting: "200",
        replacement: "200",
        balance: "200",
        onlyBalance: "1600",
        complex: "2400",
      },
      {
        size: "R17-18",
        setting: "200",
        replacement: "200",
        balance: "250",
        onlyBalance: "1800",
        complex: "2800",
      },
      {
        size: "R19-20",
        setting: "250",
        replacement: "300",
        balance: "300",
        onlyBalance: "2200",
        complex: "3400",
      },
    ],
  };
  const basikServicesDate = {
    head: {
      name: "Виды услуг",
      price: "Стоимость",
    },
    body: [
      {
        name: "Жгут-шнурок",
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
    ],
  };
  const standartServicesDate = {
    head: {
      name: "Виды услуг",
      price: "Стоимость",
    },
    body: [
      {
        name: "Прокатка штампованого диска",
        price: "500",
      },
      {
        name: "Правка литого диска",
        price: "от 800",
      },
      {
        name: "Вулканизация (1 порез)",
        price: "от 600",
      },
      {
        name: "Пластырь армированный холодный 11",
        price: "400",
      },
      {
        name: "Пластырь армированный холодный 14/23/24/33/231",
        price: "800",
      },
      {
        name: "Пластырь армированный горячий",
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
      {
        name: "Дошиповка (за 1 шип)",
        price: "20",
      },
      {
        name: "Run Flat",
        price: "250",
      },
      {
        name: "Монтаж-демонтаж обратного диска",
        price: "100",
      },
      {
        name: "Ночные",
        price: "100",
      },
      {
        name: "Пакет новый (4 колеса)",
        price: "25",
      },
    ],
  };

  return (
    <section className="services container">
      <h3>Комплекс</h3>
      <table className="services__table table-big">
        <thead className="services__table-head">
          <tr className="services__table-tr">
            <th>{complexServicesDate.head.size}</th>
            <th>{complexServicesDate.head.setting}</th>
            <th>{complexServicesDate.head.replacement}</th>
            <th>{complexServicesDate.head.balance}</th>
            <th>{complexServicesDate.head.onlyBalance}</th>
            <th>{complexServicesDate.head.complex}</th>
          </tr>
        </thead>
        <tbody className="services__table-body">
          {complexServicesDate.body.map((el) => (
            <tr className="services__table-tr">
              <td>{el.size}</td>
              <td className="services__table-price">{el.setting}</td>
              <td className="services__table-price">{el.replacement}</td>
              <td className="services__table-price">{el.balance}</td>
              <td className="services__table-price">{el.onlyBalance}</td>
              <td className="services__table-price">{el.complex}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
