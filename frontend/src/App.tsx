import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";

function App() {
    return <main>
        <div className="album py-5">
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>

    </main>
}

export default App;
