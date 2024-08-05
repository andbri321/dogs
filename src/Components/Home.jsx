import React from "react";
// import styles from './Footer.module.css';
import Feed from './Feed/Feed';
import Loading from "../Helper/Loading";

const Home = () => {
    return <section className="container mainContainer">
        <Feed />
        {/* <Loading />  */}
    </section>
};

export default Home;
