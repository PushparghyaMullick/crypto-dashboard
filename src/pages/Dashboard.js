import React, { useState, useEffect } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/TabsComponent";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import { get100Coins } from "../functions/get100Coins";
import BackToTop from "../components/Common/BackToTop";

const DashboardPage = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")
    const [filteredCoins, setFilteredCoins] = useState([])
    const [paginatedCoins, setPaginatedCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        const data = await get100Coins()
        if(data){
            setCoins(data)
            setPaginatedCoins(data.slice(0, 10))
            setFilteredCoins(data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const searchHandler = (search) => {
        setSearch(search)
        if (search.trim() !== "") {
            setFilteredCoins(coins.filter(coin =>
                coin.name.toLowerCase().includes(search.trim().toLowerCase()) || coin.symbol.toLowerCase().includes(search.trim().toLowerCase())))
        }
        else {
            setFilteredCoins(coins)
        }
    }

    return (
        <div>
            <Header />
            <BackToTop />
            {isLoading && <Loader />}
            {!isLoading &&
                <>
                    <Search onSearch={searchHandler} />
                    <TabsComponent coins={search.trim() !== "" ? filteredCoins : paginatedCoins} />
                    {!search.trim() &&
                        <PaginationComponent onPageChange={page =>
                            setPaginatedCoins(coins.slice((page - 1) * 10, page * 10))} />}
                </>
            }
        </div>
    )
}

export default DashboardPage;