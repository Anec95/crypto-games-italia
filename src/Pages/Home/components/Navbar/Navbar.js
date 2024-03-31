import { StyledNavbar, StyledLogoMenu } from "Pages/Home/styledComponents/styledHome";
import logoMenu from "Assets/img/logo_removebg.png"
import logoName from "Assets/img/name_removebg.png"

function Navbar() {

    return (
        <StyledNavbar>
            <StyledLogoMenu
                src={logoMenu} 
                type={"logo"} 
                alt="logo"
            />
            <StyledLogoMenu
                src={logoName}
                alt="logo"
            />
        </StyledNavbar>
    )
}

export default Navbar