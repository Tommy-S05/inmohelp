// 'use client';
import Contactus from "@/app/components/contactus";
// import {Select, TextInput} from "flowbite-react";
import {ListOfProperties} from "@/app/properties/components/ListOfProperties";
import {SelectInput, TextsInput} from "@/app/properties/components/Inputs";

const Checkbox = ({name}) => {
    return (
        <div className="flex items-center">
            <input id="default-checkbox" type="checkbox" value=""
                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {name}
            </label>
        </div>
    );
}

export default function Properties() {
    return (
        <main>
            <section className={'lg:px-32 md:px-10 px-0'}>
                <header className={'pt-3 pb-6'}>
                    <h1 className={'text-5xl text-primary font-bold'}>
                        Propiedades
                    </h1>
                </header>
                <div className={'flex space-x-5'}>
                    <form>
                        <aside className={'space-y-5 border-r-2 border-solid pb-3 pr-3'}>
                            <div className={'space-y-3'}>
                                <header>
                                    <h2 className={'text-lg'}>
                                        Tarea
                                    </h2>
                                </header>
                                <div className={'pl-2'}>
                                    <Checkbox name={'Venta'}/>
                                    <Checkbox name={'Alquiler'}/>
                                </div>
                            </div>
                            <div className={'w-80'}>
                                <SelectInput
                                    name={'Tipo de propiedad'}
                                    options={['Casa', 'Apartamento', 'Solar', 'Local']}
                                />
                            </div>
                            <div className={'w-80'}>
                                <SelectInput
                                    name={'Provincia'}
                                    options={['Santo Domingo', 'Santiago', 'La Vega']}
                                />
                            </div>
                            <div className={'w-80'}>
                                <SelectInput
                                    name={'Sector'}
                                    options={['Paraiso', 'Piantini', 'Naco']}
                                />
                            </div>
                            
                            <div className={'flex items-center space-x-8'}>
                                <div className={'w-36'}>
                                    <SelectInput
                                        name={'Habitaciones'}
                                        options={['1+', '2+', '3+', '4+']}
                                    />
                                </div>
                                <div className={'w-36'}>
                                    <SelectInput
                                        name={'Parqueos'}
                                        options={['1+', '2+', '3+', '4+']}
                                    />
                                </div>
                            </div>
                            <div className={'w-80'}>
                                <SelectInput
                                    name={'Baños'}
                                    options={['1+', '2+', '3+', '4+']}
                                />
                            </div>
                            <div className={'space-y-3'}>
                                <header>
                                    <h2 className={'text-lg'}>
                                        Precio
                                    </h2>
                                </header>
                                <div className={'flex items-center space-x-3'}>
                                    <TextsInput
                                        id="price_from"
                                        placeholder="Desde"
                                        sizing={"sm"}
                                        type="number"
                                    />
                                    <TextsInput
                                        id="price_to"
                                        placeholder="Hasta"
                                        sizing={"sm"}
                                        type="number"
                                    />
                                </div>
                            </div>
                            <button
                                className="w-80 bg-primary text-lg py-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80">
                                Aplicar Filtros
                            </button>
                        </aside>
                    </form>
                    <section className={'grid grid-cols-3 gap-x-5 gap-y-10'}>
                        <ListOfProperties/>
                    </section>
                </div>
            </section>
            <Contactus/>
        </main>
    );
}