import Contactus from "@/app/components/contactus";
// import Image from "next/image";

export default function Categories() {
    const Category = ({name, image, alt}) => {
        return (
            <div className={"flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                <img
                    className={'object-cover w-full h-full'}
                    src={image}
                    alt={alt}
                />
                <label
                    className={"md:static md:flex md:flex-col md:text-black md:bg-inherit md:p-0 absolute text-white bg-black right-0 top-3/4 pl-8 pr-3 py-1"}>
                    {name}
                </label>
                {/*<label*/}
                {/*    className={"md:flex md:flex-col md:text-black md:-bottom-5 md:-left-1 md:w-24 md:bg-inherit  absolute right-0 top-3/4 md:top-auto text-white bg-black px-2"}>*/}
                {/*    Departamentos*/}
                {/*</label>*/}
            </div>
        );
    }
    
    return (
        <main>
            <section id={"categories"} className={"bg-[#EEEEEE] md:py-10 pt-10 "}>
                <div className={"lg:px-36 md:px-10 px-0 "}>
                    <header className={"flex justify-between items-center lg:px-0 md:px-0 px-3 pb-10"}>
                        <h1 className={"text-primary md:text-5xl md:pl-6 lg:pl-0 text-2xl"}>
                            Categorias
                        </h1>
                        <div className={"flex items-center lg:gap-16 md:space-x-10 space-x-2 "}>
                            <a href="">Ver Todas</a>
                            <img
                                className={"lg:w-36 md:w-24 w-12"}
                                src="/assets/arrow-right.png"
                                alt="arrow-right"
                            />
                        </div>
                    </header>
                    
                    <div className={"md:space-y-3"}>
                        <div className={"grid md:grid-cols-2 lg:gap-5 md:gap-3 grid-cols-1"}>
                            <div className={"flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                                <Category
                                    name={"Departamentos"}
                                    image={"/assets/categories/category-departamento.png"}
                                    alt={"departamento"}
                                />
                            </div>
                            <div className={"grid md:grid-rows-2 lg:gap-2 md:gap-1 grid-cols-1"}>
                                <div className={"grid grid-cols-1"}>
                                    <Category
                                        name={"Casas"}
                                        image={"/assets/categories/category-casa.png"}
                                        alt={"casa"}
                                    />
                                </div>
                                <div className={"grid md:grid-cols-2 md:gap-3 grid-cols-1"}>
                                    <div className={"flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                                        <Category
                                            name={"Comercios"}
                                            image={"/assets/categories/category-comercios.png"}
                                            alt={"comercios"}
                                        />
                                    </div>
                                    <div className={"flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                                        <Category
                                            name={"Countries"}
                                            image={"/assets/categories/category-countries.png"}
                                            alt={"countries"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={"flex flex-col md:space-y-6"}>
                            <div className={"grid grid-cols-1 md:grid-cols-12 md:gap-5"}>
                                <div className={"col-span-4 flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                                    <Category
                                        name={"Hoteles"}
                                        image={"/assets/categories/category-hotel.png"}
                                        alt={"hotel"}
                                    />
                                </div>
                                <div className={"col-span-8 flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                                    <Category
                                        name={"Universidad"}
                                        image={"/assets/categories/category-universidad.png"}
                                        alt={"universidad"}
                                    />
                                </div>
                            </div>
                            
                            <div className={"grid grip-cols-1 md:grid-cols-12 md:gap-5 "}>
                                <div className={"md:col-span-7 flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                                    <Category
                                        name={"Almacen"}
                                        image={"/assets/categories/category-almacenes.png"}
                                        alt={"almacen"}
                                    />
                                </div>
                                <div className={"col-span-5 flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                                    <Category
                                        name={"Almacen"}
                                        image={"/assets/categories/category-almacenes2.png"}
                                        alt={"almacen"}
                                    />
                                </div>
                            </div>
                            
                            <div className={"grid grip-cols-1 md:grid-cols-12 md:gap-5 "}>
                                <div className={"col-span-6 flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                                    <Category
                                        name={"Casa de Verano"}
                                        image={"/assets/categories/category-casadeverano.png"}
                                        alt={"casadeverano"}
                                    />
                                </div>
                                <div className={"col-span-6 flex flex-col lg:space-y-1 md:space-y-0 relative"}>
                                    <Category
                                        name={"Barrio Cerrado"}
                                        image={"/assets/categories/category-barriocerrado.png"}
                                        alt={"barriocerrado"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contactus/>
        </main>
    );
}
