import { Fragment } from "react";
import Logos from '../assets/logo.png';
import { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function Nav() {



    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = (e) => {

        e.preventDefault()
        setDropdown(!dropdown);
    }

    useEffect(() => {
        gsap.from('.nav', { duration: 1, y: '-100%', ease: 'bounce' });
        gsap.from('.responsive-header', { duration: .2, opacity: 0, delay: .3, stagger: .5 });



    });
    return (
        <Fragment>
            <nav class="bg-gray-900  nav flex items-center justify-between flex-wrap md:bg-gray-600/[.06] p-8 md:px-24 z-50" style={{ position: 'sticky', top: 0, left: 0 }}>
                <div class="flex items-center flex-shrink-0 text-white mr-24">
                    <Link to='/' >
                        <span class="font-semibold text-xl tracking-tight"> <img src={Logos} alt="Mutant Football" title="Mutant Football" />
                        </span>
                    </Link>
                </div>
                <div class="block lg:hidden">
                    <button onClick={handleDropdown} class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:bg-tranparent hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="hidden md:inline-block flex-grow">

                </div>

                <div id="reduce" class="text-xl md:text-normal w-full block flex lg:flex-grow  lg:items-center  justify-evenly lg:w-auto ">
                    <div class=" md:flex-grow justify-evenly md:space-x-20 md:mr-12">
                        <Link to="/">
                            <div href="#responsive-header" class="responsive-header block cursor-pointer  border-b-4 mt-4 lg:inline-block lg:mt-0 text-white hover:text-white ">
                                Home
                            </div>
                        </Link>
                        {/* <div href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white ">Marketplace</div> */}
                        <Link to="/dex">
                            <span href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white ">
                                Dex
                            </span>
                        </Link>
                        {/* <span href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">NFTs</span> */}

                        <span href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                            <a href='https://discord.gg/NAKPcxaS' title='Join discord Channel' >
                                Discord
                            </a>
                        </span>

                        <span href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                            <a href='https://cry8.gitbook.io/product-docs' title='Read the Docs' >
                                Docs
                            </a>
                        </span>

                    </div>
                    <Link to="/Goal">
                    <div className="cursor-pointer ">
                        <span class="responsive-header inline-block  px-4 py-2 leading-none  font-extrabold hover:bg-gradient-to-r  text-white  bg-gradient-to-r from-red-500 to-red-400  hover:text-red-500 hover:from-white hover:to-white  mt-4 lg:mt-0">PLAY NOW</span>
                    </div>
                    </Link>
                </div>
                {dropdown && (
                    <div class="text-xl w-full block flex lg:flex-grow  lg:items-center  justify-evenly lg:w-auto ">
                        <div class=" md:flex-grow justify-evenly md:space-x-20 md:mr-12">
                            <Link to="/">
                                <div href="#responsive-header" class="responsive-header block cursor-pointer    mt-4 lg:inline-block lg:mt-0 text-white hover:text-white ">
                                    Home
                                </div>
                            </Link>
                            {/* <div href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white ">Marketplace</div> */}
                            <Link to="/dex">
                                <span href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white ">
                                    Dex
                                </span>
                            </Link>
                            {/* <span href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">NFTs</span> */}

                            <span href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                            <a href='https://cry8.gitbook.io/product-docs' title='Join discord Channel'>
                                Docs
                            </a>
                        </span>
                            <span href="#responsive-header" class="responsive-header block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                                <a href='https://discord.gg/yXNwMjtw' title='Read the Documentation'>
                                    Discord
                                </a>
                            </span>

                        </div>
                        <div className="cursor-pointer hidden ">
                            <span class="responsive-header inline-block  px-4 py-2 leading-none  font-extrabold hover:bg-gradient-to-r  text-white  bg-gradient-to-r from-red-500 to-red-400  hover:text-red-500 hover:from-white hover:to-white  mt-4 lg:mt-0">PLAY NOW</span>
                        </div>
                    </div>
                )};

            </nav>


        </Fragment>
    );
}