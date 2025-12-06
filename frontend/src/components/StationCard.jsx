import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSelectedStation } from "../redux/train.slice";

export default function StationCard({ item }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const primaryColor = "#ff4d2d";
    const hoverColor = "#e64323";
    
    const handleStationClick = (stationName) => {
        // Clear the selected station to hide floating window
        dispatch(updateSelectedStation(""))
        navigate("/shops-list", { state: { stationName } })
    }
    
    return (
        <div
            className="w-full rounded-lg p-4 mb-3 shadow-sm transition-all"
            style={{
                backgroundColor: "#fff9f6",
                border: "1px solid #ddd"
            }}
        >
            {/* Top Row */}
            <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800 text-lg">
                    Stop #{item.stopNumber || ""}
                </span>

                <span
                    className="px-3 py-1 rounded text-white text-sm"
                    style={{ backgroundColor: "#ff4d2d" }}
                >
                    Day {item.journeyDay}
                </span>
            </div>

            {/* Station Name */}
            <div className="mb-3">
                <div className="text-xl font-bold text-gray-900">
                    {item.station.name}
                </div>
                <div className="text-sm text-gray-600">
                    Code: {item.station.code}
                </div>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">

                <div className="p-3 rounded bg-white border" style={{ borderColor: "#ddd" }}>
                    <p className="text-gray-500">Distance</p>
                    <p className="font-semibold">{item.distanceKilometers} km</p>
                </div>

                <div className="p-3 rounded bg-white border" style={{ borderColor: "#ddd" }}>
                    <p className="text-gray-500">Arrival</p>
                    <p className="font-semibold">{item.schedule.arrival}</p>
                </div>

                <div className="p-3 rounded bg-white border" style={{ borderColor: "#ddd" }}>
                    <p className="text-gray-500">Departure</p>
                    <p className="font-semibold">{item.schedule.departure}</p>
                </div>

                <div className="p-3 rounded bg-white border" style={{ borderColor: "#ddd" }}>
                    <p className="text-gray-500">Halt</p>
                    <p className="font-semibold">{item.schedule.haltMinutes} min</p>
                </div>

            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-between items-center text-sm">
                <span className="text-gray-600">
                    Loco Reversal:{" "}
                    {item.isLocoReversal ? (
                        <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                        <span className="text-red-500 font-semibold">No</span>
                    )}
                </span>

                <button
                    className="px-4 py-2 rounded text-white transition"
                    style={{ backgroundColor: primaryColor }}
                    onClick={(e)=>{
                        e.stopPropagation();
                        handleStationClick(item.station.name)
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = hoverColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = primaryColor)}
                >
                    Order Now
                </button>
            </div>
        </div>
    );
}