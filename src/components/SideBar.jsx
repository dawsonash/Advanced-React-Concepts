import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LastPageIcon from '@mui/icons-material/LastPage';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SideBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleSidebar = () => setIsExpanded(prev => !prev);

    return (
<div className={`h-screen ${isExpanded ? 'w-64' : 'w-18'} bg-black gap-5 flex flex-col border-r border-black pt-11 pr-3 pl-3 pb-14 transition-all duration-300`}>
        
    <button className='flex items-center justify-center 'onClick={toggleSidebar}>
    <NavBarIcon icon={<LastPageIcon />} />
    </button>

    <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-4'>

        <NavLink to="/" className= {({ isActive }) => isActive ? 'bg-CompanyOrange rounded-md p-1' : 'p-1  border border-transparent hover:duration-300 hover:border hover:rounded-md hover:border-white'} >
            <NavBarIcon icon={<HomeFilledIcon />} />
        </NavLink>

        <NavLink to="/search" className={({ isActive }) => isActive ? 'bg-CompanyOrange rounded-md p-1' : 'p-1 border border-transparent hover:duration-300 hover:border hover:rounded-md hover:border-white'} >
            <NavBarIcon icon={<SearchIcon />} />
        </NavLink>

        <NavLink to="/friends" className={({ isActive }) => isActive ? 'bg-CompanyOrange rounded-md p-1' : 'p-1 border border-transparent hover:duration-300 hover:border hover:rounded-md hover:border-white'} >
            <NavBarIcon icon={<GroupIcon />} />
        </NavLink>        
        </div>

        <NavLink to="/profile" className={({ isActive }) => isActive ? 'bg-CompanyOrange rounded-md p-1' : 'p-1 border border-transparent hover:duration-300 hover:border hover:rounded-md hover:border-white'} >
            <NavBarIcon icon={<AccountCircleRoundedIcon />} />
        </NavLink>    
        </div>
</div>
)
};

const NavBarIcon = ({ icon }) => (
<div className='sidebar-icon text-white '>
{icon}
</div>
)

export default SideBar;