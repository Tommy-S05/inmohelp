'use client'
import {useState} from "react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="md:hidden relative z-50">
            <button className="p-2  focus:outline-none" onClick={toggleMenu}>
                {" "}
                <i className="bi bi-list text-4xl text-black"></i>
            </button>
            
            {isOpen && (
                <div className="fixed top-0 right-0 bottom-0 bg-white shadow-lg w-1/2 z-50">
                    <button
                        className="absolute top-2 w-20 right-2 p-2 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <i class="bi bi-x-lg text-4xl"></i>
                    </button>
                    
                    <ul className="py-4">
                        <li className="px-4 py-2">Opción 1</li>
                        <li className="px-4 py-2">Opción 2</li>
                        <li className="px-4 py-2">Opción 3</li>
                        {/* Agrega más opciones de menú aquí */}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
