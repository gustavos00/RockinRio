import React from "react";

import Container from "../components/Container/container";
import Header from "../components/Header/header";
import Search from "../components/Search/search";
import MainEvent from "../components/MainEvent/mainEvent";
import NextEvents from "../components/NextEvents/NextEvents";
import Footer from "../components/Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <Container>
        <Search />
        <MainEvent />
        <NextEvents />
      </Container>
      <Footer />
    </>
  );
}

export default Main;
