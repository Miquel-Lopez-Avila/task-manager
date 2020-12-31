import { useContext } from "react";
import { NavList, Button, Link } from "./nav.styled";
import { I18nContext } from "../../../config/language";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    const { messages, language } = useContext(I18nContext);

    return (
        <div>
            <NavList>
                <li><Link to='/' exact>{messages[language].NavIteam}</Link></li>
                <li><NavLink to='/posts'><Button>{messages[language].NavIteamButton}</Button></NavLink></li>
            </NavList>
        </div>
    );
}


export default Nav;