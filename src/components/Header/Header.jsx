import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const trigger = useRef(null);
    const mobileNav = useRef(null);

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <header className="absolute w-full z-30 font-raleway">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Site branding */}
                    <div className="flex-shrink-0 mr-4">
                        {/* Logo */}
                        <Link to="/" className="block" >
                            <svg width="45" height="45" viewBox="0 0 108 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M85.3594 102.491L107.359 124.491H76.8596L54.8596 102.491L31.8596 124.491L1.35959 124.491L54.8596 71.9914L66.8596 83.4914C74.7048 79.909 88.1107 68.235 86.3596 52.4914C86.8305 39.4613 77.8443 20.8622 53.3596 20.4914C40.3596 20.4914 21.3782 30.866 21.8596 52.4914C21.8596 56.9914 24.459 73.156 36.8596 80.4914L21.8596 94.9914C12.8588 89.8672 -3.83882 65.1141 1.35959 46.4914C1.38016 36.81 12.7216 9.86426 35.3596 2.99135C45.3519 -0.452171 70.0726 -2.5877 85.3594 10.4914C94.7095 18.491 104.07 26.571 105.711 49.5492C106.01 58.5722 106.067 73.1606 96.3594 85.4914C92.7687 90.0522 82.1594 100.191 69.3594 104.991L85.3594 102.491Z" fill="#2CD37F" />
                            </svg>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:flex-grow">


                        {/* Desktop sign in links */}
                        <ul className="flex flex-grow justify-end flex-wrap items-center text-gray-100">
                            <Link to="/genres" className="relative cursor-pointer group mr-7 font-semibold hover:text-[#2CD37F] hover:scale-125 transition-all ease-in-out duration-200 ">
                                <span>Genres</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-[#2CD37F] transition-all group-hover:w-full"></span>
                            </Link>
                            <Link to="/platforms" className="relative cursor-pointer group mr-7 font-semibold hover:text-[#2CD37F] hover:scale-125 transition-all ease-in-out duration-200 ">
                                <span>Platforms</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-[#2CD37F] transition-all group-hover:w-full"></span>
                            </Link>
                            <Link to="/publishers" className="relative cursor-pointer group mr-7 font-semibold hover:text-[#2CD37F] hover:scale-125 transition-all ease-in-out duration-200 ">
                                <span>Publishers</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-[#2CD37F] transition-all group-hover:w-full"></span>
                            </Link>
                        </ul>

                    </nav>

                    {/* Mobile menu */}
                    <div className="md:hidden">

                        {/* Hamburger button */}
                        <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                            <span className="sr-only">Menu</span>
                            <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect y="4" width="24" height="2" rx="1" />
                                <rect y="11" width="24" height="2" rx="1" />
                                <rect y="18" width="24" height="2" rx="1" />
                            </svg>
                        </button>

                        {/*Mobile navigation */}
                        <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
                            <ul className="bg-[#1E1E1E] text-white px-4 py-4">
                                <Link to="/genres" className="relative cursor-pointer group mr-7 font-semibold hover:text-[#2CD37F] hover:scale-125 transition-all ease-in-out duration-200 ">
                                    <span>Genres</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-[#2CD37F] transition-all group-hover:w-full"></span>
                                </Link>
                                <Link to="/platforms" className="relative cursor-pointer group mr-7 font-semibold hover:text-[#2CD37F] hover:scale-125 transition-all ease-in-out duration-200 ">
                                    <span>Platforms</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-[#2CD37F] transition-all group-hover:w-full"></span>
                                </Link>
                                <Link to="/publishers" className="relative cursor-pointer group mr-7 font-semibold hover:text-[#2CD37F] hover:scale-125 transition-all ease-in-out duration-200 ">
                                    <span>Publishers</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px]  bg-[#2CD37F] transition-all group-hover:w-full"></span>
                                </Link>
                            </ul>
                        </nav>

                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;
