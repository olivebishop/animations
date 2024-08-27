"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);
    const pathname = usePathname();

    const toggleBurgerMenu = () => {
        setBurgerMenuActive(!burgerMenuActive);
    };

    const motionVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
                type: "spring",
            },
        },
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0,
                duration: 0,
            },
        },
    };

    const listItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.35,
                ease: "easeOut",
            },
        },
        closed: {
            y: 100,
            opacity: 0,
            transition: {
                duration: 0,
            },
        },
    };

    const navItems = [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "events", path: "/events" },
        { name: "contact", path: "/contact" },
    ];

    return (
        <nav  className={`flex items-start justify-start w-full px-[10vw] bg-black absolute top-0 transition-[height] duration-500 ${
            burgerMenuActive ? "h-screen" : "h-0"
        }`} >
            <div className="absolute top-0 pt-28 w-[calc(100%-20vw)] flex items-center justify-between">
                <button className={`bg-transparent border-none text-base cursor-pointer transition-colors lg:mt-12 duration-500 ${burgerMenuActive ? "text-white" : "text-black"}`}>
                    {/* Event <span className="text-pink-600 dark:text-gray-100">Palour</span> */}
                </button>
                <div
                    className="w-[55px] h-[25px] relative cursor-pointer"
                    onClick={toggleBurgerMenu}
                >
                    <div className="w-[55px] h-[25px] relative z-10"></div>
                    <div className={`w-[55px] h-1 absolute top-[11px] z-0 transition-all duration-250 ${burgerMenuActive ? "w-0 bg-white" : "bg-black"}`}></div>
                    <div className={`w-[55px] h-1 absolute top-[11px] z-0 transition-all duration-250 ${burgerMenuActive ? "transform rotate-135 bg-white" : "transform translate-y-[-10px] bg-black"}`}></div>
                    <div className={`w-[55px] h-1 absolute top-[11px] z-0 transition-all duration-250 ${burgerMenuActive ? "transform -rotate-135 bg-white" : "transform translate-y-[10px] bg-black"}`}></div>
                </div>
            </div>
            <div className={`absolute top-[30vh] ${burgerMenuActive ? "block" : "hidden"}`}>
                <motion.ul
                    animate={burgerMenuActive ? "open" : "closed"}
                    variants={motionVariants}
                    className="list-none"
                >
                    {navItems.map((item) => (
                        <motion.li key={item.name} variants={listItemVariants} className="py-4">
                            <Link href={item.path} passHref>
                                <motion.a
                                    className={`text-5xl transition-colors duration-250 ${
                                        pathname === item.path ? "text-gray-200" : "text-gray-500 hover:text-gray-200"
                                    }`}
                                    onClick={() => setBurgerMenuActive(false)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.a>
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </nav>
    );
};

export default Navbar;