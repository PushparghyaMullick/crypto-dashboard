export const removeFromWatchlist = (e, id, setIsCoinAdded) => {
    e.preventDefault();
    if(window.confirm("Are you sure you want to remove this coin from your watchlist?")){
        let watchlist = JSON.parse(localStorage.getItem("watchlist"));
        const newList = watchlist.filter((item) => item !== id);
        localStorage.setItem("watchlist", JSON.stringify(newList));
        setIsCoinAdded(false);
        window.location.reload();
    }
    else{
        setIsCoinAdded(true);
    }
}