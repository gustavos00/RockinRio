import * as S from "./style";
import mainImage from "../../assets/mainImage.svg";
import calendarIcon from "../../assets/calendar.svg";

function Header() {
  return (
    <>
      <S.title>
        <h1>Queen - The Night At The Opera</h1>
        <S.dateInfo>
          <img src={calendarIcon} alt="Calendar icon" />
          <h1>25/03</h1>
        </S.dateInfo>
      </S.title>

      <S.mainImage>
        <img src={mainImage} alt="Main event" />
        <button type="button">Buy ticket</button>
      </S.mainImage>
    </>
  );
}

export default Header;
