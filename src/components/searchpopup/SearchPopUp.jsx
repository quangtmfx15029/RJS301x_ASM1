import "./SearchPopUp.css";

const SearchPopUp = () => {
  return (
    <div className="searchPopUp">
      <h1 className="searchTitle">Search</h1>
      <div className="searchItem">
        <label>Destination</label>
        <input placeholder="" type="text" />
      </div>
      <div className="searchItem">
        <label>Check-in Date</label>
        <input placeholder="06/24/2022 to 06/24/2022" type="text" />
      </div>
      <div className="searchItem">
        <label>Options</label>
        <div className="searchOptions">
          <div className="searchOptionItem">
            <span className="searchOptionText">
              Min price <small>per night</small>
            </span>
            <input type="number" className="searchOptionInput" />
          </div>
          <div className="searchOptionItem">
            <span className="searchOptionText">
              Max price <small>per night</small>
            </span>
            <input type="number" className="searchOptionInput" />
          </div>
          <div className="searchOptionItem">
            <span className="searchOptionText">Adult</span>
            <input
              type="number"
              min={1}
              className="searchOptionInput"
              placeholder="1"
            />
          </div>
          <div className="searchOptionItem">
            <span className="searchOptionText">Children</span>
            <input
              type="number"
              min={0}
              className="searchOptionInput"
              placeholder="0"
            />
          </div>
          <div className="searchOptionItem">
            <span className="searchOptionText">Room</span>
            <input
              type="number"
              min={1}
              className="searchOptionInput"
              placeholder="1"
            />
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchPopUp;
