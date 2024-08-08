import React from "react";
// import styles from './Footer.module.css';
import Feed from './Feed/Feed';
import Loading from "../Helper/Loading";

const NotFound = () => {
    return (
        <div className="container mainContainer">
            <h1 className="title" >Erro: 404</h1>
            <p>Página não encontrada.</p>
        </div>
    );
};

export default NotFound;
