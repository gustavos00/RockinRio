import data from "../../data.json";
import calendarIcon from "../../assets/calendar.svg";
import * as S from "./style";

function nextEvents() {
  return (
    <div>
      <S.nextEventsTitle>
        <h1>Next Events</h1>
      </S.nextEventsTitle>

      <S.events>
        {data.map(({ id, title, date, url }) => (
          <S.eventData>
            <img src={url} alt="Event" />

            <h1> {title}</h1>

            <S.dateInfo>
              <img src={calendarIcon} alt="Calendar icon" />
              <h3>{date}</h3>
            </S.dateInfo>

            <button type="button">Pre-order</button>
          </S.eventData>
        ))}
      </S.events>
    </div>
  );
}

export default nextEvents;
