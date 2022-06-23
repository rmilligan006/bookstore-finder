import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <FaTimes />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="book-cover" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <br />
              <h3>{item.volumeInfo.authors}</h3>
              <br />
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button>More!</button>
              </a>
            </div>
          </div>
          <p className="description">{item.volumeInfo.description}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
