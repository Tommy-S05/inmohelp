import Contactus from "@/app/components/contactus";

export default function Categories() {
    return (
        <main>
            <section id={'categories'} className={'bg-[#EEEEEE] md:py-10 pt-10'}>
                <div className={'lg:px-36 md:px-10 px-0'}>
                    <header className={'flex justify-between items-center lg:px-0 md:px-0 px-3 pb-10'}>
                        <h1 className={'text-primary md:text-5xl md:pl-6 lg:pl-0 text-2xl'}>
                            Categorias
                        </h1>
                        <div className={'flex items-center lg:gap-16 md:space-x-10 space-x-2'}>
                            <img className={'lg:w-36 md:w-24 w-12'} src="/assets/arrow-right.png" alt="arrow-right"/>
                        </div>
                    </header>
                    
                    <div className={'space-y-3'}>
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
                        
                        <div className={'flex flex-col space-y-2'}>
                            <div className={'grid grid-cols-12 gap-5'}>
                                <div className={'col-span-4 flex flex-col lg:space-y-1 md:space-y-0'}>
                                    <img className={'object-cover w-full'}
                                         src="/assets/categories/category-hotel.png"
                                         alt="hotel"/>
                                    <label className={'hidden md:flex md:flex-col'}>Hoteles</label>
                                </div>
                                <div className={'col-span-8 flex flex-col lg:space-y-1 md:space-y-0'}>
                                    <img className={'object-cover w-full'}
                                         src="/assets/categories/category-universidad.png"
                                         alt="hotel"/>
                                    <label className={'hidden md:flex md:flex-col'}>Universidad</label>
                                </div>
                            </div>
                            <div className={'grid grid-cols-12 gap-5'}>
                                <div className={'col-span-7 flex flex-col lg:space-y-1 md:space-y-0'}>
                                    <img className={'object-cover w-full'}
                                         src="/assets/categories/category-almacenes.png"
                                         alt="hotel"/>
                                    <label className={'hidden md:flex md:flex-col'}>Almacen</label>
                                </div>
                                <div className={'col-span-5 flex flex-col lg:space-y-1 md:space-y-0'}>
                                    <img className={'object-cover w-full'}
                                         src="/assets/categories/category-almacenes2.png"
                                         alt="hotel"/>
                                    <label className={'hidden md:flex md:flex-col'}>Almacen</label>
                                </div>
                            </div>
                            <div className={'grid grid-cols-12 gap-5'}>
                                <div className={'col-span-6 flex flex-col lg:space-y-1 md:space-y-0'}>
                                    <img className={'object-cover w-full'}
                                         src="/assets/categories/category-casadeverano.png"
                                         alt="hotel"/>
                                    <label className={'hidden md:flex md:flex-col'}>Casa de Verano</label>
                                </div>
                                <div className={'col-span-6 flex flex-col lg:space-y-1 md:space-y-0'}>
                                    <img className={'object-cover w-full'}
                                         src="/assets/categories/category-barriocerrado.png"
                                         alt="hotel"/>
                                    <label className={'hidden md:flex md:flex-col'}>Barrio Cerrado</label>
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