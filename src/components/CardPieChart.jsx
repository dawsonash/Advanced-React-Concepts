import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from "recharts";
import { getRandomNumbers } from "../services/numberGenerator";

function CardPieChart ({dataPoints}) {
    const yourNumbers = getRandomNumbers(dataPoints, 100);
    const data = [
        {name: 'Outdoor', You: yourNumbers[0]},
        {name: 'Indoor', You: yourNumbers[1]},
        {name: 'Race', You: yourNumbers[2]}
    ];

    const COLORS = ['#1C1F33', '#0B6E4F', '#FA9F42']

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
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
    <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Pie
                data = {data}
                dataKey="You"
                nameKey="name"
                label={renderCustomizedLabel}
                labelLine={false}
                outerRadius="90%"
                cx="50%"
                cy="50%"
            >
                {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend />
        </PieChart>
    </ResponsiveContainer>

    )
} export default CardPieChart;