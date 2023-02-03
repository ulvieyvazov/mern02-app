import { Route, Routes } from "react-router"
import About from "../pages/About";
import Aybeniz from "../pages/Aybeniz";
import Home from "../pages/Home";
import News from "../pages/News";

const WebRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/news' element={<News />} />
            <Route path='/aybeniz' element={<Aybeniz />} />
        </Routes>
    )
}
export default WebRouter;
