import React, {useState, useEffect} from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import "./styles.css";
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);
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
    <div>
        <IconButton onClick={()=>setOpen(true)}>
            <MenuRoundedIcon className="link"/>
        </IconButton>
        <Drawer anchor={'right'} open={open} onClose={()=>setOpen(false)}>
            <div className='drawer-div'>
                <Switch checked={darkMode} onChange={changeTheme}/>
                <Link to="/">
                    <p className="link">Home</p>
                </Link>
                <Link to="/watchlist">
                    <p className="link">Watchlist</p>
                </Link>
                <Link to="/dashboard">
                    <p className="link">Dashboard</p>
                </Link>
            </div> 
        </Drawer>
    </div>
  );
}
