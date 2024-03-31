import styled from "styled-components";


export const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-image: -webkit-linear-gradient(top right, #03172b 0%, #021f2c 25%, #021f2c 50%, #062d3f 75%, #072e41  100%);
    background-image: -webkit-linear-gradient(top right, #3652AD 0%, #021f2c 25%, #021f2c 50%, #0C2D57 75%, #3652AD  100%);
    display: flex;
    align-items: center;

    background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    user-select: none; 
`

export const StyledNavbar = styled.nav`
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export const StyledLogoMenu = styled.img`
    width: 40%;
    padding-top: ${props =>
        props.type === "logo" ? "60px" :
        "0"
    }
`

export const StyledMenu = styled.div`

`

export const Empty = styled.div`
    width: 20%;
`

export const StyledContainer = styled.div`
    flex: 1;
    height: 70%;
    background-color: #F1F1E6;
    border-radius: 12px;
    border: 5px double var(--orange);
    box-shadow: 0px 0px 100px var(--orange);
    animation: mymove 8s infinite;

    @keyframes mymove {
        25% {
            box-shadow: 0px 0px 100px var(--flamingo);
            border-color: var(--flamingo);
        }
        50% {
            box-shadow: 0px 0px 100px var(blue);
            border-color: var(blue);
        }
        75% {
            box-shadow: 0px 0px 100px var(--green);
            border-color: var(--green);
        }
    }
`