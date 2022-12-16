import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ListPosts } from "../pages/ListPosts";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { ViewPost } from "../pages/ViewPost";
import { ErrorPage } from "../pages/ErrorPage";
import { RouterLayout } from "./RouterLayout";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RouterLayout />}>
          <Route path="/" element={<ListPosts />} />
          <Route exact path="/post/:postId" element={<ViewPost />} />
          <Route exact path="/profile/:userId" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
