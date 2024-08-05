import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext} from '../../UserContext';
import MinhasFotos from '../../Assests/feed.svg?react';
import Estatisticas from '../../Assests/estatisticas.svg?react';
import AdicionarFoto from '../../Assests/adicionar.svg?react';
import Sair from '../../Assests/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import useMedia from "../../Helper/useMedia";

const UserHeaderNav = () => {
    const {userLogout} = React.useContext(UserContext);
    const navigate = useNavigate();
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu,setMobileMenu] = React.useState(false);

    const {pathname} = useLocation();
    React.useEffect(()=> {
        setMobileMenu(false);
    }, [pathname]);

    function handleLogout(){
        userLogout();
        navigate('/login');
    }

    return (
        <>
            {mobile &&
                (
                    <button 
                        aria-label="Menu"
                        className={`${styles.mobileButton} ${
                            mobileMenu && styles.mobileButtonActive
                        }`}
                        onClick={()=> setMobileMenu(!mobileMenu)} >
                    </button>
                )
            }
            <nav 
                className={`${mobile ? styles.navMobile : styles.nav} ${
                    mobileMenu && styles.navMobileActive
                }`}
            >
                <NavLink to='/conta' end>
                    <MinhasFotos />
                    {mobile && 'Minhas Fotos'}
                </NavLink>    
                <NavLink to='/conta/estatisticas' > 
                    <Estatisticas />
                    {mobile && 'Estatisticas'}
                </NavLink>    
                <NavLink to='/conta/postar' > 
                    <AdicionarFoto />
                    {mobile && 'Adicionar Foto'}
                </NavLink>
                <button onClick={handleLogout}>
                    <Sair />
                    {mobile && 'Sair'}
                </button> 
            </nav>
        </>
    );
}

export default UserHeaderNav;
