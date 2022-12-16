import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

// React icons
import { FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BsHeartFill } from "react-icons/bs";
import { MdAddComment } from "react-icons/md";
import { BiCommentX } from "react-icons/bi";

// variables
import { PostsQueries } from "../utils/postQueries";
import { monthFormat } from "../utils/variables";

import { graphpQLAPI } from "../services/api";

// Components
import { WG_IconButton } from "../components/WG_IconButton/WG_IconButton";
import { WG_TextArea } from "../components/WG_TextArea/WG_TextArea";

export const ViewPost = () => {
  let { postId } = useParams({});

  // redux useSelector
  const user = useSelector((state) => state.user);

  // useState
  const [data, setData] = useState();
  const [dataForm, setDataForm] = useState({ comment: "", postId: postId });

  // uneNavigate
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(postId);
  }, [postId]);

  // handle funct
  const handleInputChange = (event) => {
    event.preventDefault();

    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const fetchData = async (id) => {
    const data = {
      id: id,
    };

    const graphqlQuery = {
      query: PostsQueries.post,
      variables: data,
    };

    return await graphpQLAPI(graphqlQuery)
      .then((res) => {
        setData(res.data.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDataComments = async (id) => {
    const data = {
      id: id,
    };

    const graphqlQuery = {
      query: PostsQueries.post,
      variables: data,
    };

    return await graphpQLAPI(graphqlQuery)
      .then((res) => {
        setData(res.data.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // postInfo date formater
  const dayPost = new Date(parseInt(data?.createDate)).getDate();
  const monthPost = new Date(parseInt(data?.createDate)).getMonth();
  const yearPost = new Date(parseInt(data?.createDate)).getFullYear();

  // clear inputs funct
  const clearInputForm = () => {
    setDataForm({
      comment: "",
      postId: data.id,
    });
  };

  // onClick funct
  const createComment = async (event) => {
    event.preventDefault();

    const graphqlQuery = {
      query: PostsQueries.createComment,
      variables: dataForm,
    };

    if (checkFormInputs()) {
      return await graphpQLAPI(graphqlQuery)
        .then((res) => {
          clearInputForm();
          fetchDataComments(data.id);
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
    if (!dataForm.comment) {
      return false;
    }
    return true;
  };

  return (
    <div className="container">
      <div className="post">
        <div className="post__content">
          <div className="post__content_header">
            <div className="post__content_header_btn">
              <WG_IconButton
                children={<FaArrowLeft />}
                size={"md"}
                action={() => navigate("/")}
              />
            </div>
            <div className="post__content_header_info">
              <h2>{data?.title}</h2>
              <small>
                by {data?.author.displayName},{" "}
                <i>{`${dayPost} ${monthFormat[monthPost]} ${yearPost}`}.</i>
              </small>
            </div>
          </div>
          <div className="post__content_body">
            <p>{data?.body}</p>
          </div>
        </div>
        <div className="post__react">
          <div className="post__react_reactions">
            <div className="post__react_reactions_content">
              <IconContext.Provider
                value={{
                  color: "#ff1744",
                  size: "18px",
                }}
              >
                <BsHeartFill />
              </IconContext.Provider>{" "}
              <strong>{data?.likes}</strong>
            </div>
          </div>
          <div className="post__react_comments">
            {data?.comments.length > 0 ? (
              data.comments.map((comment) => (
                <div
                  className={
                    user.data?.id === comment.user.id
                      ? "post__react_comments_content owner"
                      : "post__react_comments_content"
                  }
                  key={comment.id}
                >
                  <div className="post__react_comments_content_icon">
                    {comment.user.displayName[0]}
                  </div>
                  <div className="post__react_comments_content_info">
                    {comment.comment}
                  </div>
                </div>
              ))
            ) : (
              <div className="post__react_comments_notfound">
                <h2>No comments</h2>
              </div>
            )}
          </div>
          <div className="post__react_comment">
            {user.isLogin && (
              <div className="post__react_comment_content">
                <WG_TextArea
                  name={"comment"}
                  rows={4}
                  placeholder={"Your comment..."}
                  value={dataForm.comment}
                  handleChange={(e) => handleInputChange(e)}
                />
                <WG_IconButton
                  type={"primary"}
                  children={<MdAddComment />}
                  action={(e) => createComment(e)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
