import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import Nav from "../components/Nav";
import StationCard from "../components/StationCard";
import { useSelector } from "react-redux";
import FloatingDeliveryBar from "../components/FloatingStation";

export default function StationSearchPage() {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") || "";
    const date = searchParams.get("date") || "";
    const stationSelected = useSelector(state => state.station?.seletectStation)
    console.log(stationSelected)
    const [results, setResults] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/search/?trainNo=${q}&trainDate=${date}`).then(response => {
            setResults(response.data.data)
        })
    }, [])
    console.log(results)
    return <div className='w-screen min-h-screen flex flex-col gap-5 items-center bg-[#fff9f6] overflow-y-auto'>
        <Nav />
        <div className="w-full max-w-6xl flex flex-col gap-5 items-start p-[10px] m-30">
            {
                results ? <>
                    <h1 className="text-2xl">Choose Station For Train {results.trainDetail.name}</h1>
                    {
                        results.station.map(item => {

                            return <StationCard key={item.stopNumber + item.station.code} item={item} />
                        })
                    }
                </>
                    : <>
                        <h1>Loading</h1>
                    </>
            }
        </div>
        {stationSelected.length != 0  ? <FloatingDeliveryBar item={stationSelected} /> : ""}
    </div>
}