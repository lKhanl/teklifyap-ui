import React, { Component } from "react";
import search from "../../images/search.svg";
import "./search.css";
export default class Search extends Component {
  render() {
    return (
      <div className="container  d-flex justify-content-center">
        <button id='search' className="btn btn-search">
          
           
              <img className="search-image" src={search} alt='search-image'></img>
         
           
        </button>
      </div>
    );
  }
}
