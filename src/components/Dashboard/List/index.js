import React, {useState} from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/convertNumbers";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const List = ({ coin }) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"))
    const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id))

    return (
        <Link to={`/coin/${coin.id}`}>
            <tr className="list-row">
                <Tooltip title="Coin Logo" placement="bottom-start">
                    <td className="td-image">
                        <img src={coin.image} className="coin-logo" />
                    </td>
                </Tooltip>
                <Tooltip title="Coin Info" placement="bottom-start">
                    <td>
                        <div className="name-col">
                            <p className="coin-symbol">{coin.symbol}</p>
                            <p className="coin-name">{coin.name}</p>
                        </div>
                    </td>
                </Tooltip>
                <Tooltip title="Price Change in 24Hrs" placement="bottom-start">
                    {coin.price_change_percentage_24h >= 0 ?
                        (<td className="chip-flex">
                            <div className="price-chip">
                                +{coin.price_change_percentage_24h.toFixed(2)}%
                            </div>
                            <div className="icon-chip td-icon">
                                <TrendingUpRoundedIcon />
                            </div>
                        </td>) :
                        (<td className="chip-flex">
                            <div className="price-chip chip-red">
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </div>
                            <div className="icon-chip chip-red td-icon">
                                <TrendingDownRoundedIcon />
                            </div>
                        </td>)
                    }</Tooltip>
                <Tooltip title="Current Price" placement="bottom">
                    <td>
                        <h3 className="coin-price td-center-align" style={{ color: coin.price_change_percentage_24h >= 0 ? "var(--green)" : "var(--red)" }}>
                            ${coin.current_price.toLocaleString()}
                        </h3>
                    </td>
                </Tooltip>
                <Tooltip title="Total Volume" placement="bottom">
                    <td className="td-total-volume">
                        <p className="total_volume td-right-align">
                            {coin.total_volume.toLocaleString()}
                        </p>
                    </td>
                </Tooltip>
                <Tooltip title="Market Cap" placement="bottom">
                    <td className="td-market-cap">
                        <p className="market_cap td-right-align long-price">
                            ${coin.market_cap.toLocaleString()}
                        </p>
                        <p className="market_cap td-right-align converted-price">
                            ${convertNumbers(coin.market_cap)}
                        </p>
                    </td>
                </Tooltip>
                <td className={`watchlist-icon ${coin.price_change_percentage_24h < 0 && "watchlist-icon-red"}`}
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
                </td>
            </tr>
        </Link>
    )
}

export default List;