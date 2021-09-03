import * as React from "react";

import Layout from "../components/layout.component";
import Navbar from "../components/navbar/navbar.component";
import Header from "../components/header/header.component";
import WhyUs from "../components/why-us/why-us.component"; 
import OurWork from "../components/our-work/our-work.component";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Header />
        <WhyUs />
        <OurWork />
      </Layout>
    </>
  );
};

export default IndexPage;
