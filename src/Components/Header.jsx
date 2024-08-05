import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import Dogs from '../Assests/dogs.svg?react';
import { UserContext } from "../UserContext";
import { TOKEN_POST, USER_GET } from "../Api";

const Header = () => {
    const { data } = React.useContext(UserContext);

    return (
        <div className={styles.header} >
            <nav className={`${styles.nav} container`} >
                <Link className={styles.logo} to='/' aria-label="Dogs - Home"> 
                    <Dogs />
                </Link>
                
                {data ? 
                    (
                        <Link className={styles.login} to='/login'> 
                            {data.nome}
                        </Link>
                    ):(
                        <Link className={styles.login} to='/login'> 
                            Login / Criar
                        </Link>
                    )
                }
            </nav>
        </div>
    );
}

export default Header;
