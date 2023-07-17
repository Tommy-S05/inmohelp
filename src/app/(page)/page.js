"use client";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath, faBed, faCarSide, faVectorSquare} from "@fortawesome/free-solid-svg-icons";
import Search from "@/app/components/search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactus from "@/app/components/contactus";
import Link from "next/link";

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 625,
                settings: {
                    dots: false,
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 505,
                settings: {
                    dots: false,
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
    const image1 = "/assets/destacados/image1.png";
    const image2 = "/assets/destacados/image2.png";
    const image3 = "/assets/destacados/image2.png";
    const image4 =
        "https://imagens-revista.vivadecora.com.br/uploads/2020/10/Moveis-planejados-para-decoracao-de-apartamento-pequeno-com-ambientes-integrados-Foto-Arkpad.jpg";
    
    const AptSlider = ({image, name}) => {
        return (
            <div className=" relative w-72 h-[400px]">
                <img alt="Propiedad" className=" h-80 object-cover w-72" src={image}/>
                <footer className="flex justify-center w-full absolute -bottom-0 ">
                    <div className=" p-3 bg-white w-52 h-36  relative border-black  rounded-xl">
                        <header
                            className="absolute right-0 -top-5 text-white bg-primary p-2 rounded-tr-xl rounded-bl-xl">
                            $25,000/USD
                        </header>
                        <p className="text-xs py-2">Venta</p>
                        <h1 className="text-sm py-1">{name}</h1>
                        <hr></hr>
                        <ul className="text-xs grid grid-cols-2 mt-2 gap-1 [&>li]:flex [&>li]:items-center [&>li]:space-x-[2px] [&>li>i]:text-primary">
                            <li>
                                <FontAwesomeIcon icon={faCarSide} className={"text-primary w-[15px]"}/>
                                <p>3 Parqueos</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faVectorSquare} className={"text-primary w-[15px]"}
                                />
                                <p>60 m</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBath} className={"text-primary w-[15px]"}/>
                                <p>3 Banos</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed} className={"text-primary w-[15px]"}/>
                                <p>3 Dormitorios</p>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    };
    
    return (
        <main>
            <div className="md:space-y-5">
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
                <section>
                    <div className="bg-primary w-72 p-5 rounded-br-3xl ">
                        <h2 className="text-5xl text-white pl-5">Destacados</h2>
                    </div>
                    <div className=" max-w-screen-lg mx-auto p-5 cursor-pointer">
                        <Slider {...settings}>
                            <AptSlider name={'Casa, Barrio Alberdi'} image={image1}/>
                            <AptSlider name={'Casa doble, Barrio Alberdi'} image={image2}/>
                            <AptSlider name={'Casa trio, Barrio Alberdi'} image={image3}/>
                            <AptSlider name={'Casa cuadruple, Barrio Alberdi'} image={image4}/>
                            <AptSlider name={'Casa quintuple, Barrio Alberdi'} image={image1}/>
                        </Slider>
                    </div>
                </section>
                <section id={'categories'} className={'bg-[#EEEEEE] md:py-10 pt-10'}>
                    <div className={'space-y-10 lg:px-36 md:px-10 px-0'}>
                        <header className={'flex justify-between items-center lg:px-0 md:px-0 px-3'}>
                            <h1 className={'text-primary md:text-5xl md:pl-6 lg:pl-0 text-2xl'}>
                                Categorias
                            </h1>
                            <div className={'flex items-center lg:gap-16 md:space-x-10 space-x-2'}>
                                <Link href={'/categories'}>Ver Todas</Link>
                                <img className={'lg:w-36 md:w-24 w-12'} src="/assets/arrow-right.png"
                                     alt="arrow-right"/>
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
            </div>
            <Contactus/>
        </main>
    );
}
