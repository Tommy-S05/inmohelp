import Contactus from "@/app/components/contactus";
import Category from "@/app/components/Category";
// import Image from "next/image";

const fetchCategories = () => {
    return fetch('http://127.0.0.1:8000/api/property-types/all', {
        next: {
            revalidate: 60
        }
    })
        .then(response => response.json());
}
export default async function Categories() {
    const categories = await fetchCategories();
    return (
        <main>
            <section id={"categories"} className={"bg-[#EEEEEE] md:py-10 pt-10 "}>
                <div className={"lg:px-36 md:px-10 px-0 "}>
                    <header className={"flex justify-between items-center lg:px-0 md:px-0 px-3 pb-10"}>
                        <h1 className={"text-primary md:text-5xl md:pl-6 lg:pl-0 text-2xl"}>
                            Categorias
                        </h1>
                        <div className={'flex items-center lg:gap-16 md:space-x-10 space-x-2'}>
                            <img className={'lg:w-36 md:w-24 w-12'} src="/assets/arrow-right.png" alt="arrow-right"/>
                        </div>
                    </header>
                    
                    <div className={"md:space-y-3"}>
                        <div className={"grid md:grid-cols-2 lg:gap-5 md:gap-3 grid-cols-1"}>
                            <Category name={categories.data[0].name} image={categories.data[0].image}/>
                            <div className={"grid md:grid-rows-2 lg:gap-2 md:gap-1 grid-cols-1"}>
                                <div className={"grid grid-cols-1"}>
                                    <Category name={categories.data[1].name} image={categories.data[1].image}/>
                                </div>
                                <div className={"grid md:grid-cols-2 md:gap-3 grid-cols-1"}>
                                    <Category name={categories.data[2].name} image={categories.data[2].image}/>
                                    <Category name={categories.data[3].name} image={categories.data[3].image}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className={"flex flex-col md:space-y-6"}>
                            <div className={"grid grid-cols-1 md:grid-cols-12 md:gap-5"}>
                                <div className={"col-span-4"}>
                                    <Category name={categories.data[4].name} image={categories.data[4].image}/>
                                </div>
                                <div className={"col-span-8"}>
                                    <Category name={categories.data[5].name} image={categories.data[5].image}/>
                                </div>
                            </div>
                            
                            <div className={"grid grip-cols-1 md:grid-cols-12 md:gap-5 "}>
                                <div className={"md:col-span-7"}>
                                    <Category name={categories.data[6].name} image={categories.data[6].image}/>
                                </div>
                                <div className={"col-span-5"}>
                                    <Category name={categories.data[7].name} image={categories.data[7].image}/>
                                </div>
                            </div>
                            
                            {/*<div className={"grid grip-cols-1 md:grid-cols-12 md:gap-5 "}>*/}
                            {/*    <div className={"col-span-6"}>*/}
                            {/*        <Category name={categories.data[8].name} image={categories.data[8].image}/>*/}
                            {/*    </div>*/}
                            {/*    <div className={"col-span-6"}>*/}
                            {/*        <Category name={categories.data[9].name} image={categories.data[9].image}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>
            <Contactus/>
        </main>
    );
}
