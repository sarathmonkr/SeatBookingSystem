import React from 'react';

interface SeatLegendProps {
    seatPrices: {
        silver: number;
        gold: number;
        platinum: number;
    };
}

const SeatLegend: React.FC<SeatLegendProps> = ({ seatPrices }) => {
    const seatTypes = [
        { label: 'Silver', price: seatPrices.silver, color: 'gray' },
        { label: 'Gold', price: seatPrices.gold, color: 'yellow' },
        { label: 'Platinum', price: seatPrices.platinum, color: 'red' }
    ];

    return (
        <div className="legend mb-6 p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Seat Pricing</h3>
            <div className="flex justify-around">
                {seatTypes.map(({ label, price, color }) => (
                    <div key={label} className="flex items-center">
                        <div className={`w-6 h-6 bg-${color}-200 border border-${color}-500 rounded-full mr-3`}></div>
                        <span className="text-gray-700">{label} - ₹{price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeatLegend;