import { useSidebar } from '../context/SidebarContext';
import logo from '../assets/logo.png';
import image from '../assets/image.webp';
import { FiAlignJustify } from "react-icons/fi";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <nav className="bg-Mybackground shadow-lg fixed top-0 z-40 shadow-white/10 w-full">
            <div className="max-w-7xl mx-auto px-4 py-1 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* logo */}
                    <div className="flex items-center space-x-4">
                        <img src={logo} alt="logo" className="md:w-28 w-32" />
                        <div className="hidden lg:flex lg:text-3xl font-bold text-Myprimary uppercase">
                            My Car
                        </div>
                    </div>

                    {/* search input */}
                    <div className="w-full sm:w-80 md:w-[20rem] px-3 mr-2 sm:px-5 flex items-center border rounded-full gap-3">
                        <FaSearch className="text-gray-400 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 border-transparent focus:outline-none focus:ring-2 focus:ring-transparent bg-transparent text-white placeholder:text-gray-400"
                        />
                    </div>

                    {/* login/signup and sidebar button */}
                    <div className="flex items-center space-x-4">
                        <Link to={'/'} className='cursor-pointer hover:text-Myprimary transition'>
                            Home
                        </Link>
                        <Link to={'/favorite'} className='cursor-pointer hover:text-Myprimary transition'>
                            Favorite
                        </Link>
                        <Link to={'/profile'} className='cursor-pointer hover:text-Myprimary transition'>
                            Profile
                        </Link>
                        <Link to={'/setting'} className='cursor-pointer hover:text-Myprimary transition'>
                            Setting
                        </Link>

                        <Link
                            to={'/signin'}
                            className="w-20 border border-white rounded-md py-1 text-center hover:shadow-[0_0_10px_#d6cb21] hover:border-Myprimary outline-none transition hover:text-Myprimary"
                        >
                            Sign In
                        </Link>

                        <img
                            src={image} 
                            alt="User"
                            className="w-10 h-10 rounded-full object-cover cursor-pointer border-2  border-Myprimary"
                        />

                        <button
                            onClick={toggleSidebar}
                            className="p-2 text-gray-700 hover:text-Myprimary transition text-2xl"
                        >
                            <FiAlignJustify size={24} />
                        </button>
                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
