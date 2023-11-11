import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { DonationContext } from "../Root/Root";
import { PieChart, Pie,  Cell, } from 'recharts';


const Statistics = () => {
    const [donation] = useContext(DonationContext);

    const cards = useLoaderData();

    const parcentageOfDonate = (donation / cards.length) * 100;


    const data = [
        { name: 'Group A', value: 100 },
        { name: 'Group B', value: parcentageOfDonate },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="text-center mb-10">
            <section className="flex justify-center">
                <PieChart width={500} height={500}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </section>
            <section className="flex justify-center">
                <div className="flex items-center mx-4">
                    <p>Your Donation</p>
                    <p className="w-20 h-3 rounded mx-2" style={{ backgroundColor: "#00C49F" }}></p>
                </div>
                <div className="flex items-center mx-4">
                    <p>Total Donation</p>
                    <p className="w-20 h-3 rounded mx-2" style={{ backgroundColor: "#FF444A" }}></p>
                </div>
            </section>
        </div>
    );
};

export default Statistics;