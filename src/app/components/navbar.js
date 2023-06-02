export default function Navbar(){
    return (
        <nav className="bg-white p-4 flex justify-between items-center lg:px-20 px-3 max-w-screen-2xl mx-auto">
            <div className="flex items-center">
                <img className="w-24 h-24" src="/assets/logo-icon.jpg" alt="Logo"/>
                <h1 className="font-bold text-2xl title">InmoHelp</h1>
            </div>
            <div className="hidden md:flex space-x-10 items-center">
                <ul className="hidden md:flex md:[&>li]:px-1 [&>li]:font-bold md:[&>li]:text-sm lg:[&>li]:px-5 lg:[&>li]:text-md">
                    <li><a href="">Propiedades</a></li>
                    <li><a href="">Indices de Precios</a></li>
                    <li><a href="">Contactanos</a></li>
                    <li><a href="">Idioma</a></li>
                </ul>
                <button className="bg-primary p-3 text-white rounded-tl-xl rounded-br-xl">Registrarse</button>
            </div>
        </nav>
    )
}