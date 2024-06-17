import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Common/Loader";
import Header from "../components/Common/Header";
import { settingCoinObject } from "../functions/settingCoinObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceToggle from "../components/Coin/PriceToggle";

const CoinPage = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(30);
    const [chartData, setChartData] = useState({});
    const [priceType, setPriceType] = useState("prices");

    const getData = async() => {
        const data = await getCoinData(id);
        if(data) {
            settingCoinObject(data, setCoinData)
            const prices = await getCoinPrices(id, days, priceType);
            if(prices.length>0){
                settingChartData(prices, setChartData);
                setIsLoading(false);
            }    
        }
    }
            
    useEffect(() => {
        if(id){
            getData();
        }
    }, [id, days, priceType]);

    return (
        <div>
            <Header />
            {isLoading && <Loader />}
            {!isLoading &&
            <>
                <div className="grey-wrapper">
                    <List coin={coinData} /> 
                </div>
                <div className="grey-wrapper" style={{
                    paddingBottom: '1rem',
                    paddingTop: '0.5rem'
                }}>
                    <SelectDays defaultDays={30}
                    changeDays={days => setDays(days)}
                    pTag={true}
                    />
                    <PriceToggle priceToggle={
                        priceType => setPriceType(priceType)
                    }/>
                    <LineChart chartData={chartData} 
                    priceType={priceType}/>
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc} />
            </> 
            }
        </div>
    )
}

export default CoinPage;