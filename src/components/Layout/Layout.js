import Logo from "./logo/logo";
import Nav from "./nav/nav";
import { LayoutStyle, LayoutStyleContainer } from "./Layout.styled";

const Layout = (props) => {

    return (
        <LayoutStyle>
            <LayoutStyleContainer>
                <Logo />
                <Nav />
            </LayoutStyleContainer>
        </LayoutStyle>
    );

}


export default Layout;