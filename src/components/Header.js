import React from "react";

function Header() {
  return (
    <>
      <header className="site-header">
        <div className="site-header__container">
          <div className="site-header__left">
            <div className="site-header__logo">
              <img
                src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/2596CFCA-2ED3-4DBC-9AAC-EA8272247F91.svg"
                alt="Id"
              ></img>
            </div>
            <div className="site-header__title">
              <div>
                <img
                  src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/5DF59BFA-3E28-4572-B4EC-B1EC9ECED99E.svg"
                  alt="Cart"
                  className=""
                ></img>
              </div>
              <div>
                IAM SHOP
              </div>
            </div>
          </div>
          <div className="site-header__right">
            <div className="site-header__avatar">
              <img
                src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/8C141B44-18B0-4EBA-889D-311A70A1EC47.png"
                className=""
                alt="profile"
              ></img>
            </div>
            <div className="site-header__avatar-name">
              <p className="">
                Patrick Parker
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
