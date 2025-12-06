import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate, useLocation } from 'react-router-dom'
import ShopCard from '../components/ShopCard'
import { FaStore } from "react-icons/fa6"
import axios from 'axios'
import { serverUrl } from '../App'
import { ClipLoader } from 'react-spinners'

function ShopsList() {
    const navigate = useNavigate()
    const location = useLocation()
    const stationName = location.state?.stationName || ""
    const [shops, setShops] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchShopsByStation = async () => {
            if (!stationName) {
                navigate("/")
                return
            }
            
            setLoading(true)
            try {
                // Extract city name from station name (remove " Station" suffix)
                const cityName = stationName.replace(" Station", "").trim()
                
                const result = await axios.get(`${serverUrl}/api/shop/get-by-city/${cityName}`, { withCredentials: true })
                setShops(result.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        
        fetchShopsByStation()
    }, [stationName, navigate])

    return (
        <div className='w-full min-h-screen bg-[#fff9f6] flex justify-center px-4'>
            <div className='w-full max-w-[800px] p-4'>
                {/* Header */}
                <div className='flex items-center gap-4 mb-6'>
                    <div className='z-[10] cursor-pointer' onClick={() => navigate(-1)}>
                        <IoIosArrowRoundBack size={35} className='text-[#ff4d2d]' />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-2xl font-bold text-gray-800'>
                            Shops at {stationName}
                        </h1>
                        <p className='text-sm text-gray-500 mt-1'>
                            {loading ? 'Loading...' : `${shops?.length || 0} ${shops?.length === 1 ? 'shop' : 'shops'} available`}
                        </p>
                    </div>
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className='flex justify-center items-center py-16'>
                        <ClipLoader size={50} color='#ff4d2d' />
                    </div>
                ) : (
                    /* Shops List */
                    <div className='space-y-6'>
                        {shops && shops.length > 0 ? (
                            shops.map((shop, index) => (
                                <ShopCard data={shop} key={index} />
                            ))
                        ) : (
                            <div className='flex flex-col items-center justify-center py-16'>
                                <FaStore className='text-gray-300 text-6xl mb-4' />
                                <p className='text-gray-500 text-lg text-center'>
                                    No shops available at {stationName}
                                </p>
                                <p className='text-gray-400 text-sm mt-2'>
                                    Check back later for new shops!
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShopsList