'use client'
import {useState} from "react";
import Link from "next/link";

const MenuUsuario = ({token}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <button className=" hover:bg-gray-300 text-gray-700 font-semibold rounded relative"
                    onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          clipRule="evenodd"/>
                </svg>
            
            </button>
            {isOpen && (
                <ul className="absolute lg:right-0 lg:translate-x-0 lg:left-auto transform -translate-x-1/2 left-1/2 mt-2 py-2 w-48 bg-white shadow-lg rounded-lg bg-cover ">
                    <li>
                        <Link href={"/profile"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                              onClick={toggleDropdown}>
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link href={"/profile/financials"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                              onClick={toggleDropdown}>
                            Ingresos y Gastos
                        </Link>
                    </li>
                    <hr className='mx-1'/>
                    <li>
                        <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                              onClick={toggleDropdown}>
                            Cerrar Sesión
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default MenuUsuario;