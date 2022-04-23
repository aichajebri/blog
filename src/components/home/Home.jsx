import React from "react";
import Header from "../header/Header";
import Articles from "../articles/Articles";
import Banner from "../banner/Banner";
import Sidebar from "../sidebar/Sidebar";
import "./Home.css";
function Home() {
  const [titlesearch, settitlesearch] = React.useState("");
  const [articlename, setarticlename] = React.useState("");

  return (
    <div className="App">
      <div>
        <Header
          titlesearch={titlesearch}
          articlename={articlename}
          setarticlename={setarticlename}
          settitlesearch={settitlesearch}
        />
        <div className="Home">
          <Banner />
          <Articles />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
