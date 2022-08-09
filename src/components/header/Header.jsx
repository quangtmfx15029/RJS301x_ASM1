import "./Header.css";

const Header = () => {
  function searchClick() {
    window.location.replace("./search"); //navigate into a search page
  }
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">A lifetimes of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free account.
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItems">
            <div className="fa fa-bed">
              <input
                type="text"
                className="headerSearchInput"
                placeholder="Where are you going?"
              />
            </div>
            <div className="fa fa-calendar">
              <span className="headerSearchText">06/24/2022 to 06/24/2022</span>
            </div>
            <div className="fa fa-female">
              <span className="headerSearchText">
                1 adult • 1 children • 1 room
              </span>
            </div>
            <button className="headerSearchBtn" onClick={searchClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
