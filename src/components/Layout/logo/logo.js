import TasksLogo from "../../../assets/img/iconLogo.png";
import { ImgStyle } from "./logo.styled";

const Logo = (props) => {

    return (
        <div>
            <ImgStyle src={TasksLogo}></ImgStyle>
        </div>
    );
}


export default Logo;