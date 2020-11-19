import React from "react";
import PropTypes from "prop-types";
import MobileHeader from "./MobileHeader";

import "./Header.scss";

const Header = (props) => {
  return (
    <>
      <header className="header__container hide-mobile">
        <div className="header__container--scope">
          <div className="header__container--main">
            <div>Thể loại</div>
            <div>Vip Siêu Hay</div>
            <div>Cmovie</div>
          </div>
          <div className="header__container--main">
            <div>Tu luyện</div>
            <div>Chợ</div>
            <div>Đấu trường</div>
            <div>Group Facebook</div>
          </div>
        </div>
      </header>

      <MobileHeader />
    </>
  );
};

Header.propTypes = {};

export default Header;
