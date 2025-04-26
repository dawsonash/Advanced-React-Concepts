import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

function CalendarCard ({children}){
    return (
    <div className='flex w-177 h-125 flex-col items-start gap-3'>
                <div className='flex gap-3 '>
            <CalendarTodayRoundedIcon fontSize='large' />
            <h2 className='font-heading text-3xl'>Upcoming</h2>
                </div>

            <div className='flex flex-col place-content-between item-start self-stretch h-90 py-8 px-2
            bg-white/44 rounded-lg border-2 border-white/12'>
                {children}
            </div>
    </div>
    );
}
export default CalendarCard;

