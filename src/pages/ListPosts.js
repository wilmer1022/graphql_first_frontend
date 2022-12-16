import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";

// Components
import { WG_PostCard } from "../components/WG_PostCard/WG_PostCard";
import { WG_PostForm } from "../components/WG_PostForm/WG_PostForm";

import { graphpQLAPI } from "../services/api";

// variables
import { PostsQueries } from "../utils/postQueries";

// React icons
import { IconContext } from "react-icons";
import { IoReloadOutline, IoSad } from "react-icons/io5";

export const ListPosts = () => {
  // redux useSelector
  const user = useSelector((state) => state.user);

  // useState
  const [postData, setPostData] = useState([]);
  const [mutation, setMutation] = useState(false);

  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
    setMutation(false);
  }, [mutation]);

  // fetch data
  async function fetchData() {
    const graphqlQuery = {
      query: PostsQueries.posts,
      variables: null,
    };

    await graphpQLAPI(graphqlQuery)
      .then((res) => {
        setPostData(res.data.data.posts);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="posts">
        {user.isLogin && (
          <WG_PostForm
            displayName={user.data.displayName}
            mutation={setMutation}
          />
        )}
        {postData.length > 0 ? (
          postData.map((post) => <WG_PostCard key={post.id} postInfo={post} />)
        ) : (
          <div className="posts__notfound">
            <div className="posts__notfound_header">
              <div className="posts__notfound_header_icon">S</div>
              <div className="posts__notfound_header_info">
                <h3>There is no post to show</h3>
                <small>by System.</small>
              </div>
            </div>
            <div className="posts__notfound_content">
              There was a problem loading the posts ヽ(ಠ_ಠ)ノ it may be due to
              an internet problem or something worse! a problem on the server
              (☉_☉) try reloading posts later.
            </div>
            <div className="posts__notfound_reactions">
              <IconContext.Provider
                value={{
                  color: "#6B6E70",
                  size: "18px",
                }}
              >
                <IoSad />
              </IconContext.Provider>{" "}
              <strong>+9999</strong>
            </div>
            <div className="posts__notfound_recharged">
              <IoReloadOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
