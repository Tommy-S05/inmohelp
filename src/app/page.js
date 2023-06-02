'use client'
import Image from "next/image";
import Search from "@/app/components/search";

export default function Home() {
    return (
        <main>
            <section className="relative">
                <div className={'absolute flex-col flex justify-center items-center h-full w-full '}>
                    <h2 className={'font-bold text-7xl text-white p-5 px-10 backdrop-blur-sm'}>
                        Encuentra tu lugar ideal
                    </h2>
                    <Search/>
                </div>
                <img className="w-full object-none" src="/assets/background.png" alt="Background"/>
            </section>
        </main>
    );
}
