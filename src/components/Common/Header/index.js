import React, {useState, useEffect} from "react";
import "./styles.css";
import AnchorTemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import Switch from '@mui/material/Switch';

const Header = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    );

    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    }

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    }

    useEffect(() => {
        if(localStorage.getItem("theme") === "dark") {
            setDark();
        } else { 
            setLight();
        }
    }, [])

    const changeTheme = () => {
        if(localStorage.getItem("theme") !== "dark") {
            setDark()
        } else {
            setLight()
        }
        setDarkMode(!darkMode)
    }

    return (
        <div className="navbar">
            <Link to="/">
                <h1 className="logo">
                    CryptoTracker<span style={{color: "var(--blue)"}}>.</span>
                </h1> 
            </Link>
            <div className="links">
                <Switch checked={darkMode} onChange={changeTheme}/>
                <Link to="/">
                    <p className="link">Home</p>
                </Link>
                <Link to="/watchlist">
                    <p className="link">Watchlist</p>
                </Link>
                <Link to="/dashboard">
                    <Button text="Dashboard" onClick={()=>console.log("Clicked")}/>
                </Link>
            </div>  
            <div className="mobile-menu">
                <AnchorTemporaryDrawer />
            </div>
        </div>
    )
}

export default Header;