import React from "react";

// Card component
function Cards(props) {
  const { user, handleOpenDetails } = props;
  return (
    <>
      <div className="item-list__cards__item">
        <div>
          <div className="item-list__cards__header">
            {user?.name}
          </div>
          <div className="item-list__cards__content">
            <div>
              <p >
                FRIENDLY NAME
              </p>
              <p >
                {user?.name}
              </p>
            </div>
            <div>
              <p >
                DNS NAME
              </p>
              <p >
                {user?.dns}
              </p>
            </div>
            <div>
              <p >
                DESCRIPTION
              </p>
              <p >
                {user?.des}
              </p>
            </div>
            <div>
              <p >
                END DATE
              </p>
              <p >
                {user?.date}, <span>{user?.time}</span>
              </p>
            </div>

            <button
              className="item-list__cards__button button--secondary"
              onClick={() => handleOpenDetails()}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
