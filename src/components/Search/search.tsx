import "./style.css";
import handIcone from "../../assets/handMakingARockSymbol.svg";
import search from "../../assets/search.svg";

function Search() {
  return (
    <div className="welcomeArea">
      <div className="welcome">
        <div className="redRectangle"></div>

        <h1>Olá Gustavo!</h1>
        <img src={handIcone} alt="Hand Icone" />
      </div>

      <div className="searchArea">
        <form>
          <input type="text" name="searchInput"></input>
          <img src={search} alt="Search Icon" />
        </form>
      </div>
    </div>
  );
}

export default Search;
