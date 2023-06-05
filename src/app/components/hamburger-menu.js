import {useState} from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="md:hidden relative z-50">
            <button className="p-2 focus:outline-none" onClick={toggleMenu}>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            
            {isOpen && (
                <div className="fixed top-0 right-0 bottom-0 bg-white shadow-lg w-1/2 z-50">
                    <button
                        className="absolute top-2 right-2 p-2 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
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
