// Library Imports
import React, { useState } from "react";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";
import { RxCopy } from "react-icons/rx";
import DataTable from "react-data-table-component";
import { BsListTask } from "react-icons/bs";
import { BsArrowUpShort, BsCheck2 } from "react-icons/bs";

// Import custom components and Files
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import DetailsDrawer from "../components/DetailsDrawer";
import Cards from "../components/Cards";
import { userList, menuList, dropdownList } from "../constants";
// Import styling
// import "./style.css";

const customStyles = {
  rows: {
    style: {
      minHeight: "90px", // override the row height
      transition: "background .25s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(48, 127, 193, 0.03)"
      }
    },
  },
  headCells: {
    style: {
      color: "#7d7c7c", // override the cell padding for head cells
      height: "62px",
      backgroundColor: '#fbfbfd',
      fontSize: "13px",
      paddingLeft: "20px",
      fontWeight: "normal",
      "&:hover": {
        color: "#307fc1",
      },
    },
  },
  cells: {
    style: {
      padding: "25px 20px", // override the cell padding for data cells
      fontSize: "13px",
      // fontFamily: "Rubik, sans-serif",
    },
  },
};

function HomePage() {
  const [viewType, setViewType] = useState("card");
  const [userListData, setUserListData] = useState(userList);
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [drop, setDrop] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [val, setVal] = useState("All");
  const [mainType, setMainType] = useState("Computers");
  const [searchVal, setSearchVal] = useState("");

  const handleView = (type) => {
    type === "card" ? setViewType("card") : setViewType("grid");
  };

  // To handle the details drawer
  const handleOpenDetails = () => {
    setShowModal(true);
  };

  // To handle the close event
  const handleCloseModel = () => {
    setShowModal(false);
  };

  const handleSearchChange = (value) => {
    setSearchVal(value);
    if (value.trim()) {
      const searchValue = userList.filter((ele) => {
        return (
          ele?.name.toLowerCase().includes(value.toLowerCase()) ||
          ele?.dns.toLowerCase().includes(value.toLowerCase()) ||
          ele?.des.toLowerCase().includes(value.toLowerCase())
        );
      });
      setUserListData(searchValue);
    } else {
      setUserListData(userList);
    }
  };

  const columns = [
    {
      name: "Friendly Name",
      selector: (row) => row?.name,
      sortable: true,
      id: "friendlyname",
      minWidth: '22%',
    },
    {
      name: "DNS Name",
      selector: (row) => row?.dns,
      sortable: true,
      id: "dnsname",
      minWidth: '25.5%',
    },
    {
      name: "Environment",
      selector: (row) => <p>{row?.des}</p>,
      sortable: true,
      id: "environment",
      minWidth: '22%'
    },
    {
      name: "End Date",
      minWidth: '18.5%',
      selector: (row) => (
        <p>
          {row?.date},
          <br />
          {row?.time}
        </p>
      ),
      sortable: true,
      id: "enddate",
    },
    {
      name: "",
      id: "action",
      minWidth: '12%',
      cell: (param) => {
        return (
          <button
            className="button--secondary"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Details
          </button>
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="page-wrap" onClick={() => {
                  if(drop) { setDrop(false) };
                }}>
        <section className="item-list__wrap">
          <div className="">
            <div className="item-list__header">
              <div
                className={`item-list__categories ${drop ? "is-open" : ""}`}
                onClick={() => {
                  drop ? setDrop(false) : setDrop(true);
                }}
              >
                <p
                  className="item-list__categories__heading"
                >
                  {mainType}
                </p>
                <p className="item-list__categories__count">
                  3
                </p>
                <img
                  src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/F456E3BB-D3D9-49A8-8122-9BE2458B8D78.svg"
                  className="item-list__categories__icon"
                  alt="Arrow"
                ></img>
              </div>

              <div className="item-list__display-type">
                <div className="">
                  <Tooltip placement="bottom" overlay={<p>Grid</p>}>
                    <div
                      onClick={() => {
                        handleView("grid");
                      }}
                    >
                      {/* <BsListTask
                        className={`${viewType === "grid" ? "is-selected" : ""
                          }`}
                      /> */}
                      <svg className={`${viewType === "grid" ? "is-selected" : ""}`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g fill="currentColor" fillRule="evenodd">
                              <path d="M23.5 4.5h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1M23.5 12.5h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1M23.5 20.5h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1M1.5 2.5A.5.5 0 0 0 1 3v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 4 5V3a.5.5 0 0 0-.5-.5h-2zm2 4h-2C.673 6.5 0 5.827 0 5V3c0-.827.673-1.5 1.5-1.5h2C4.327 1.5 5 2.173 5 3v2c0 .827-.673 1.5-1.5 1.5zM1.5 10.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 4 13v-2a.5.5 0 0 0-.5-.5h-2zm2 4h-2C.673 14.5 0 13.827 0 13v-2c0-.827.673-1.5 1.5-1.5h2c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zM1.5 18.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 4 21v-2a.5.5 0 0 0-.5-.5h-2zm2 4h-2C.673 22.5 0 21.827 0 21v-2c0-.827.673-1.5 1.5-1.5h2c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5z"/>
                          </g>
                      </svg>

                    </div>
                  </Tooltip>
                </div>
                <div className="">
                  <Tooltip placement="bottom" overlay={<p>Cards</p>}>
                    <div
                      onClick={() => {
                        handleView("card");
                      }}
                    >
                      {/* <RxCopy
                        className={`${viewType === "card" ? "is-selected" : ""
                          }`}
                      /> */}
                      <svg className={`${viewType === "card" ? "is-selected" : ""
                        }`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="currentColor" fillRule="evenodd">
                          <path d="M1.5 1a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 .5.5h18a.5.5 0 0 0 .5-.5v-18a.5.5 0 0 0-.5-.5h-18zm18 20h-18C.673 21 0 20.327 0 19.5v-18C0 .673.673 0 1.5 0h18c.827 0 1.5.673 1.5 1.5v18c0 .827-.673 1.5-1.5 1.5z" />
                          <path d="M22.5 24h-18c-.827 0-1.5-.673-1.5-1.5a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h18a.5.5 0 0 0 .5-.5v-18a.5.5 0 0 0-.5-.5.5.5 0 0 1 0-1c.827 0 1.5.673 1.5 1.5v18c0 .827-.673 1.5-1.5 1.5" />
                        </g>
                      </svg>

                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
            {drop ? (
              <div className="item-list__categories-menu-wrap">
                <div className="item-list__categories-menu">
                  {menuList.map((res, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div
                          className={`item-list__categories-menu__item ${res?.name === mainType ? 'is-selected' : ''} hover:text-blue-100`}
                          onClick={() => {
                            setMainType(res?.name);
                            setDrop(false);
                          }}
                        >
                          <p>
                            <img src={res?.img} alt="img"></img>
                          </p>
                          <p
                            className={`${res?.name === mainType ? "text-blue-100" : ""
                              } self-center text-base ml-3 `}
                          >
                            {res?.name}
                          </p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="item-list__columns">
            <div className="item-list__filters">
              <div className="rounded-lg overflow-hidden">
                <div className="item-list__filters__header">
                  <div className="self-center">
                    <p className="text-black  font-normal text-lg">
                      Access Type
                    </p>
                  </div>
                  {/* <div className="self-center">
                    <img
                      src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/8A6358F7-A864-4D69-9BA3-C90731D4C730.svg"
                      alt="Arrow"
                    ></img>
                  </div> */}
                </div>
                {open ? (
                  <>
                    <div className="item-list__filters__menu justify-between">
                      <div className="self-center">
                        <label>
                          SELECT ACCESS TYPE
                        </label>
                        <div className="relative text-sky-100 focus-within:text-gray-400 md:col-span-4 mt-2.5">
                          <input
                            id="search"
                            name="search"
                            className="block w-full py-2 pl-2 font-rubik text-black placeholder-text-black pr-3 shadow-3xl leading-5  border border-gray-300 rounded-md focus:outline-none focus:ring-blue-100 focus:border-blue-100 sm:text-sm cursor-pointer"
                            placeholder="Search & Filter"
                            type="text"
                            value={val}
                            autoComplete="off"
                            onClick={() => {
                              openDrop ? setOpenDrop(false) : setOpenDrop(true);
                            }}
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <img
                              src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/00082A88-B79E-4A36-AB35-07859982A6DD.svg"
                              alt="Search"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              {openDrop ? (
                <>
                  <div className="item-list__filters__dropdown bg-white border rounded-md border-[#D4D4D8]">
                    {dropdownList.map((ele, index) => {
                      return (
                        <React.Fragment key={index}>
                          <div
                            onClick={() => {
                              setVal(ele?.value);
                              setOpenDrop(false);
                            }}
                            className={`flex my-1 justify-between rounded-md cursor-pointer ${ele?.label === val ? "bg-[#f5f6f8]" : ""
                              } hover:bg-[#f5f6f8]`}
                          >
                            <p className="self-center">
                              {ele?.label}
                            </p>
                            {ele?.label === val && (
                              <BsCheck2 className="self-center mr-2 opacity-50" />
                            )}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="item-list__items">
              <div className="item-list__search">
                <div className="item-list__search__icon">
                  <img
                    src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/2D4C2035-9A9D-483E-806E-445EA9DC24B4.svg"
                    alt="Search"
                  ></img>
                </div>
                <input
                  name="searchUser"
                  value={searchVal}
                  onChange={(e) => {
                    handleSearchChange(e.target.value);
                  }}
                  className="item-list__search__input"
                  placeholder="Search & Filter"
                  type="search"
                />
              </div>

              {viewType === "card" && (
                <div className="item-list__cards">
                  {userListData.map((user, index) => {
                    return (
                      <Cards
                        user={user}
                        key={index}
                        handleOpenDetails={handleOpenDetails}
                      />
                    );
                  })}
                </div>
              )}
              {viewType === "grid" && (
                <div className="item-list__table">
                  <DataTable
                    columns={columns}
                    data={userListData}
                    sortIcon={<BsArrowUpShort />}
                    customStyles={customStyles}
                  />
                </div>
              )}
              <Pagination />
              <DetailsDrawer handleCloseModel={handleCloseModel} showModal={showModal} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
