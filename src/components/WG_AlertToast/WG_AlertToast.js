import React from "react";
import PropTypes from "prop-types";
import AlertToast from "./AlertToast.styled";

// React icons
import { IconContext } from "react-icons";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdDangerous, MdOutlineClose, MdError } from "react-icons/md";

export const WG_AlertToast = ({
  active,
  setOpen,
  children,
  type,
  ...props
}) => {
  return (
    <AlertToast active={active} type={type}>
      <div className="alert__section rel">
        <div className="alert__section_icon">
          <IconContext.Provider
            value={{
              color: "#fff",
              size: "30px",
            }}
          >
            {type === "danger" ? (
              <MdError />
            ) : type === "error" ? (
              <MdDangerous />
            ) : (
              <BsCheckCircleFill />
            )}
          </IconContext.Provider>
        </div>
        <div className="alert__section_content">
          <h3>
            {type === "danger"
              ? "Warning"
              : type === "error"
              ? "Error"
              : "Success"}
            !
          </h3>
          <p>{children}</p>
        </div>
        <div className="alert__section_close">
          <span onClick={() => setOpen(!active)}>
            <IconContext.Provider value={{ color: "#000", size: "20px" }}>
              <MdOutlineClose />
            </IconContext.Provider>
          </span>
        </div>
        <div
          className={`alert__section_progress_bar ${active ? "active" : ""}`}
        ></div>
      </div>
    </AlertToast>
  );
};

WG_AlertToast.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  active: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
};

WG_AlertToast.defaultProps = {
  children: "I'm an Alert",
  type: "success",
};
