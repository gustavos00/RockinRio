import * as S from "./style";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <S.header>
      <img src={logo} alt="Rock in Rio logo"></img>
    </S.header>
  );
}

export default Header;
