"use client";

import HamburgerMenu from "@/app/components/hamburger-menu";
import Link from "next/link";

export default function Navbar() {
    if(typeof window !== "undefined") {
        // your code with access to window or document object here
        const listItem = document.querySelectorAll("#header li");
        const menuBackDrop = document.querySelector("#menu-backdrop");
        
        listItem.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                const {left, top, width, height} = item.getBoundingClientRect();
                
                menuBackDrop.style.setProperty("--left", `${left}px`);
                menuBackDrop.style.setProperty("--top", `${top}px`);
                menuBackDrop.style.setProperty("--width", `${width}px`);
                menuBackDrop.style.setProperty("--height", `${height}px`);
                
                menuBackDrop.style.opacity = "1";
                menuBackDrop.style.visibility = "visible";
            });
            
            item.addEventListener("mouseleave", () => {
                menuBackDrop.style.opacity = "0";
                menuBackDrop.style.visibility = "hidden";
            });
        });
    }
    
    return (
        <>
            <div
                id="menu-backdrop"
                className={`
      absolute bg-black/5 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
    `}
            ></div>
            
            <nav
                id="header"
                className=" p-4 flex relative justify-between items-center lg:px-20 px-3 max-w-screen-2xl mx-auto"
            >
                <div className="flex items-center">
                    <img className="w-24 h-24" src="/assets/logos/logo-black.png" alt="Logo"/>
                    <h1 className="font-bold text-2xl title">InmoHelp</h1>
                </div>
                <div className="hidden md:flex space-x-10 items-center">
                    <ul className="hidden md:flex md:[&>li]:px-1 [&>li]:font-bold [&>li]:py-2 md:[&>li]:text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 lg:[&>li]:px-5 lg:[&>li]:text-md">
                        <li>
                            <a href="">Propiedades</a>
                        </li>
                        <li>
                            <a href="">Indices de Precios</a>
                        </li>
                        <li>
                            <Link href={'/contactus'}>Contactanos</Link>
                        </li>
                        <li>
                            <a href="">Idioma</a>
                        </li>
                    </ul>
                    <button className="bg-primary p-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80">
                        Registrarse
                    </button>
                </div>
                <HamburgerMenu/>
                {/*<div>*/}
                {/*    <a className={'md:hidden'} href="#"><i className="bi bi-list text-2xl"></i></a>*/}
                {/*</div>*/}
            </nav>
        
        </>
    );
}
