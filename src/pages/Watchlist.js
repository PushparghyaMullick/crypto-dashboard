import React, {useState, useEffect} from "react";
import { get100Coins } from "../functions/get100Coins";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/TabsComponent";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";
import { Link } from "react-router-dom";
import Button from "../components/Common/Button";

const WatchlistPage = () => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        const data = await get100Coins();
        if(data){
            const watchListData = data.filter((coin) => watchlist.includes(coin.id));
            setCoins(watchListData);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if(watchlist){
            getData();
        }
    }, [])

    return (
        <div>
            <Header />
            <BackToTop />
            {isLoading && <Loader />}
            {!isLoading && watchlist?.length>0 &&
                <TabsComponent coins={coins} />
            }
            {!isLoading && watchlist?.length===0 &&
                <div>
                    <h1 style={{ textAlign: "center" }}>
                        Sorry, No Items In The Watchlist.
                    </h1>
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "2rem",
                    }}
                    >
                    <Link to="/dashboard">
                        <Button text="Dashboard" />
                    </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default WatchlistPage;