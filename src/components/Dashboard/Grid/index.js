import React, {useState} from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { addToWatchlist } from "../../../functions/addToWatchlist";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";

const Grid = ({ coin }) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"))
    const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id))

    return (
        <Link to={`/coin/${coin.id}`}>
            <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`
            }>
                <div className="info-flex">
                    <img src={coin.image} className="coin-logo" />
                    <div className="name-col">
                        <p className="coin-symbol">{coin.symbol}</p>
                        <p className="coin-name">{coin.name}</p>
                    </div>
                    <div className={`watchlist-icon ${coin.price_change_percentage_24h<0 && "watchlist-icon-red"}`}
                    onClick={(e) => {
                        if (isCoinAdded) {
                            removeFromWatchlist(e, coin.id, setIsCoinAdded)
                        } else {
                            addToWatchlist(e, coin.id)
                            setIsCoinAdded(true)
                        }
                    }}
                    >
                        {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
                    </div>
                </div>
                {coin.price_change_percentage_24h >= 0 ?
                    (<div className="chip-flex">
                        <div className="price-chip">
                            +{coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className="icon-chip">
                            <TrendingUpRoundedIcon />
                        </div>
                    </div>) :
                    (<div className="chip-flex">
                        <div className="price-chip chip-red">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className="icon-chip chip-red">
                            <TrendingDownRoundedIcon />
                        </div>
                    </div>)
                }
                <div className="info-container">
                    <h3 className="coin-price" style={{ color: coin.price_change_percentage_24h >= 0 ? "var(--green)" : "var(--red)" }}>
                        ${coin.current_price.toLocaleString()}
                    </h3>
                    <p className="total_volume">
                        Total Volume : {coin.total_volume.toLocaleString()}
                    </p>
                    <p className="market_cap">
                        Market Cap : ${coin.market_cap.toLocaleString()}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Grid;