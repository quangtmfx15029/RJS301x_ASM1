import "./DetailedHotel.css";

//pass the data into "Props" for this component
const DetailedHotel = (props) => {
  return (
    <div className="hotelContainer">
      <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">{props.name}</h1>
        <div className="hotelAddress">
          <span>{props.address}</span>
        </div>
        <span className="hotelDistance">{props.distance}</span>
        <span className="hotelPriceHighlight">{props.price}</span>
        <div className="hotelImages">
          {/* Map photos array from "detail.json" to render image items */}
          {props.photos.map((photo, i) => (
            <div className="hotelImgWrapper" key={i}>
              <img src={photo} alt="hotel" className="hotelImg" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">{props.title}</h1>
            <p className="hotelDesc">{props.description}</p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </span>
            <h2>
              <b>${props.nine_night_price}</b> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedHotel;
