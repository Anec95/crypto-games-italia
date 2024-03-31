import MainConteiner from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import { Empty, StyledMain } from "./styledComponents/styledHome";


function Home() {

    return(
        <StyledMain>
            <Navbar />
            <MainConteiner />
            <Empty />
        </StyledMain>
    )
}

export default Home