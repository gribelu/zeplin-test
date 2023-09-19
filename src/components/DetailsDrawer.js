import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Tooltip from "rc-tooltip";

function DetailsDrawer(props) {
  const { handleCloseModel, showModal } = props;

  return (
    <>
      <Transition.Root show={showModal} as={Fragment}>
        <Dialog as="div" className="modal__wrap" onClose={handleCloseModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-400"
            enterFrom="transition-opacity-0"
            enterTo="transition-opacity-40"
            leave="ease-in-out duration-400"
            leaveFrom="transition-opacity-40"
            leaveTo="transition-opacity-0"
          >
            <div className="modal__backdrop" />
          </Transition.Child>

          <div className="modal__inner">
            <div className="modal__inner-inner">
              <div className="modal__eventless-box">
                {/* <div className="modal__cursor-handler"></div> */}
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-400 sm:duration-400"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-400 sm:duration-400"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="modal__box">
                    <div className="modal__box-inner">
                      <div className="modal__box-inner-inner">
                        <div className="modal__header">
                          <div>
                            <Dialog.Title>
                              Computers Item Friendly Name
                            </Dialog.Title>
                          </div>
                          <div className="modal__close-x">
                            <img
                              src="https://cdn.zeplin.io/640f521efdb5a922348115db/assets/526CF1D2-723F-43E2-81EA-3AA915D98E49.svg"
                              alt="close-icon"
                              onClick={() => {
                                handleCloseModel();
                              }}
                            ></img>
                          </div>
                        </div>
                        <div className="modal__details-table">
                          <div className="">
                            <p className="">
                              Friendly Name
                            </p>
                            <p className="">
                              DNS Name
                            </p>
                            <p className="">
                              Environment
                            </p>
                            <p className="">
                              End Date
                            </p>
                          </div>
                          <div className="">
                            <p className="">
                              Friendly Name
                            </p>
                            <p className="">
                              DNS Name
                            </p>
                            <p className="">
                              Environment
                            </p>
                            <p className="">
                              21/11/2021{" "}
                              <span className="">02:33 a.m.</span>
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <button
                            className="modal__button button--large"
                            onClick={() => {
                              handleCloseModel();
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default DetailsDrawer;
