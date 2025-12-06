// FloatingDeliveryBar.jsx
import React from "react";
import { Link } from "react-router-dom";
export default function FloatingDeliveryBar({ item }) {
    const primaryColor = "#ff4d2d";
    const hoverColor = "#e64323";
    const bgColor = "#fff9f6";
    const borderColor = "#ddd";

    return (
        <div
            className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50"
            style={{ width: "70%" }}
            role="region"
            aria-label="Delivery location bar"
        >
            <div
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg shadow-md"
                style={{
                    backgroundColor: bgColor,
                    border: `1px solid ${borderColor}`,
                }}
            >
                {/* Left: station info */}
                <div className="flex items-start gap-3 min-w-0">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-600">Delivery location</span>
                        <span
                            className="text-lg font-semibold truncate"
                            title={item + " Station" || "(not selected)"}
                        >
                            {item + " Station" || "(not selected)"}
                        </span>
                        {/* <span className="text-xs text-gray-500">
              {station?.station?.code ? `Code: ${station.station.code}` : ""}
            </span> */}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link to="/my-orders">
                        <button
                            type="button"
                            className="px-4 py-2 rounded-md text-white font-medium transition-shadow"
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
                            style={{ backgroundColor: primaryColor }}
                        >
                            Got To Order Page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
