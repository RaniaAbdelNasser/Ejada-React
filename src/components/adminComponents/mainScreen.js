import React, { useEffect, useState } from "react";
import Footer from "./../commanComponents/footer";

import SidebarAdmin from "./sidebarAdmin";
import Header from "./../commanComponents/header";
import { Spinner } from "react-bootstrap";

const MainScreen = () => {
  const tokenKey = "token";
  const isAuthanticted = localStorage.getItem(tokenKey);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (isAuthanticted == null || isAuthanticted == "") {
      window.location.pathname = "/";
    } else {
      setloading(false);
    }
  }, []);
  return (
    <div className="grid-container">
      {loading ? (
        <Spinner animation="border" variant="secondary" size="lg" />
      ) : (
        <div>
          <Header />
          <SidebarAdmin />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainScreen;
