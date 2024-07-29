import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Details from "./pages/details";
import Favorites from "./pages/favorites";
import GlobalState from "./context";
const App=()=>{
    return(
        <div>
            <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
                <Navbar/>
                <Routes>
                    <Route 
                    path="/"
                    element={
                        <Home/>
                    }
                    />
                </Routes>
                <Routes>
                    <Route
                    path="/recipe-item/:id"
                    element={
                        <Details/>
                    }
                    />
                </Routes>
                <Routes>
                    <Route
                    path="/favorites"
                    element={
                        <Favorites/>
                    }
                    />
                </Routes>
            </div>
        </div>
    )
}
const root=document.getElementById("root");
ReactDOM.render(
<BrowserRouter><GlobalState><App/></GlobalState></BrowserRouter>,root);