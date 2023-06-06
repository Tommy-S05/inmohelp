"use client";
import Image from "next/image";
import Search from "@/app/components/search";
import Categories from "@/app/components/categories";
// import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Probando() {
  const AptSlider = () => {
    return (
      <div className=" relative w-80 overflow-auto ">
        <img
          alt="Propiedad"
          className=" h-80 object-cover"
          src="https://imagens-revista.vivadecora.com.br/uploads/2020/10/Moveis-planejados-para-decoracao-de-apartamento-pequeno-com-ambientes-integrados-Foto-Arkpad.jpg"
        />
        <footer className="flex justify-center w-full absolute -bottom-24">
          <div className=" p-3 bg-white w-52 h-36  relative border-black rounded-xl">
            <header className="absolute right-0 -top-5 text-white bg-primary p-2 rounded-tr-xl rounded-bl-xl">
              $25,000/USD
            </header>
            <p className="text-xs py-2">Venta</p>
            <h1 className="text-sm py-1">Casa doble, Barrio Alberdi</h1>
            <hr></hr>
            <ul className="text-xs grid grid-cols-2 mt-2 gap-2 [&>li]:flex [&>li]:items-center [&>li]:space-x-[3px] [&>li>i]:text-primary">
              <li>
                <i className="bi bi-door-open"></i>
                <p>3 Ambientes</p>
              </li>
              <li>
                <p>60 m</p>
              </li>
              <li>
                <p>3 Banos</p>
              </li>
              <li>
                <i className="bi bi-house-heart"></i>
                <p>3 Dormitorios</p>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <main className=" space-y-16">
      <section className="relative">
        <div
          className={
            "absolute flex-col flex justify-center items-center h-full w-full space-y-5 "
          }
        >
          <h2
            className={
              "font-bold text-3xl md:text-5xl lg:text-7xl text-white p-5 m-5 px-10 backdrop-blur-sm"
            }
          >
            Encuentra tu lugar ideal
          </h2>

          <button className=" bg-primary rounded-full p-4 uppercase text-white  block md:hidden">
            Inicia tu busqueda
          </button>

          <Search />
        </div>
        <img
          className=" w-full object-cover h-[600px]"
          src="/assets/background.png"
          alt="Background"
        />
      </section>
      <div className="bg-primary w-72 p-5 rounded-br-3xl ">
        <h2 className="text-5xl text-white pl-10">Detalles</h2>
      </div>
      <section>
        {/* <div className="bg-primary w-72 p-5 rounded-br-3xl ">
          <h2 className="text-5xl text-white pl-10">Detalles</h2>
        </div> */}
        <Slider {...settings}>
          <div>
            <AptSlider />
          </div>
          <div>
            <AptSlider />
          </div>
          <div>
            <AptSlider />
          </div>
          <div>
            <AptSlider />
          </div>
          <div>
            <AptSlider />
          </div>
          <div>
            <AptSlider />
          </div>
          <div>
            <AptSlider />
          </div>
          <div>
            <AptSlider />
          </div>
        </Slider>
      </section>
      {/*<Categories/>*/}
      <section id={"contactanos"} className={"relative"}>
        <div
          className={
            "absolute flex-col flex justify-center items-center h-full w-full md:space-y-5 space-y-20"
          }
        >
          <h2 className={"font-bold md:text-5xl text-5xl text-white"}>
            Contactanos
          </h2>
          <p className={"hidden md:flex text-white"}>
            Sabemos lo que necesitas
          </p>
          <button className="bg-white p-3 px-7 text-black rounded-xl">
            Enviar un mensaje
          </button>
        </div>
        <div
          className={
            "hidden bg-white w-full md:flex justify-center pb-14 pt-4 px-5"
          }
        >
          <img
            className={
              "hidden md:flex h-[400px] w-[900px] lg:object-cover object-contain"
            }
            src="/assets/contactanos/contactanos.png"
            alt="Contactanos"
          />
        </div>
        <img
          className={"md:hidden  w-full object-cover"}
          src="/assets/contactanos/contactanos-movile.png"
          alt="Contactanos"
        />
      </section>
    </main>
  );
}
