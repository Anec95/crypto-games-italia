import { Link } from "react-router-dom";
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
    padding: 5px;
    margin-top: ${props =>
        props.type === "logo" ? "60px" :
        "0"
    };

    animation: imgAnimation 15s infinite;
    /* animation: imgAnimation 1s infinite; */

    /* @keyframes imgAnimation {
        25% {
            box-shadow: 0px 0px 10px var(--flamingo);
        }
        50% {
            box-shadow: 0px 0px 10px blue;
        }
        75% {
            box-shadow: 0px 0px 10px var(--green);
        }
    } */

    @keyframes imgAnimation {
        20% {
            box-shadow: 0px 0px 100px var(--flamingo);
        }
        40% {
            box-shadow: 0px 0px 100px blue;
        }
        60% {
            box-shadow: 0px 0px 100px var(--green);
        }
        80% {
            box-shadow: 0px 0px 100px var(--red);
        }
    }

    border: 5px double var(--orange);
    border-radius: 12px;
    border-bottom: ${props =>
        props.type === "logo" ? "0" :
        ""
    };
    box-shadow: 0px 0px 100px var(--orange);

    animation: borderAnimation 15s infinite;
    /* animation: borderAnimation 1s infinite; */

    /* @keyframes borderAnimation {
        25% {
            box-shadow: 0px 0px 100px var(--flamingo);
            border-color: var(--flamingo);
        }
        50% {
            box-shadow: 0px 0px 100px blue;
            border-color: blue;
        }
        75% {
            box-shadow: 0px 0px 100px var(--green);
            border-color: var(--green);
        }
    } */

    @keyframes borderAnimation {
        20% {
            box-shadow: 0px 0px 100px var(--flamingo);
            border-color: var(--flamingo);
        }
        40% {
            box-shadow: 0px 0px 100px blue;
            border-color: blue;
        }
        60% {
            box-shadow: 0px 0px 100px var(--green);
            border-color: var(--green);
        }
        80% {
            box-shadow: 0px 0px 100px var(--red);
            border-color: var(--red);
        }
    }
`

export const StyledMenu = styled.div`
    width: 50%;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
`

export const StyledLink = styled(Link)`
    font-family: "Smokum";
    text-decoration: none;
    padding-top: 20px;
    /* color: var(--orange); */
    color: var(--white);
    text-shadow: 0px 0px 10px var(--orange);
    font-size: 36px;
    font-variant: small-caps;
    letter-spacing: 4px;

	animation: textAnimation 15s infinite;
	/* animation: textAnimation 1s infinite; */

    /* @keyframes textAnimation {
        25% {
            text-shadow: 0px 0px 10px var(--flamingo);
        }
        50% {
            text-shadow: 0px 0px 10px blue;
        }
        75% {
            text-shadow: 0px 0px 10px var(--green);
        }
    } */

    @keyframes textAnimation {
        20% {
            text-shadow: 0px 0px 10px var(--flamingo);
        }
        40% {
            text-shadow: 0px 0px 10px blue;
        }
        60% {
            text-shadow: 0px 0px 10px var(--green);
        }
        80% {
            text-shadow: 0px 0px 10px var(--red);
        }
    }
`

export const Empty = styled.div`
    width: 20%;
`

export const StyledContainer = styled.div`
    flex: 1;
    height: 70%;
    background-color: var(--white);
    border-radius: 12px;
    border: 5px double var(--orange);
    box-shadow: 0px 0px 100px var(--orange);

    animation: mymove 15s infinite;
    /* animation: mymove 1s infinite; */

    /* @keyframes mymove {
        25% {
            box-shadow: 0px 0px 100px var(--flamingo);
            border-color: var(--flamingo);
        }
        50% {
            box-shadow: 0px 0px 100px blue;
            border-color: blue;
        }
        75% {
            box-shadow: 0px 0px 100px var(--green);
            border-color: var(--green);
        }
    } */

    @keyframes mymove {
        20% {
            box-shadow: 0px 0px 100px var(--flamingo);
            border-color: var(--flamingo);
        }
        40% {
            box-shadow: 0px 0px 100px blue;
            border-color: blue;
        }
        60% {
            box-shadow: 0px 0px 100px var(--green);
            border-color: var(--green);
        }
        80% {
            box-shadow: 0px 0px 100px var(--red);
            border-color: var(--red);
        }
    }
`