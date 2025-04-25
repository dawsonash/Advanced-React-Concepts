import { getRandomNumbers } from "../services/numberGenerator";
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";

function CardLineGraph ({dataPoints}) {
    const yourNumbers = getRandomNumbers(dataPoints, 100);
    const socialNumbers = getRandomNumbers(dataPoints, 100);
    const data = [
        {name: 'Jan', You: yourNumbers[0], Friends: socialNumbers[0]},
        {name: 'Feb', You: yourNumbers[1], Friends: socialNumbers[1]},
        {name: 'Mar', You: yourNumbers[2], Friends: socialNumbers[2]},
        {name: 'Apr', You: yourNumbers[3], Friends: socialNumbers[3]},
        {name: 'May', You: yourNumbers[4], Friends: socialNumbers[4]},
        {name: 'June', You: yourNumbers[5], Friends: socialNumbers[5]},
        {name: 'July', You: yourNumbers[6], Friends: socialNumbers[6]},
        {name: 'Aug', You: yourNumbers[7], Friends: socialNumbers[7]},
        {name: 'Sept', You: yourNumbers[8], Friends: socialNumbers[8]},
        {name: 'Oct', You: yourNumbers[9], Friends: socialNumbers[9]},
        {name: 'Nov', You: yourNumbers[10], Friends: socialNumbers[10]},
        {name: 'Dec', You: yourNumbers[11], Friends: socialNumbers[11]},
    ]

return (
<ResponsiveContainer width="100%" height="100%">
    <LineChart data = {data}>
        <XAxis dataKey={"name"} />
        <YAxis>
            <Label value="Miles" angle={-90} position='insideLeft' />
        </YAxis>
        <Tooltip />
        <Legend />
    <Line type="monotone" dataKey= "You" stroke="#FA9F42" />
    <Line type="monotone" dataKey="Friends" stroke="#0B6E4F" />
    </LineChart>
</ResponsiveContainer>
    );
} export default CardLineGraph