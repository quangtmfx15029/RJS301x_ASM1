import React from "react";
import NavBar from "../../components/navbar/NavBar";
import navBarData from "../../data/navBar.json";
import Header from "../../components/header/Header";
import Featured from "../../components/featuredcity/FeaturedCity";
import cityData from "../../data/city.json";
import Property from "../../components/property/Property";
import typeData from "../../data/type.json";
import Hotel from "../../components/featuredhotel/FeaturedHotel";
import hotelData from "../../data/hotel_list.json";
import EmailForm from "../../components/emailform/EmailForm";
import Footer from "../../components/footer/Footer";
import footerList from "../../data/footer.json";
import "./home.css";

//Start
const Home = () => {
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
      {/* Main section */}
      <div className="homeContainer">
        {/* FeaturedCity section */}
        <div className="featured">
          {/* map cityData array from "city.json" to render city list items*/}
          {cityData.map((city) => (
            <Featured
              name={city.name}
              subText={city.subText}
              image={city.image}
              key={city.name}
            />
          ))}
        </div>
        {/* Property section */}
        <h1 className="homeTitle">Browse by property type</h1>
        <div className="property">
          {/* map typeData array from "type.json" to render property list items*/}
          {typeData.map((type) => (
            <Property
              name={type.name}
              count={type.count}
              image={type.image}
              key={type.name}
            />
          ))}
        </div>
        {/* FeaturedHotel section */}
        <h1 className="homeTitle">Home guests love</h1>
        <div className="hotel">
          {/* map hotelData array from "hotel_list.json" to render hotel list items*/}
          {hotelData.map((hotel) => (
            <Hotel
              name={hotel.name}
              city={hotel.city}
              price={hotel.price}
              rate={hotel.rate}
              type={hotel.type}
              image_url={hotel.image_url}
              key={hotel.name}
            />
          ))}
        </div>
        {/* Emailform section */}
        <EmailForm />
      </div>
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

export default Home;
