import "./FeaturedCity.css";

//pass the data into "Props" for this component
const Featured = (props) => {
  return (
    <div className="featuredItem">
      <img src={props.image} alt={props.name} className="featuredImg" />
      <div className="featuredTitle">
        <h1>{props.name}</h1>
        <h2>{props.subText}</h2>
      </div>
    </div>
  );
};

export default Featured;
