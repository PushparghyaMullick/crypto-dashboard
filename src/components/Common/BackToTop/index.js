import React from "react";
import './styles.css';
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

const BackToTop = () => {
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "flex";
        } else {
            mybutton.style.display = "none";
        }
    }

    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="back-to-top" onClick={scrollTop} id="myBtn">
            <ExpandLessRoundedIcon />
        </div>
    );
}

export default BackToTop;