import React, { Component } from "react";
import filter from "../../images/filter.svg";
import "./search.css";
export default class Filter extends Component {
  render() {
    return (



      <div className="container d-flex justify-content-center">
        <button id='filter' className="btn btn-search">
          
           
              <img className="search-image" src={filter} alt='search-image'></img>
         
           
        </button>
      </div>
    );
  }
}
