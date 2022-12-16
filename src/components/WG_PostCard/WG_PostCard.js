import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import PostCard from "./PostCard.styled";

// React icons
import { IconContext } from "react-icons";
import { BsHeartFill } from "react-icons/bs";
import { MdAddComment } from "react-icons/md";
import { BiCommentX } from "react-icons/bi";

// components
import { WG_TextInput } from "../WG_TextInput/WG_TextInput";
import { WG_IconButton } from "../WG_IconButton/WG_IconButton";

// variables
import { PostsQueries } from "../../utils/postQueries";
import { monthFormat } from "../../utils/variables";

import { graphpQLAPI } from "../../services/api";

export const WG_PostCard = ({ postInfo, ...props }) => {
  // redux useSelector
  const user = useSelector((state) => state.user);

  // useState
  const [data, setData] = useState({
    comment: "",
    postId: postInfo.id,
  });

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

  // postInfo date formater
  const dayPost = new Date(parseInt(postInfo.createDate)).getDate();
  const monthPost = new Date(parseInt(postInfo.createDate)).getMonth();
  const yearPost = new Date(parseInt(postInfo.createDate)).getFullYear();

  // clear inputs funct
  const clearInputForm = () => {
    setData({
      comment: "",
      postId: postInfo.id,
    });
  };

  // onClick funct
  const createComment = async (event) => {
    event.preventDefault();

    const graphqlQuery = {
      query: PostsQueries.createComment,
      variables: data,
    };

    if (checkFormInputs()) {
      return await graphpQLAPI(graphqlQuery)
        .then((res) => {
          clearInputForm();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
    return;
  };

  // validator function
  const checkFormInputs = () => {
    if (!data.comment) {
      return false;
    }
    return true;
  };

  return (
    <PostCard>
      <div className="posts__card_header">
        <div className="posts__card_header_icon">
          {postInfo.author.displayName[0].toUpperCase()}
        </div>
        <div className="posts__card_header_info">
          <h3>{postInfo.title}</h3>
          <small>
            by {postInfo.author.displayName},{" "}
            <i>{`${dayPost} ${monthFormat[monthPost]} ${yearPost}`}.</i>
          </small>
        </div>
      </div>
      <div
        className="posts__card_content"
        onClick={() => navigate(`/post/${postInfo.id}`)}
      >
        {postInfo.body}
      </div>
      <div className="posts__card_reactions">
        <IconContext.Provider
          value={{
            color: "#ff1744",
            size: "18px",
          }}
        >
          <BsHeartFill />
        </IconContext.Provider>{" "}
        <strong>{postInfo.likes}</strong>
      </div>
      <div className="posts__card_comments">
        {postInfo.comments.length > 0 ? (
          postInfo.comments.map((comment) => (
            <div
              className={
                user.data?.id === comment.user.id
                  ? "posts__card_comments_content owner"
                  : "posts__card_comments_content"
              }
              key={comment.id}
            >
              <div className="posts__card_comments_content_icon">
                {comment.user.displayName[0]}
              </div>
              <div className="posts__card_comments_content_info">
                {comment.comment}
              </div>
            </div>
          ))
        ) : (
          <div className="posts__card_comments_notfound">
            <h2>No comments</h2>
          </div>
        )}
        <div className="posts__card_comments_field">
          {user.isLogin ? (
            <React.Fragment>
              <WG_TextInput
                name={"comment"}
                type={"text"}
                placeholder={"Your comment..."}
                value={data.comment}
                handleChange={(e) => handleInputChange(e)}
              />
              <WG_IconButton
                children={<MdAddComment />}
                type={"primary"}
                action={(e) => createComment(e)}
              />
            </React.Fragment>
          ) : (
            <div className="posts__card_comments_field_notloggedin">
              <IconContext.Provider
                value={{
                  color: "#ff8f00",
                  size: "24px",
                }}
              >
                <BiCommentX />
              </IconContext.Provider>{" "}
              <strong>You need to be logged in to comment on this post.</strong>
            </div>
          )}
        </div>
      </div>
      <div className="posts__card_footer">
        <strong>Read more comments</strong>
      </div>
    </PostCard>
  );
};

WG_PostCard.propTypes = {
  postInfo: PropTypes.object.isRequired,
};
