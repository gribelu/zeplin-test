import React from "react";

function Pagination() {
  return (
    <>
      <div className="pagination">
        <div className="pagination__prev">
          <img
            className=""
            src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/1FDDCF8C-3429-45EE-B982-A5DE38753CE7.svg"
            alt="leftArrow"
          ></img>
        </div>
        <div className="is-selected">
          <p className="">
            1
          </p>
        </div>
        <div className="">
          <p className="">2</p>
        </div>
        <div className="">
          <p className="">3</p>
        </div>
        <div className="">
          <p className="">3</p>
        </div>
        <div className="">
          <p className="">4</p>
        </div>
        <div className="pagination__more">
          <p className="">&#8230;</p>
        </div>
        <div className="">
          <p className="">186</p>
        </div>
        <div className="">
          <p className="">187</p>
        </div>
        <div className="pagination__next">
          <img
            className=""
            src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/895DBF1C-96F9-49EA-9F5D-91A44B9ED829.svg"
            alt="leftArrow"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Pagination;
