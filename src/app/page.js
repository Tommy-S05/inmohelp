"use client";
import Image from "next/image";
import Search from "@/app/components/search";
import Categories from "@/app/components/categories";

export default function Home() {
    return (
        <main>
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
                    
                    <Search/>
                </div>
                <img
                    className=" w-full object-cover h-[600px]"
                    src="/assets/background.png"
                    alt="Background"
                />
            </section>
            <Categories/>
            <section id={"contactanos"} className={"relative"}>
                <div
                    className={
                        "absolute flex-col flex justify-center items-center h-full w-full md:space-y-5 space-y-20"
                    }
                >
                    <h2 className={"font-bold md:text-5xl text-5xl text-white"}>Contactanos</h2>
                    <p className={"hidden md:flex text-white"}>Sabemos lo que necesitas</p>
                    <button className="bg-white p-3 px-7 text-black rounded-xl">
                        Enviar un mensaje
                    </button>
                </div>
                <div className={"hidden bg-white w-full md:flex justify-center pb-14 pt-4 px-5"}>
                    <img
                        className={"hidden md:flex h-[400px] w-[900px] lg:object-cover object-contain"}
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
