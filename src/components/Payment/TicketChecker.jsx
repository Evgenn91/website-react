import "../../sass/index.scss";
import { tickets } from "../../data/ticket";
import React, { useState } from "react";
import InputMask from "react-input-mask";

const TicketChecker = () => {
  const [ticketNumber, setTicketNumber] = useState("");
  const [error, setError] = useState("");
  const [ticketData, setTicketData] = useState(null);

  const handleCheck = () => {
    // Удаляем возможные пробелы и символы подчеркивания
    const cleanNumber = ticketNumber.replace(/_/g, "").trim();

    // Проверка формата:
    // - Начинается с "10"
    // - Затем ровно 4 цифры
    // - Затем дефис
    // - Затем от 1 до 6 цифр
    const regex = /^10\d{4}-\d{1,6}$/;

    // Дополнительная проверка на полное соответствие маске
    if (!regex.test(cleanNumber) || cleanNumber.includes("_")) {
      setError("Неправильно введен номер");
      setTicketData(null);
      return;
    }

    // Поиск билета
    const foundTicket = tickets.find((ticket) => ticket.id === cleanNumber);

    if (foundTicket) {
      setTicketData(foundTicket);
      setError("");
    } else {
      setError("Данный билет не найден");
      setTicketData(null);
    }
  };

  return (
    <div className="ticket-checker">
      <div className="ticket-checker__form">
        <InputMask
          mask="10####-######"
          maskChar="_"
          formatChars={{ "#": "[0-9]" }}
          value={ticketNumber}
          onChange={(e) => {
            setTicketNumber(e.target.value);
            setError("");
            setTicketData(null);
          }}
          placeholder="10____-______"
          className="ticket-checker__input"
        />
        <button
          onClick={handleCheck}
          className="ticket-checker__button"
          disabled={!ticketNumber || ticketNumber.includes("_")}
        >
          Проверить
        </button>
      </div>

      {error && <div className="ticket-checker__error">{error}</div>}

      {ticketData && (
        <div className="ticket-checker__result">
          <h3>Данные билета:</h3>
          <ul>
            <li>Номер: {ticketData.id}</li>
            <li>Статус: {ticketData.status}</li>
            <li>Дата выдачи: {ticketData.issueDate}</li>
            <li>Сумма займа: {ticketData.amount} руб.</li>
            <li>Владелец: {ticketData.owner}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TicketChecker;
