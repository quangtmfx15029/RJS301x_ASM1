import "./FeaturedHotel.css";

//pass the data into "Props" for this component
const Hotel = (props) => {
  return (
    <div className="hotelItem">
      <img src={props.image_url} alt={props.name} className="hotelImg" />
      <a href="./detail" className="hotelName">
        {props.name}
      </a>
      <span className="hotelCity">{props.city}</span>
      <span className="hotelPrice">Starting from {props.price}$</span>
      <div className="hotelRating">
        <button>{props.rate}</button>
        <span>{props.type}</span>
      </div>
    </div>
  );
};

export default Hotel;
