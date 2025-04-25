import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LastPageIcon from '@mui/icons-material/LastPage';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
<div className='fixed top-0 left-0 h-screen w-18 gap-5 flex flex-col border-r border-black pt-11 pr-3 pl-3 pb-14'>
        <i><NavBarIcon icon={<LastPageIcon />} /></i>
    <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-4'>
            <i><NavBarIcon icon={<HomeFilledIcon />} /></i>

            <Link to="/Search"><NavBarIcon icon={<SearchIcon />} /></Link>

            <i><NavBarIcon icon={<GroupIcon />} /></i>
        </div>

        <i><NavBarIcon icon={<AccountCircleRoundedIcon />} /></i>
    </div>
</div>
)
};

const NavBarIcon = ({ icon }) => (
<div className='sidebar-icon'>
{icon}
</div>
)

export default SideBar;