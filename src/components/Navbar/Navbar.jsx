import { Link } from "react-router-dom";

import { MdOutlineArrowOutward } from "react-icons/md";

import darkLogo from '../../assets/logo dark.png'


const Navbar = () => {

    const links = <>

        <li><Link className="font-bold"> Home    </Link></li>
        <li><Link className="font-bold"> Service </Link></li>
        <li><Link className="font-bold"> About   </Link></li>
        <li><Link className="font-bold">  Blog   </Link></li>


    </>


    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        

                        {links}

                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl"> </a> */}

                <img className="" src={darkLogo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    

                {links}


                </ul>
            </div>
            <div className="navbar-end">
                <p className="border flex flex-row gap-2 items-center border-black rounded-lg py-2 px-4 font-semibold">Appointment <MdOutlineArrowOutward className="text-xl" /> </p>
            </div>
        </div>
    );
};

export default Navbar;