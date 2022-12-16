import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// consume
import { LoginUser } from "../features/auth/userSlice";

// Components
import { WG_Button } from "../components/WG_Button/WG_Button";

// api queries
import { UsersQueries } from "../utils/userQueries";

// aux functions
import { validateEmail } from "../utils/functions";
import { WG_AlertToast } from "../components/WG_AlertToast/WG_AlertToast";

// variables
import { alertTimeOut } from "../utils/variables";

export const Login = ({ alertMessage, ...props }) => {
  const dispatch = useDispatch();

  // useState
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // alert states
  const [TimeOut, setTimeOut] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertChildren, setAlertChildren] = useState("");

  // uneNavigate
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.alertMessage) {
      setAlertChildren(location.state.alertMessage);
      setAlertType("success");
      setTimeOut(setTimeout(() => setOpenAlert(false), alertTimeOut));
      setOpenAlert(true);
    }

    location.state = null;
  }, [location]);

  // handle funct
  const handleInputChange = (event) => {
    event.preventDefault();

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // onClick funct
  const login = async (event) => {
    event.preventDefault();

    setOpenAlert(false);
    clearTimeout(TimeOut);

    const graphqlQuery = {
      query: UsersQueries.login,
      variables: data,
    };

    if (checkFormInputs()) {
      dispatch(LoginUser(graphqlQuery))
        .then((res) => res)
        .then((res) => {
          if (res.payload[0]?.message) {
            setAlertChildren(res.payload[0].message);
            setAlertType("error");
            setTimeOut(setTimeout(() => setOpenAlert(false), alertTimeOut));
            setOpenAlert(true);
          } else {
            navigate("/");
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
    if (!data.email || !data.password) {
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
    return true;
  };

  return (
    <div className="login">
      <WG_AlertToast
        active={openAlert}
        setOpen={setOpenAlert}
        type={alertType}
        children={alertChildren}
      />
      <div className="login__card rel">
        <div className="login__card_title">
          <h2>Login</h2>
        </div>
        <div className="login__card_form">
          <div className="row mb-35">
            <p>Please enter your email and password to access the site</p>
          </div>
          <div className="row rel mb-35">
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className="login__card_form_field"
              onChange={(e) => handleInputChange(e)}
              required
            />
            <label htmlFor="email" className="login__card_form_label">
              Email
            </label>
          </div>
          <div className="row rel mb-35">
            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              className="login__card_form_field"
              onChange={(e) => handleInputChange(e)}
              required
            />
            <label htmlFor="password" className="login__card_form_label">
              Password
            </label>
          </div>
          <div className="row">
            <WG_Button
              children={"Login"}
              type={"primary"}
              size={"md"}
              action={login}
            />
          </div>
        </div>
        <div className="login__card_footer">
          <p>Need an account?</p>
          <p onClick={() => navigate("/register")}>Sign up</p>
        </div>
      </div>
    </div>
  );
};
