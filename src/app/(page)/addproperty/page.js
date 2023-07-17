"use client";
import {Textarea, TextInput, Select} from "flowbite-react";
import {Dropdown} from "flowbite-react";


export default function AddProperty() {
    const Checkbox = ({name}) => {
        return (
            <div className="flex items-center">
                <input id="default-checkbox" type="checkbox" value=""
                       className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {name}
                </label>
            </div>
        );
    }
    return (
        <main>
            <section className={'space-y-20 py-5 lg:px-0 md:px-10 px-5'}>
                {/* Titulo y Descripcion */}
                <section className={'lg:px-20'}>
                    <div className="flex lg:flex-row lg:space-y-0 flex-col space-y-5 lg:justify-between">
                        <h1 className={'lg:w-1/3 text-5xl font-bold'}>
                            Postea tus propiedades
                        </h1>
                        <p className="lg:w-1/3 md:w-1/2 text-sm">
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
                            las industrias desde el año 1500, cuando un impresor (N. del T.
                            persona que se dedica a la imprenta) desconocido usó una galería de
                            textos y los mezcló de tal manera que logró hacer un libro de textos
                            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
                            texto de relleno en documentos electrónicos, quedando esencialmente
                            igual al original.
                        </p>
                    </div>
                </section>
                
                {/* Propiedad */}
                <section className={'space-y-10 lg:px-40'}>
                    {/* Informacion Cliente */}
                    <section className={'space-y-5'}>
                        <h1 className={'text-3xl'}>
                            Informacion Del Cliente
                        </h1>
                        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                            <TextInput
                                id="email4"
                                placeholder="Nombre Completo"
                                sizing={"lg"}
                                required
                                type="text"
                            />
                            <TextInput
                                id="email4"
                                placeholder="Correo Electronico"
                                sizing={"lg"}
                                required
                                type="email"
                            />
                            
                            <TextInput
                                id="email4"
                                placeholder="Numero de telefono"
                                sizing={"lg"}
                                required
                                type="number"
                            />
                        </div>
                    </section>
                    
                    {/* Informacion de la propiedad */}
                    <section className={'space-y-5'}>
                        <h1 className={'text-3xl'}>
                            Informacion De la Propiedad
                        </h1>
                        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                            <TextInput
                                id="text"
                                placeholder="Nombre del inmueble"
                                sizing={"lg"}
                                required
                                type="text"
                            />
                            
                            <Select id="Select" sizing={"lg"}>
                                <option>Casa</option>
                                <option>Apartamento</option>
                                <option>Solar</option>
                                <option>Local</option>
                            </Select>
                            
                            <Select id="Select" sizing={"lg"}>
                                <option>Vender</option>
                                <option>Alquilar</option>
                            </Select>
                            
                            <TextInput
                                id="text"
                                placeholder="Localizacion"
                                sizing={"lg"}
                                required
                                type="text"
                            />
                            <TextInput
                                id="price"
                                placeholder="Precio"
                                sizing={"lg"}
                                required
                                type="number"
                            />
                            <TextInput
                                id="bethrooms"
                                placeholder="Habitaciones"
                                sizing={"lg"}
                                required
                                type="number"
                            />
                            <TextInput
                                id="bathrooms"
                                placeholder="Baños"
                                sizing={"lg"}
                                required
                                type="number"
                            />
                            <TextInput
                                id="email4"
                                placeholder="Parqueos"
                                sizing={"lg"}
                                required
                                type="number"
                            />
                        </div>
                        <div>
                            <Textarea
                                id="comment"
                                placeholder="Descripcio(Opcional)."
                                required
                                rows={6}
                            />
                        </div>
                    </section>
                    
                    {/* Caracteristicas de la propiedad */}
                    <section className={'space-y-5'}>
                        <h1 className={'text-3xl'}>
                            Caracteristicas de la propiedades
                        </h1>
                        <div className="grid gap-7 md:grid-cols-4 grid-cols-2" id="checkbox">
                            <Checkbox name={'Jardin'}/>
                            <Checkbox name={'Piscina'}/>
                            <Checkbox name={'Vigilancia'}/>
                            <Checkbox name={'Camara de seguridad'}/>
                            <Checkbox name={'Area de lavado'}/>
                            <Checkbox name={'Video de vigilancia'}/>
                            <Checkbox name={'Internet'}/>
                            <Checkbox name={'Elevador'}/>
                            <Checkbox name={'Jacuzzi'}/>
                            <Checkbox name={'Garage'}/>
                            <Checkbox name={'Gazebo'}/>
                            <Checkbox name={'I agree with the'}/>
                        </div>
                    </section>
                    
                    <button className="bg-primary p-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80">
                        Subir Propiedad
                    </button>
                </section>
            </section>
        </main>
    );
}
