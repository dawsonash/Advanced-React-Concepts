import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MainCTA from './MainCTA';

function SearchCriteriaBlock () {
    return (
        <div className="flex w-248 h-40 p-10 flex-col items-start g-(1px) shrink-0">
            <div className=" flex px-6 items-start gap-6 self-stretch
            rounded-t-lg border-b-1 border-black bg-[#DFE6DF]">
                <div className="flex content-center items-center gap-1">
                    <span className="font-body text-black">1 Racer</span>
                    <KeyboardArrowDownRoundedIcon fontSize='small' sx={{ color: '#000000'}} />
                </div>
                <div className="flex content-center items-center gap-1">
                    <span className="font-body text-black">Open to public</span>
                    <KeyboardArrowDownRoundedIcon fontSize='small' sx={{ color: '#000000'}} />
                </div>

            </div>
                <div className='flex items-start gap-[1px] self-stretch rounded-b-lg'>
                    <div className='flex px-6 justify-between items-center flex-[1-0-0%] self-stretch
                     rounded-bl-lg bg-[#DFE6DF]'>
                            <div className='flex flex-col items-start'>
                                <span className='font-body font-light text-black'>Location:</span>
                                <span className='font-heading font-light text-black'>Place</span> 
                            </div>
                                <KeyboardArrowDownRoundedIcon fontSize='small' sx={{ color: '#000000'}} />
                    </div>
                    <div className='flex px-6 justify-between items-center flex-[1-0-0%] self-stretch
                      bg-[#DFE6DF]'>
                            <div className='flex flex-col items-start'>
                                <span className='font-body font-light text-black'>Distance:</span>
                                <span className='font-heading font-light text-black'>Length</span> 
                            </div>
                                <KeyboardArrowDownRoundedIcon fontSize='small' sx={{ color: '#000000'}} />
                    </div>
                    <div className='flex px-6 justify-between items-center flex-1 self-stretch
                     bg-[#DFE6DF]'>
                            <div className='flex flex-col items-start'>
                                <span className='font-body font-light text-black'>Location:</span>
                                <span className='font-heading font-bold text-black'>Place</span>    
                            </div>
                    </div>
                    <div className='flex px-6 justify-between items-center flex-[1-0-0%] self-stretch
                     rounded-br-lg bg-[#DFE6DF]'>
                            <div className='flex flex-col items-start'>
                                <MainCTA title='Search' icon={<KeyboardArrowDownRoundedIcon/>} />
                            </div>
                    </div>

                    

                </div>
        </div>
    )
}export default SearchCriteriaBlock;
