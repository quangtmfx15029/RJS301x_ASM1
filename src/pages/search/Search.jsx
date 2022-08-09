import React from "react";
import NavBar from "../../components/navbar/NavBar";
import navBarData from "../../data/navBar.json";
import Header from "../../components/header/Header";
import SearchPopUp from "../../components/searchpopup/SearchPopUp";
import SearchList from "../../components/searchlist/SearchList";
import searchData from "../../data/search.json";
import EmailForm from "../../components/emailform/EmailForm";
import Footer from "../../components/footer/Footer";
import footerList from "../../data/footer.json";
import "./Search.css";

//Start
const Search = () => {
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
      {/* Search section */}
      <div className="searchContainer">
        <div className="searchWrapper">
          <SearchPopUp />
          <div className="searchResult">
            {/* map searchData array from "search.json" to render searchlist items*/}
            {searchData.map((search) => (
              <SearchList
                name={search.name}
                distance={search.distance}
                tag={search.tag}
                type={search.type}
                description={search.description}
                isfreecancel={search.free_cancel}
                price={search.price}
                rate={search.rate}
                ratetext={search.rate_text}
                image={search.image_url}
                key={search.name}
              />
            ))}
          </div>
        </div>
      </div>
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

export default Search;
