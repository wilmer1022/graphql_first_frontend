import React, { useState } from "react";
import PropTypes from "prop-types";
import PostForm from "./PostForm.styled";

// components
import { WG_TextInput } from "../WG_TextInput/WG_TextInput";
import { WG_TextArea } from "../WG_TextArea/WG_TextArea";
import { WG_IconButton } from "../WG_IconButton/WG_IconButton";

// React icons
import { MdSend } from "react-icons/md";

// variables
import { alertTimeOut } from "../../utils/variables";
import { PostsQueries } from "../../utils/postQueries";

import { graphpQLAPI } from "../../services/api";

export const WG_PostForm = ({ displayName, mutation, ...props }) => {
  // useState
  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const [TimeOut, setTimeOut] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  // handle funct
  const handleInputChange = (event) => {
    event.preventDefault();

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const clearInputForm = () => {
    setData({
      title: "",
      body: "",
    });
  };

  // onClick funct
  const createPost = async (event) => {
    event.preventDefault();

    const graphqlQuery = {
      query: PostsQueries.createPost,
      variables: data,
    };

    setAlertMessage("");
    clearTimeout(TimeOut);

    if (checkFormInputs()) {
      return await graphpQLAPI(graphqlQuery)
        .then((res) => {
          clearInputForm();
          setAlertType("success_ms");
          setAlertMessage("Your previous post was created successfully");
          setTimeOut(setTimeout(() => setAlertMessage(""), alertTimeOut));
          mutation(true);
        })
        .catch((err) => {
          console.log(err);
          setAlertType("error_ms");
          setAlertMessage("There was a problem creating the post");
          setTimeOut(setTimeout(() => setAlertMessage(""), alertTimeOut));
        });
    } else {
      setAlertType("danger_ms");
      setAlertMessage("Enter title and content to create a post");
      setTimeOut(setTimeout(() => setAlertMessage(""), alertTimeOut));
    }
    return;
  };

  // validator function
  const checkFormInputs = () => {
    if (!data.title || !data.body) {
      return false;
    }
    return true;
  };

  return (
    <PostForm>
      <div className="postform__card_header">
        <div className="postform__card_header_icon">
          {displayName[0].toUpperCase()}
        </div>
        <div className="postform__card_header_info">
          <WG_TextInput
            name={"title"}
            type={"text"}
            placeholder={"Post title..."}
            value={data.title}
            handleChange={(e) => handleInputChange(e)}
          />
          <small>
            by you, <i>today.</i>
          </small>
        </div>
      </div>
      <div className="postform__card_content">
        <WG_TextArea
          name={"body"}
          rows={"7"}
          placeholder={"Post content..."}
          value={data.body}
          handleChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="postform__card_footer">
        {alertMessage && <span className={`alert__message ${alertType}`}>{alertMessage}</span>}
        <WG_IconButton
          children={<MdSend />}
          type={"primary"}
          size={"md"}
          action={(e) => createPost(e)}
        />
      </div>
    </PostForm>
  );
};

WG_PostForm.propTypes = {
  displayName: PropTypes.string,
  mutation: PropTypes.func,
};
