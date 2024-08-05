import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className={styles.button} >
            {children}
        </button>
    )
}

export default Button;
