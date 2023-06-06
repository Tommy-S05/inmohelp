"use client";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath} from "@fortawesome/free-solid-svg-icons";
import {faBed, faVectorSquare} from "@fortawesome/free-solid-svg-icons";
import Search from "@/app/components/search";
import Link from "next/link";


export default function Home() {
    const AptSlider = () => {
        return (
            <div className=" relative w-80 ">
                <img
                    alt="Propiedad"
                    className=" h-80 object-cover"
                    src="https://imagens-revista.vivadecora.com.br/uploads/2020/10/Moveis-planejados-para-decoracao-de-apartamento-pequeno-com-ambientes-integrados-Foto-Arkpad.jpg"
                />
                <footer className="flex justify-center w-full absolute -bottom-24">
                    <div className="border border-neutral-100/80 p-3 bg-white w-52 h-36 relative rounded-xl">
                        <header
                            className="absolute right-0 -top-5 text-white bg-primary p-2 rounded-tr-xl rounded-bl-xl">
                            $25,000/USD
                        </header>
                        <p className="text-xs py-2">Venta</p>
                        <h1 className="text-sm py-1">Casa doble, Barrio Alberdi</h1>
                        <hr></hr>
                        <ul className="text-xs grid grid-cols-2 mt-2 gap-1 [&>li]:flex [&>li]:items-center [&>li]:space-x-[3px] [&>li>i]:text-primary">
                            <li>
                                <i className="bi bi-door-open"></i>
                                <p>3 Ambientes</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faVectorSquare} className={'text-primary'}/>
                                <p>60 m</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBath} className={'text-primary'}/>
                                <p>3 Banos</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed} className={'text-primary text-[10px]'}/>
                                <p>3 Dormitorios</p>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    };
    
    return (
        <main className="">
            <section className="relative">
                <div className={"absolute flex-col flex justify-center items-center h-full w-full space-y-5 "}>
                    <h2 className={"font-bold text-3xl md:text-5xl lg:text-7xl text-white p-5 m-5 px-10 backdrop-blur-sm"}>
                        Encuentra tu lugar ideal
                    </h2>
                    <button className=" bg-primary rounded-full p-4 uppercase text-white  block md:hidden">
                        Inicia tu busqueda
                    </button>
                    
                    <Search/>
                </div>
                <img
                    className=" w-full object-cover h-[600px]"
                    src="/assets/background.png"
                    alt="Background"
                />
            </section>
            {/*<section className={'pb-24 pt-10'}>*/}
            {/*    <div className="bg-primary w-80 p-5 rounded-br-3xl ">*/}
            {/*        <h2 className="text-5xl text-white pl-10">Destacados</h2>*/}
            {/*    </div>*/}
            {/*    <div className=" max-w-screen-lg mx-auto p-5">*/}
            {/*        <div className=" flex space-x-3">*/}
            {/*            <AptSlider/>*/}
            {/*            <AptSlider/>*/}
            {/*            <AptSlider/>*/}
            {/*            <AptSlider/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            
            <section id={'categories'} className={'bg-[#EEEEEE] md:py-10 pt-10'}>
                <div className={'space-y-10 lg:px-36 md:px-10 px-0'}>
                    <header className={'flex justify-between items-center lg:px-0 md:px-0 px-3'}>
                        <h1 className={'text-primary md:text-5xl md:pl-6 lg:pl-0 text-2xl'}>
                            Categorias
                        </h1>
                        <div className={'flex items-center lg:gap-16 md:space-x-10 space-x-2'}>
                            <a href="">Ver Todas</a>
                            <img className={'lg:w-36 md:w-24 w-12'} src="/assets/arrow-right.png" alt="arrow-right"/>
                            {/*<FontAwesomeIcon icon={faArrowRight} className={'text-[#555555]'}/>*/}
                        </div>
                    </header>
                    <div className={'grid md:grid-cols-2 lg:gap-5 md:gap-3 grid-cols-1'}>
                        <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>
                            <img src="/assets/categories/category-departamento.png" alt="departamento"/>
                            <label className={'hidden md:flex md:flex-col'}>Departamentos</label>
                        </div>
                        <div className={'grid md:grid-rows-2 lg:gap-2 md:gap-1 grid-cols-1'}>
                            <div className={'grid grid-cols-1'}>
                                <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>
                                    <img src="/assets/categories/category-casa.png" alt="casas"/>
                                    <label className={'hidden md:flex md:flex-col'}>Casas</label>
                                </div>
                            </div>
                            <div className={'grid md:grid-cols-2 md:gap-3 grid-cols-1'}>
                                <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>
                                    <img src="/assets/categories/category-comercios.png" alt="comercios"/>
                                    <label className={'hidden md:flex md:flex-col'}>Comercios</label>
                                </div>
                                <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>
                                    <img src="/assets/categories/category-countries.png" alt="countries"/>
                                    <label className={'hidden md:flex md:flex-col'}>Countries</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id={"contactanos"} className={"relative"}>
                <div
                    className={"absolute flex-col flex justify-center items-center h-full w-full md:space-y-5 space-y-20"}>
                    <h2 className={"font-bold md:text-5xl text-5xl text-white"}>
                        Contactanos
                    </h2>
                    <p className={"hidden md:flex text-white"}>
                        Sabemos lo que necesitas
                    </p>
                    <Link href={'/contactus'} className="bg-white p-3 px-7 text-black rounded-xl">
                        Enviar un mensaje
                    </Link>
                </div>
                <div className={"hidden bg-white w-full md:flex justify-center pb-14 pt-4 px-5"}>
                    <img className={"hidden md:flex h-[400px] w-[900px] lg:object-cover object-contain"}
                         src="/assets/contactanos/contactanos.png"
                         alt="Contactanos"
                    />
                </div>
                <img className={"md:hidden w-full object-cover"}
                     src="/assets/contactanos/contactanos-movile.png"
                     alt="Contactanos"
                />
            </section>
        </main>
    );
}
