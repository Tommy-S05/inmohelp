'use client';
import Contactus from "@/app/components/contactus";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath, faBed, faVectorSquare, faCarSide} from "@fortawesome/free-solid-svg-icons";
import {Select, TextInput} from "flowbite-react";

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

const SelectInput = ({name, options}) => {
    return (
        <div className={'space-y-3'}>
            <header>
                <h2 className={'text-lg'}>
                    {name}
                </h2>
            </header>
            <div className={'pl-2'}>
                <Select id="Select" sizing={"sm"}>
                    {
                        options.map((option) => {
                            return (
                                <option>{option}</option>
                            );
                        })
                    }
                </Select>
            </div>
        </div>
    );
}
export default function Properties() {
    
    const Property = ({image, name, tarea, price, parqueos, tamano, banos, room}) => {
        return (
            <div className="relative w-64 h-[425px]">
                <img
                    className="h-full object-cover w-64"
                    src={image}
                    alt="Propiedad"
                />
                <footer className="flex justify-center w-full absolute bottom-0 ">
                    <div className=" p-3 bg-white bg-opacity-80 w-full h-36 relative rounded-tl-xl">
                        <header
                            className="absolute right-0 -top-5 text-white bg-primary p-2 rounded-tr-xl rounded-bl-xl">
                            ${price}/RD
                        </header>
                        <p className="text-xs py-2">{tarea}</p>
                        <h1 className="text-sm py-1">{name}</h1>
                        <hr></hr>
                        <ul className="text-xs grid grid-cols-2 mt-2 gap-1 [&>li]:flex [&>li]:items-center [&>li]:space-x-[2px] [&>li>i]:text-primary">
                            <li>
                                <FontAwesomeIcon icon={faCarSide} className={"text-primary w-[15px]"}/>
                                <p>{parqueos} Parqueos</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faVectorSquare} className={"text-primary w-[15px]"}/>
                                <p>{tamano} m</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBath} className={"text-primary w-[15px]"}/>
                                <p>{banos} Baños</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBed} className={"text-primary w-[15px]"}/>
                                <p>{room} Dormitorios</p>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    };
    
    return (
        <main>
            <section className={'lg:px-32 md:px-10 px-0'}>
                <header className={'pt-3 pb-6'}>
                    <h1 className={'text-5xl text-primary font-bold'}>
                        Properties
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
                                    <TextInput
                                        id="price_from"
                                        placeholder="Desde"
                                        sizing={"sm"}
                                        required
                                        type="number"
                                    />
                                    <TextInput
                                        id="price_to"
                                        placeholder="Hasta"
                                        sizing={"sm"}
                                        required
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
                        <Property
                            image={'/assets/destacados/image3.png'}
                            name={'Casa en venta'}
                            tarea={'Venta'}
                            price={'1,500,000'}
                            parqueos={'2'}
                            tamano={'200'}
                            banos={'2'}
                            room={'3'}
                        />
                        <Property
                            image={'/assets/destacados/image1.png'}
                            name={'Casa en venta'}
                            tarea={'Venta'}
                            price={'1,500,000'}
                            parqueos={'2'}
                            tamano={'200'}
                            banos={'2'}
                            room={'3'}
                        />
                        <Property
                            image={'/assets/destacados/image1.png'}
                            name={'Casa en venta'}
                            tarea={'Venta'}
                            price={'1,500,000'}
                            parqueos={'2'}
                            tamano={'200'}
                            banos={'2'}
                            room={'3'}
                        />
                        <Property
                            image={'/assets/destacados/image1.png'}
                            name={'Casa en venta'}
                            tarea={'Venta'}
                            price={'1,500,000'}
                            parqueos={'2'}
                            tamano={'200'}
                            banos={'2'}
                            room={'3'}
                        />
                        <Property
                            image={'/assets/destacados/image1.png'}
                            name={'Casa en venta'}
                            tarea={'Venta'}
                            price={'1,500,000'}
                            parqueos={'2'}
                            tamano={'200'}
                            banos={'2'}
                            room={'3'}
                        />
                        <Property
                            image={'/assets/destacados/image1.png'}
                            name={'Casa en venta'}
                            tarea={'Venta'}
                            price={'1,500,000'}
                            parqueos={'2'}
                            tamano={'200'}
                            banos={'2'}
                            room={'3'}
                        />
                    </section>
                </div>
            </section>
            <Contactus/>
        </main>
    );
}