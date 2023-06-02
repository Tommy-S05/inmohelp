"use client";
import Image from "next/image";
import Search from "@/app/components/search";

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

          <Search />
        </div>
        <img
          className=" w-full object-cover h-[600px]"
          src="/assets/background.png"
          alt="Background"
        />
      </section>
    </main>
  );
}
