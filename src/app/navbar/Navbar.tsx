'use client'
import React, { useState, useEffect } from "react";
import stylo from './navbar.module.css';
import Link from "next/link";
import logo from '../../img/ALK2.png'
const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false); 
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className={stylo.container}>
            <div className={stylo.logo}></div>
            <ul className={`${stylo.navlist} ${menuOpen ? stylo.open : ''}`}>
                <Link href={"/"} className={stylo.link}>
                    <button className={stylo.button}>Inicio</button>
                </Link>
                <Link href={"/about"} className={stylo.link}>
                    <button className={stylo.button}>Nosotros</button>
                </Link>
                <Link href={"/portfolio"} className={stylo.link}>
                    <button className={stylo.button}>Portfolio</button>
                </Link>
                <Link href={"/contact"} className={stylo.link}>
                    <button className={stylo.button}>Contacto</button>
                </Link>
            </ul>

            <div className={stylo.rigchcontent}>
                <a className={stylo.btnlogin}>Login</a>
                <div className={stylo.bxmenu} id='menu-icon' onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" fill='#fff' y="0px" width="30" height="50" viewBox="0 0 50 50">
                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
