import React , {useState} from 'react';
import {IoMdMenu} from 'react-icons/io' ;
import {CiMenuKebab} from 'react-icons/ci' ;
import {Link} from 'react-router-dom' ;


function Nav() {

    const[nav, setNav] = useState(false) ;

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className= ' w-full text-3xl font-bold text-[#5f43b2]'> ANIMALBNB</h1>
            <ul className='hidden md:flex'>
                <li className= 'p-4'><Link to ="/about"><button>About</button></Link></li>
                <li className= 'p-4'><Link to ="/contact"><button>Contact</button></Link></li>
                <li className= 'p-4'><Link to ="/rent"><button>Rent</button></Link></li>
            </ul>

            <div onClick = {handleNav} className='md:hidden'>
             {nav ? <IoMdMenu size = {20} /> : <CiMenuKebab size = {20} /> }
            </div>

            <div className= {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-300' : 'ease-in-out durration-300 fixed left-[-100%]'}>
            <ul className='pt-24 uppercase p-4 '>
                <li className= 'p-4 border-b border-gray-600'><Link to ="/about"><button>About</button></Link></li>
                <li className= 'p-4 border-b border-gray-600'><Link to ="/contact"><button>Contact</button></Link></li>
                <li className= 'p-4 border-b border-gray-600'><Link to ="/rent"><button>Rent</button></Link></li>
            </ul>
            </div>
        </div>
    ) ;
}

export default Nav ;