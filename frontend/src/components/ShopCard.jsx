import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaStore, FaLocationDot } from "react-icons/fa6"

function ShopCard({ data }) {
    const navigate = useNavigate()
    
    const handleViewShop = (e) => {
        e.stopPropagation()
        navigate(`/shop/${data._id}`)
    }

    return (
        <div className='bg-white rounded-lg shadow p-4 space-y-4 hover:shadow-xl transition-shadow cursor-pointer border border-orange-100' onClick={() => navigate(`/shop/${data._id}`)}>
            <div className='flex gap-4'>
                {/* Shop Image */}
                <div className='w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden border'>
                    <img 
                        src={data.image} 
                        alt={data.name} 
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Shop Details */}
                <div className='flex-1 flex flex-col justify-between'>
                    <div>
                        <h2 className='text-xl font-semibold text-gray-800 flex items-center gap-2'>
                            <FaStore className='text-[#ff4d2d]' />
                            {data.name}
                        </h2>
                        <p className='text-sm text-gray-600 mt-1 flex items-center gap-1'>
                            <FaLocationDot className='text-[#ff4d2d]' size={14} />
                            {data.address}
                        </p>
                        <p className='text-sm text-gray-500 mt-1'>
                            {data.city}, {data.state}
                        </p>
                    </div>

                    {/* Items Count */}
                    {data.items && (
                        <div className='mt-3'>
                            <span className='inline-block bg-orange-100 text-[#ff4d2d] text-xs font-semibold px-3 py-1 rounded-full'>
                                {data.items.length} {data.items.length === 1 ? 'Item' : 'Items'} Available
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* View Shop Button */}
            <div className='flex justify-end pt-2 border-t border-gray-100'>
                <button 
                    className='bg-[#ff4d2d] hover:bg-[#e64526] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors'
                    onClick={handleViewShop}
                >
                    View Shop
                </button>
            </div>
        </div>
    )
}

export default ShopCard