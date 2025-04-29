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
<div className={`h-screen ${isExpanded ? 'w-40' : 'w-18'} bg-black gap-5 flex flex-col border-r border-black pl-3 pr-3 pt-11 pb-14 transition-all duration-300`}>
        
    <button className={` ${isExpanded? 'justify-end pr-2' : 'justify-center'}flex  `} onClick={toggleSidebar}>
      <div className={`transition-transform duration-300 ${isExpanded? 'rotate-180' : ''}`}>
    <NavBarIcon icon={<LastPageIcon />} />
      </div>
    </button>

    <div className='flex flex-col  justify-between h-full'>
        <div className='flex flex-col gap-4'>

        <NavLink to="/" className= {({ isActive }) => isActive ? 'bg-CompanyOrange rounded-md p-1' : 'p-1  border border-transparent hover:duration-300 hover:border hover:rounded-md hover:border-white'} >
            <NavBarIcon icon={<HomeFilledIcon />} name="Home" isExpanded={isExpanded}/>
        </NavLink>

        <NavLink to="/search" className={({ isActive }) => isActive ? 'bg-CompanyOrange rounded-md p-1' : 'p-1 border border-transparent hover:duration-300 hover:border hover:rounded-md hover:border-white'} >
            <NavBarIcon icon={<SearchIcon />} name="Search" isExpanded={isExpanded}/>
        </NavLink>

        <NavLink to="/friends" className={({ isActive }) => isActive ? 'bg-CompanyOrange rounded-md p-1' : 'p-1 border border-transparent hover:duration-300 hover:border hover:rounded-md hover:border-white'} >
            <NavBarIcon icon={<GroupIcon />} name="Friends" isExpanded={isExpanded}/>
        </NavLink>        
        </div>

        <NavLink to="/profile" className={({ isActive }) => isActive ? 'bg-CompanyOrange rounded-md p-1' : 'p-1 border border-transparent hover:duration-300 hover:border hover:rounded-md hover:border-white'} >
            <NavBarIcon icon={<AccountCircleRoundedIcon />} name="Profile" isExpanded={isExpanded}/>
        </NavLink>    
        </div>
</div>
)
};

const NavBarIcon = ({ icon, name, isExpanded }) => (
    <div className={`text-white ${isExpanded ? 'flex items-center gap-5' : 'flex justify-center'}`}>
      <div className="flex-shrink-0">
        {icon}
      </div>
      {isExpanded && (
        <div className="flex-1 text-left font-heading">
          {name}
        </div>
      )}
    </div>
  );

export default SideBar;