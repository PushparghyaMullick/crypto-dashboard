import React, {useState} from "react";
import "./styles.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({ onSearch }) => {
    const [enteredSearch, setEnteredSearch] = useState("")

    return (
        <div className="search-flex">
            <SearchRoundedIcon />
            <input type="text" placeholder="Search for a coin" onChange={(e) => {
                setEnteredSearch(e.target.value)
                onSearch(e.target.value)
            }} 
            value={enteredSearch}/>
        </div>
    );
}

export default Search;