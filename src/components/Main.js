import React, { useState } from "react";
import { GiArchiveResearch } from "react-icons/gi";
import Card from "./Card";
import "./style.css";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const seachBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDzByOlEdlXCP5DhkofJRPi9wil9u0N1mU&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book!</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={seachBook}
            />
            <button>
              <GiArchiveResearch />
            </button>
          </div>
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
