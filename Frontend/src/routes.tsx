import { BrowserRouter, Routes, Route } from "react-router-dom";

import Default from './style';

import Login from "./Views/Login";
import CreateAccount from "./Views/CreateAccount";
import Home from "./Views/Home";

export default function Router(){
    return (
        <BrowserRouter>
            <Default />
            {/* <AuthProvider> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nova-conta" element={<CreateAccount />} />
                </Routes>
            {/* </AuthProvider> */}
        </BrowserRouter>
    );
}