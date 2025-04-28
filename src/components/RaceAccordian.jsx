import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

function RaceAccordian ({Name, Distance, Date}) {


    return (
        <div className="flex w-313 p-4 justify-between items-center
            bg-white/44 rounded-lg border-2 border-white/12">
            <span className="font-heading text-lg text-black">{Name}</span>
            <span className="font-heading text-lg text-black">{Distance}</span>
            <span className="font-heading text-lg text-black">{Date}</span>
            <ExpandMoreRoundedIcon fontSize='small' sx={{ color: '#000000'}} />


        </div>
    );
} export default RaceAccordian