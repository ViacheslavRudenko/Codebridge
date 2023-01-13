import { ReactElement } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Articles from "../../Pages/HomePage/Articles";
import Article from "../../Pages//ArticlePage/Article";

const Routing: React.FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/articles" />}></Route>
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  );
};

export default Routing;
