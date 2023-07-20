"use client";
import Contactus from "@/app/components/contactus";
import {ListOfProperties} from "@/app/(page)/properties/components/ListOfProperties";
import {SelectInput, TextsInput} from "@/app/(page)/properties/components/Inputs";
import {useEffect, useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {Button} from "flowbite-react";


export default function Properties() {
    const token = localStorage.getItem("token");
    const methods = useForm();
    
    const [properties, setProperties] = useState([]);
    const [active, setActive] = useState("venta");
    
    const [affordable, setAffordable] = useState(!!token);
    
    const handleAffordable = (event) => {
        // console.log('event: ', event.target.checked);
        methods.setValue("affordable", !affordable);
        setAffordable((affordable) => !affordable);
    };
    
    const handlePurpose = (value) => {
        setActive(value);
        methods.setValue("purpose", value);
    };
    
    const initialProperties = () => {
        let params = `?purpose=${active}${token ? `&affordable=${affordable}` : ""}`;
        console.log(params);
        if(token) {
            return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties/affordable${params}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json());
        }
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties${params}`)
            .then((response) => response.json());
    };
    const filterProperties = async(filter) => {
        const queryFilters = `?purpose=${filter.purpose}&property_type=${filter.property_type}&area=${filter.area}&province=${filter.province}&neighborhood=${filter.neighborhood}&bedrooms=${filter.bedrooms}&garages=${filter.garages}&bathrooms=${filter.bathrooms}&min_price=${filter.min_price}&max_price=${filter.max_price}`;
        const data = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/properties${queryFilters}`,
            {
                next: {
                    revalidate: 60,
                },
            }
        ).then((response) => response.json());
        console.log(
            data,
            `${process.env.NEXT_PUBLIC_API_URL}/api/properties${queryFilters}`
        );
        setProperties(data.data);
    };
    
    const filterAffordableProperties = async(filter) => {
        console.log('affordable', filter.affordable);
        const queryFilters = `?affordable=${filter.affordable}&purpose=${filter.purpose}&property_type=${filter.property_type}&area=${filter.area}&province=${filter.province}&neighborhood=${filter.neighborhood}&bedrooms=${filter.bedrooms}&garages=${filter.garages}&bathrooms=${filter.bathrooms}&min_price=${filter.min_price}&max_price=${filter.max_price}`;
        const data = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/properties/affordable${queryFilters}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                next: {
                    revalidate: 60,
                },
            }
        ).then((response) => response.json());
        console.log(
            data,
            `${process.env.NEXT_PUBLIC_API_URL}/api/properties/affordable${queryFilters}`
        );
        setProperties(data.data);
    };
    
    const onSubmit = async(data) => {
        console.log(data);
        if(token) {
            await filterAffordableProperties(data);
        } else {
            await filterProperties(data);
        }
    };
    
    const Checkbox = ({name}) => {
        return (
            <div className="flex items-center">
                <input
                    id="default-checkbox"
                    type="checkbox"
                    {...methods.register("purpose")}
                    value={name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    {name}
                </label>
            </div>
        );
    };
    
    useEffect(() => {
        methods.setValue("purpose", "venta");
        methods.setValue('affordable', affordable);
        const handleProperties = async() => {
            const newProperties = await initialProperties();
            setProperties(newProperties.data)
        }
        handleProperties();
    }, []);
    
    return (
        <main>
            <section className={"lg:px-32 md:px-10 px-0"}>
                <header className={"pt-3 pb-6"}>
                    <h1 className={"text-5xl text-primary font-bold"}>Propiedades</h1>
                </header>
                <div className={"flex space-x-5"}>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <aside className={"space-y-5 border-r-2 border-solid pb-3 pr-3"}>
                                <div className={"space-y-3"}>
                                    {
                                        token && (
                                            <div className="flex items-center">
                                                <button
                                                    className={`${
                                                        affordable === true && "bg-primary text-white border-primary"
                                                    } w-80 text-xl p-3 border-4 rounded-l-lg hover:bg-primary/60 `}
                                                    onClick={(e) => handleAffordable(e)}
                                                >
                                                    <p>Para tí</p>
                                                </button>
                                                {/*<input*/}
                                                {/*    id="default-checkbox"*/}
                                                {/*    type="checkbox"*/}
                                                {/*    checked={affordable}*/}
                                                {/*    onChange={() => setAffordable((affordable) => !affordable)}*/}
                                                {/*    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"*/}
                                                {/*/>*/}
                                                {/*<label*/}
                                                {/*    htmlFor="default-checkbox"*/}
                                                {/*    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"*/}
                                                {/*>*/}
                                                {/*    Para tí*/}
                                                {/*</label>*/}
                                            </div>
                                        )
                                    }
                                    <header>
                                        <h2 className={"text-lg"}>Tarea</h2>
                                    </header>
                                    <div className={"pl-2 flex"}>
                                        <button
                                            className={`${
                                                active === "venta" && " bg-primary text-white"
                                            } p-3 border rounded-l-lg hover:bg-primary/60  `}
                                            onClick={() => handlePurpose("venta")}
                                        >
                                            <p>Venta</p>
                                        </button>
                                        <button
                                            className={`${
                                                active === "alquiler" && " bg-primary text-white"
                                            } p-3 border rounded-r-lg mx-1 hover:bg-primary/60 `}
                                            onClick={() => handlePurpose("alquiler")}
                                        >
                                            <p>Alquiler</p>
                                        </button>
                                    </div>
                                </div>
                                <div className={"w-80"}>
                                    <SelectInput
                                        name={"Tipo de inmueble"}
                                        inputName={"property_type"}
                                        options={["Casa", "Apartamento", "Solar", "Local"]}
                                    />
                                </div>
                                <div className={"w-80"}>
                                    <SelectInput
                                        name={"Provincia"}
                                        inputName={"province"}
                                        options={["Santo Domingo", "Santiago", "La Vega"]}
                                    />
                                </div>
                                <div className={"w-80"}>
                                    <SelectInput
                                        name={"Sector"}
                                        inputName={"neighborhood"}
                                        options={["Ensanche Naco", "Piantini", "Alma Rosa"]}
                                    />
                                </div>
                                
                                <div className={"flex items-center space-x-8"}>
                                    <div className={"w-36"}>
                                        <SelectInput
                                            name={"Habitaciones"}
                                            inputName={"bedrooms"}
                                            options={[1, 2, 3, 4]}
                                        />
                                    </div>
                                    <div className={"w-36"}>
                                        <SelectInput
                                            name={"Baños"}
                                            inputName={"bathrooms"}
                                            options={[1, 2, 3, 4]}
                                        />
                                    </div>
                                </div>
                                <div className={"flex items-center space-x-8"}>
                                    <div className={"w-36 space-y-3"}>
                                        <header>
                                            <h2 className={"text-lg"}>Área</h2>
                                        </header>
                                        <TextsInput
                                            id="area"
                                            placeholder={`Área (m${'\u00B2'})`}
                                            sizing={"sm"}
                                            type="number"
                                            inputName={"area"}
                                        />
                                    </div>
                                    <div className={"w-36"}>
                                        <SelectInput
                                            name={"Parqueos"}
                                            inputName={"garages"}
                                            options={[1, 2, 3, 4]}
                                        />
                                    </div>
                                </div>
                                <div className={"space-y-3"}>
                                    <header>
                                        <h2 className={"text-lg"}>Precio</h2>
                                    </header>
                                    <div className={"flex items-center space-x-3"}>
                                        <TextsInput
                                            id="min_price"
                                            placeholder="Desde"
                                            sizing={"sm"}
                                            type="number"
                                            inputName={"min_price"}
                                        />
                                        <TextsInput
                                            id="max_price"
                                            placeholder="Hasta"
                                            sizing={"sm"}
                                            type="number"
                                            inputName={"max_price"}
                                        />
                                    </div>
                                </div>
                                <button
                                    type={"submit"}
                                    className="w-80 bg-primary text-lg py-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80"
                                >
                                    Aplicar Filtros
                                </button>
                            </aside>
                        </form>
                    </FormProvider>
                    <section className={"grid grid-cols-3 gap-x-5 gap-y-10"}>
                        <ListOfProperties
                            affordable={affordable}
                            newProperties={properties}
                        />
                    </section>
                </div>
            </section>
            <Contactus/>
        </main>
    );
}
