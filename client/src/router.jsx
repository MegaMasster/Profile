import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import { useState } from "react";
import SignUpPage from "./pages/authPage/signUpPage";
import IndexPage from "./pages/indexPage/indexPage.jsx"
import SignInPage from "./pages/authPage/signInPage.jsx"
import NotFounPage from "./pages/notFoundPage/notFoundPage.jsx"

const Router = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <BrowserRouter>

            <Routes>

                <Route path="/" element={isAuthenticated ? <Navigate to="/index"/> : <Navigate to="/sign-in"/>}/>
                <Route path="/index" element={isAuthenticated ? <IndexPage setIsAuthenticated={setIsAuthenticated}/> : <Navigate to="/sign-in"/>}/>
                <Route path="/sign-up" element={isAuthenticated ? <Navigate to="/index"/> : <SignUpPage/>}/>
                <Route path="/sign-in" element={isAuthenticated ? <Navigate to="/index"/> : <SignInPage/>}/>
                <Route path="*" element={<NotFounPage/>}/>

            </Routes>


        </BrowserRouter>
    )
}
export default Router