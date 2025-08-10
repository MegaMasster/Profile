import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import { useState } from "react";
import SignUpPage from "./pages/authPage/signUpPage";
import IndexPage from "./pages/indexPage/indexPage.jsx"

const Router = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isAuthenticated ? <IndexPage/> : <SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router