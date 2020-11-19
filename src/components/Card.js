import React from "react";
import PropTypes from "prop-types";
import IMAGE from "./abc.png";

import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__header--image">
        <img src={IMAGE} alt="" />

        <div className="card__header--detail">
          <span>
            <i class="fas fa-eye"></i> 1,999
          </span>
          <span>
            <i class="fas fa-bookmark"></i> 201
          </span>
        </div>
      </div>

      <div className="card__footer--name">
        <p>Manga Về Giáo Viên Thể</p>
      </div>

      <div className="card__footer--note">
        <span>Chapter 15</span>
        <span>3 phút trước</span>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
