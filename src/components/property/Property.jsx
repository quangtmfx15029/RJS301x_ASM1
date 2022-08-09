import "./Property.css";

//pass the data into "Props" for this component
const Property = (props) => {
  return (
    <div className="propertyItem">
      <img src={props.image} alt={props.name} className="propertyImg" />
      <div className="propertyTitle">
        <h1>{props.name}</h1>
        <h2>{props.count} hotels</h2>
      </div>
    </div>
  );
};

export default Property;
