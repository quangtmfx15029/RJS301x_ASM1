import "./SearchList.css";

//pass the data into "Props" for this component
const SearchList = (props) => {
  //isFreeCancel Function
  const isFreeCancel = () => {
    //check if "free_cancel" from "search.json" is true
    if (props.isfreecancel) {
      return (
        <div>
          <p className="searchListCancelOp">Free cancellation </p>
          <p className="searchListCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </p>
        </div>
      );
    }
  };
  return (
    <div className="searchList">
      <img src={props.image} alt="" className="searchListImg" />
      <div className="searchListDesc">
        <h1 className="searchListTitle">{props.name}</h1>
        <span className="searchListDistance">{props.distance} from center</span>
        <span className="searchListTaxiOp">{props.tag}</span>
        <span className="searchListSubtitle">{props.description}</span>
        <span className="searchListFeatures">{props.type}</span>
        {/* isFreeCancel html element */}
        {isFreeCancel()}
      </div>
      <div className="searchListDetails">
        <div className="searchListRating">
          <span>{props.ratetext}</span>
          <button>{props.rate}</button>
        </div>
        <div className="searchListDetailTexts">
          <span className="searchListPrice">${props.price}</span>
          <span className="searchListTaxOp">Includes taxes and fees</span>
          <button className="searchListCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
