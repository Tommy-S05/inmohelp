'use client';
import Contactus from "@/app/components/contactus";
// import {Select, TextInput} from "flowbite-react";
import {ListOfProperties} from "@/app/(page)/properties/components/ListOfProperties";
import {SelectInput, TextsInput} from "@/app/(page)/properties/components/Inputs";
import {useState} from "react";
import {useForm, FormProvider} from "react-hook-form"
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

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
    const methods = useForm();
    
    const [affordable, setAffordable] = useState(true);
    
    const handleAffordable = () => {
        setAffordable((affordable) => !affordable);
    }
    
    const filterProperties = async(filter) => {
        const [properties, setProperties] = useState([]);
        const queryFilters = `/purpose=${filter.purpose}&property_type=${filter.property_type}&area=${filter.area}&province=${filter.province}&neighborhood=${filter.neighborhood}&bedrooms=${filter.bedrooms}&garages=${filter.garages}&bathrooms=${filter.bathrooms}&min_price=${filter.min_price}&max_price=${filter.max_price}`;
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties${queryFilters}`, {
            next: {
                revalidate: 60
            }
        })
            .then(response => response.json());
        setProperties(data.data);
        return properties;
    }
    
    const onSubmit = async(data) => {
        const newProperties = await filterProperties(data);
        console.log(newProperties);
    }
    
    return (
        <main>
            <section className={'lg:px-32 md:px-10 px-0'}>
                <header className={'pt-3 pb-6'}>
                    <h1 className={'text-5xl text-primary font-bold'}>
                        Propiedades
                    </h1>
                </header>
                <div className={'flex space-x-5'}>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <aside className={'space-y-5 border-r-2 border-solid pb-3 pr-3'}>
                                <div className={'space-y-3'}>
                                    <div className="flex items-center">
                                        <input id="default-checkbox" type="checkbox" checked={affordable}
                                               onChange={handleAffordable}
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox"
                                               className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Para ti
                                        </label>
                                    </div>
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
                                        inputName={'property_type'}
                                        options={['Casa', 'Apartamento', 'Solar', 'Local']}
                                    />
                                </div>
                                <div className={'w-80'}>
                                    <SelectInput
                                        name={'Provincia'}
                                        inputName={'province'}
                                        options={['Santo Domingo', 'Santiago', 'La Vega']}
                                    />
                                </div>
                                <div className={'w-80'}>
                                    <SelectInput
                                        name={'Sector'}
                                        inputName={'neighborhood'}
                                        options={['Ensanche Naco', 'Piantini', 'Alma Rosa']}
                                    />
                                </div>
                                
                                <div className={'flex items-center space-x-8'}>
                                    <div className={'w-36'}>
                                        <SelectInput
                                            name={'Habitaciones'}
                                            inputName={'bedrooms'}
                                            options={[1, 2, 3, 4]}
                                        />
                                    </div>
                                    <div className={'w-36'}>
                                        <SelectInput
                                            name={'Baños'}
                                            inputName={'bathrooms'}
                                            options={[1, 2, 3, 4]}
                                        />
                                    </div>
                                </div>
                                <div className={'flex items-center space-x-8'}>
                                    <div className={'w-36 space-y-3'}>
                                        <header>
                                            <h2 className={'text-lg'}>
                                                Area
                                            </h2>
                                        </header>
                                        <TextsInput
                                            id="area"
                                            placeholder="100"
                                            sizing={"sm"}
                                            type="number"
                                            inputName={'area'}
                                        />
                                    </div>
                                    <div className={'w-36'}>
                                        <SelectInput
                                            name={'Parqueos'}
                                            inputName={'garages'}
                                            options={[1, 2, 3, 4]}
                                        />
                                    </div>
                                </div>
                                <div className={'space-y-3'}>
                                    <header>
                                        <h2 className={'text-lg'}>
                                            Precio
                                        </h2>
                                    </header>
                                    <div className={'flex items-center space-x-3'}>
                                        <TextsInput
                                            id="min_price"
                                            placeholder="Desde"
                                            sizing={"sm"}
                                            type="number"
                                            inputName={'min_price'}
                                        />
                                        <TextsInput
                                            id="max_price"
                                            placeholder="Hasta"
                                            sizing={"sm"}
                                            type="number"
                                            inputName={'max_price'}
                                        />
                                    </div>
                                </div>
                                <button
                                    type={'submit'}
                                    className="w-80 bg-primary text-lg py-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80">
                                    Aplicar Filtros
                                </button>
                            </aside>
                        </form>
                    </FormProvider>
                    <section className={'grid grid-cols-3 gap-x-5 gap-y-10'}>
                        <ListOfProperties affordable={affordable}/>
                    </section>
                </div>
            </section>
            <Contactus/>
        </main>
    );
}