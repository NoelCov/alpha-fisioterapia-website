import * as React from "react";

import Layout from "../components/layout.component";
import Navbar from "../components/navbar/navbar.component";
import Header from "../components/header/header.component";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Header />
      </Layout>
    </>
  );
};

export default IndexPage;
