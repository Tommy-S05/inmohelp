'use client';
import Image from "next/image";
import {Label, Textarea, TextInput} from "flowbite-react";

export default function Contactus() {
    return (
        <main>
            <section id={'contactus'} className={'w-full flex justify-center bg-[#EEEEEE] py-10'}>
                <div className={"bg-[#333333] w-[750px] justify-center items-center py-10"}>
                    <h1 className={'text-4xl text-[#0DEDFF] font-bold text-center'}>Contactanos</h1>
                    <div className="max-w-full flex justify-center items-center py-3">
                        <div className="mb-2 block px-5">
                            <label className={'text-white text-md font-bold'}>
                                Nombre
                            </label>
                            <TextInput
                                id="email4"
                                placeholder="Pedro"
                                required
                                type="text"
                            />
                        </div>
                        <div className="mb-2 block px-5">
                            <label className={'text-white text-md font-bold'}>
                                Apellido
                            </label>
                            <TextInput
                                id="email4"
                                placeholder="Almonte"
                                required
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="max-w-full flex justify-center items-center py-5">
                        <div className="mb-2 block px-5">
                            <label className={'text-white text-md font-bold'}>
                                Email
                            </label>
                            <TextInput
                                id="email4"
                                placeholder="example@gmail.com"
                                required
                                type="email"
                            />
                        </div>
                        <div className="mb-2 block px-5">
                            <label className={'text-white text-md font-bold'}>
                                Telefono
                            </label>
                            <TextInput
                                id="email4"
                                placeholder='8097862310'
                                required
                                type="number"
                            />
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-center items-center py-5" id="textarea">
                        <div className={'block'}>
                            <div className="mb-2 block">
                                <label className={'text-white text-md font-bold'}>
                                    Your message
                                </label>
                            </div>
                            <Textarea
                                id="comment"
                                placeholder="Message"
                                required
                                rows={4}
                                cols={50}
                            />
                        </div>
                    </div>
                    <div className={'flex justify-center'}>
                        <button
                            className="bg-[#0DEDFF] p-3 text-[#313131] rounded-tl-xl rounded-br-xl hover:bg-[#0DEDFF]/80">
                            Contactar
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
