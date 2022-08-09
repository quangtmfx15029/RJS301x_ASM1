import React from "react";
import NavBar from "../../components/navbar/NavBar";
import navBarData from "../../data/navBar.json";
import Header from "../../components/header/Header";
import DetailedHotel from "../../components/detailedhotel/DetailedHotel";
import detailedData from "../../data/detail.json";
import EmailForm from "../../components/emailform/EmailForm";
import Footer from "../../components/footer/Footer";
import footerList from "../../data/footer.json";
import "./Detail.css";

//Start
const Detail = () => {
  return (
    <div>
      {/* navBar section */}
      <div className="navBar">
        <div className="navContainer">
          <div className="navContainer__top">
            <a href="." className="logo">
              Booking Website
            </a>
            <div className="navContainer__button">
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
            </div>
          </div>
          <div className="navBarList">
            {/* map navBarData array from "navBar.json" to render navBar list items*/}
            {navBarData.map((navBar) => (
              <NavBar
                type={navBar.type}
                icon={navBar.icon}
                active={navBar.active}
                key={navBar.type}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Header section */}
      <Header />
      {/* Detailed section */}
      {/* map detailedData array from "detail.json" to render detailed hotel items*/}
      {detailedData.map((detail) => (
        <DetailedHotel
          name={detail.name}
          address={detail.address}
          distance={detail.distance}
          price={detail.price}
          photos={detail.photos}
          title={detail.title}
          description={detail.description}
          nine_night_price={detail.nine_night_price}
          key={detail.name}
        />
      ))}
      {/* Emailform section */}
      <EmailForm />
      {/* Footer section */}
      <div className="footer">
        <div className="footerList">
          {/* map footerList array from "footer.json" to render Footer list items*/}
          {footerList.map((footer) => (
            <Footer
              col_number={footer.col_number}
              col_values={footer.col_values}
              key={footer.col_number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
