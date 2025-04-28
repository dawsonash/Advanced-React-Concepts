import CalendarCard from "../components/CalendarCard";
import CalendarContents from "../components/CalendarContents";
import CardLineGraph from "../components/CardLineGraph";
import CardPieChart from "../components/CardPieChart";
import CardText from "../components/CardText";
import PersonalGrowthCard from "../components/PersonalGrowthCard";
import TerrainCard from "../components/TerrainCard";
import FriendActivityCard from "../components/FriendActivityCard";
function Home() {
    return(
        <div className='flex justify-center w-full'>
                <div className='flex flex-col gap-3  w-full p-8'>
                    <h1 className='font-heading text-4xl text-left'>Home</h1>

                    <div className='flex justify-center  w-full h-auto'>
                        <div className="flex flex-wrap gap-10  place-content-center ">
                        <PersonalGrowthCard>
                            <CardLineGraph dataPoints={12}/>
                        </PersonalGrowthCard>

                        <FriendActivityCard>
                            <CardText />
                        </FriendActivityCard> 
                        
                        <TerrainCard>
                            <CardPieChart dataPoints={3}/>
                        </TerrainCard>

                        <CalendarCard>
                            <CalendarContents />
                        </CalendarCard>
                        </div>
                    </div>
                </div>

        </div>
    );

} export default Home;