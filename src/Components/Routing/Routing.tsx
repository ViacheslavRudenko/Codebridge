import { ReactElement } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Articles from "../../Pages/Articles/Articles";

const Routing: React.FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/articles" />}></Route>
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
};

export default Routing;
