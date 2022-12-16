import React, { useState } from "react";
import { useNavigate } from "react-router";

// Components
import { WG_Button } from "../components/WG_Button/WG_Button";
import { WG_IconButton } from "../components/WG_IconButton/WG_IconButton";

// React icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// images
import like_icon from "../assets/images/like_icon.webp";

// aux functions
import { validateEmail, validatePassword } from "../utils/functions";
import { WG_AlertToast } from "../components/WG_AlertToast/WG_AlertToast";

// variables
import { alertTimeOut } from "../utils/variables";
import { UsersQueries } from "../utils/userQueries";

import { graphpQLAPI } from "../services/api";

export const Register = () => {
  // useState
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    displayName: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  // alert states
  const [TimeOut, setTimeOut] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertChildren, setAlertChildren] = useState("");

  // uneNavigate
  const navigate = useNavigate();

  // handle funct
  const handleInputChange = (event) => {
    event.preventDefault();

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // onClick funct
  const sliderForm = (event) => {
    event.preventDefault();

    let activeElement = document.getElementsByClassName(
      "register__card_form__slider__section--show"
    );
    let elementOne = document.getElementById("1");
    let elementTwo = document.getElementById("2");

    if (activeElement[0].id === "1") {
      elementOne.className = "register__card_form__slider__section";
      elementTwo.className = "register__card_form__slider__section--show";
    } else {
      elementTwo.className = "register__card_form__slider__section";
      elementOne.className = "register__card_form__slider__section--show";
    }
  };

  const registerUser = async (event) => {
    event.preventDefault();

    setOpenAlert(false);
    clearTimeout(TimeOut);

    const graphqlQuery = {
      query: UsersQueries.register,
      variables: data,
    };

    if (checkFormInputs()) {
      return await graphpQLAPI(graphqlQuery)
        .then((res) => {
          if (res.data.errors) {
            setAlertChildren(res.data.errors[0]?.message);
            setAlertType("error");
            setTimeOut(setTimeout(() => setOpenAlert(false), alertTimeOut));
            setOpenAlert(true);
          } else {
            navigate("/login", { state: { alertMessage: `The user ${data.username} was registered.` } });
          }
        })
        .catch((err) => {
          console.log(err);
          setAlertChildren(
            "An unexpected error has occurred please try again later."
          );
          setAlertType("error");
          setTimeOut(setTimeout(() => setOpenAlert(false), alertTimeOut));
          setOpenAlert(true);
        });
    }
    return;
  };

  // validator function
  const checkFormInputs = () => {
    if (!data.username || !data.displayName || !data.email || !data.password) {
      setAlertChildren("Please complete the registration form to continue.");
      setAlertType("danger");
      setTimeOut(setTimeout(() => setOpenAlert(false), alertTimeOut));
      setOpenAlert(true);
      return false;
    }
    if (!validateEmail(data.email)) {
      setAlertChildren("Please enter a valid email to continue.");
      setAlertType("danger");
      setTimeOut(setTimeout(() => setOpenAlert(false), alertTimeOut));
      setOpenAlert(true);
      return false;
    }
    if (!validatePassword(data.password)) {
      setAlertChildren("Please enter a valid password to continue.");
      setAlertType("danger");
      setTimeOut(setTimeout(() => setOpenAlert(false), alertTimeOut));
      setOpenAlert(true);
      return false;
    }
    if (data.password !== confirmPassword) {
      setAlertChildren("Passwords must be the same.");
      setAlertType("danger");
      setTimeOut(setTimeout(() => setOpenAlert(false), alertTimeOut));
      setOpenAlert(true);
      return false;
    }
    return true;
  };

  return (
    <div className="register">
      <WG_AlertToast
        active={openAlert}
        setOpen={setOpenAlert}
        type={alertType}
        children={alertChildren}
      />
      <div className="register__card">
        <div className="register__card_header">
          <h2>Register Account</h2>
        </div>
        <div className="register__card_form">
          <div className="row mb-35">
            <p>Please enter your information to register on the site</p>
          </div>
          <div className="register__card_form__slider">
            <div className="register__card_form__slider__section--show" id="1">
              <div className="row rel mb-35">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username..."
                  className="register__card_form__slider__section_field"
                  onChange={(e) => handleInputChange(e)}
                  required
                />
                <label
                  htmlFor="username"
                  className="register__card_form__slider__section_label"
                >
                  User
                </label>
              </div>
              <div className="row rel mb-35">
                <input
                  type="text"
                  name="displayName"
                  placeholder="Enter your name..."
                  className="register__card_form__slider__section_field"
                  onChange={(e) => handleInputChange(e)}
                  required
                />
                <label
                  htmlFor="displayName"
                  className="register__card_form__slider__section_label"
                >
                  Name
                </label>
              </div>
              <div className="register__card_form__slider__section_btn">
                <WG_IconButton
                  children={<FaArrowRight />}
                  type={"primary"}
                  size={"md"}
                  action={(e) => sliderForm(e)}
                />
              </div>
            </div>
            <div className="register__card_form__slider__section" id="2">
              <div className="row rel mb-35">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  className="register__card_form__slider__section_field"
                  onChange={(e) => handleInputChange(e)}
                  required
                />
                <label
                  htmlFor="email"
                  className="register__card_form__slider__section_label"
                >
                  Email
                </label>
              </div>
              <div className="row rel mb-35">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  className="register__card_form__slider__section_field"
                  onChange={(e) => handleInputChange(e)}
                  required
                />
                <label
                  htmlFor="password"
                  className="register__card_form__slider__section_label"
                >
                  Password
                </label>
              </div>
              <div className="row rel mb-35">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password..."
                  className="register__card_form__slider__section_field"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <label
                  htmlFor="confirmPassword"
                  className="register__card_form__slider__section_label"
                >
                  Confirm password
                </label>
              </div>
              <div className="register__card_form__slider__section_btn">
                <WG_IconButton
                  children={<FaArrowLeft />}
                  type={"primary"}
                  size={"md"}
                  action={(e) => sliderForm(e)}
                />
              </div>
              <div className="row">
                <WG_Button
                  children={"Register"}
                  type={"primary"}
                  size={"md"}
                  action={(e) => registerUser(e)}
                />
              </div>
            </div>
          </div>
          <div className="register__card_image">
            <img src={like_icon} alt="like icon" />
          </div>
          <div className="register__card_footer">
            <p>Already have an account?</p>
            <p onClick={() => navigate("/login")}>Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
};
