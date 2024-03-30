import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from "react-router"
import Home from "Pages/Home/Home";

function App() {
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={< />} /> */}
            </Routes>        
        </AnimatePresence>
    )
}

export default App