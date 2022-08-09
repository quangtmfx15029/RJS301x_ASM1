import "./Footer.css";

//pass the data into "Props" for this component
const Footer = (props) => {
  return (
    <ul className={`footer__col${props.col_number}`}>
      {/* map col_values array from "footer.json" to render footerlist items */}
      {props.col_values.map((value, i) => (
        <li className="footerItem" key={i}>
          {value}
        </li>
      ))}
    </ul>
  );
};

export default Footer;
