import "./NavBar.css";

//pass the data into "Props" for this component
const NavBar = (props) => {
  let isactive = "";
  if (props.active) {
    isactive = "active";
  } //check if "active" from "navBar.json" is active (true)
  const headerActive = "navBarListItems " + isactive;
  return (
    <div className={headerActive}>
      <div className={`fa ${props.icon}`}>
        <span className="type">{props.type}</span>
      </div>
    </div>
  );
};

export default NavBar;
