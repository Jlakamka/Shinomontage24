import "./services.css";
export default function Services() {
  return (
    <section className="services container">
      <h3>Шиномонтаж легковых автомобилей</h3>
      <table className="services__table">
        <thead>
          <tr>
            <th>Виды услуг</th>
            <th>R13-14</th>
            <th>R15-16</th>
            <th>R17-18</th>
            <th>R19-20</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Комплексное обслуживание колеса</td>
            <td>500</td>
            <td>600</td>
            <td>700</td>
            <td>850</td>
          </tr>
          <tr>
            <td>Снятие и установка шин</td>
          </tr>
          <tr>
            <td>Снятие и установка шин</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
