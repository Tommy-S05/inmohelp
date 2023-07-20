'use client'
import Link from "next/link";
import {useForm} from "react-hook-form";
import {useAuth} from "@/app/hooks/auth";

export default function registrar() {
    const {registerAuth} = useAuth();
    const {
        register,
        handleSubmit,
        getValues
    } = useForm()
    
    const onSubmit = async(data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        // await registerAuth({name, email, password})
        await registerAuth({data})
    }
    return (
        <section className="flex flex-col col items-center mt-7">
            <div
                className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="flex text-xl justify-center font-medium text-gray-900 dark:text-white">
                        REGÍSTRATE
                    </h5>
                    <div>
                        <label
                            htmlFor="text"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Nombre completo
                        </label>
                        <input
                            {...register('name', {required: true})}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Pedro"
                        ></input>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            {...register('email', {required: true})}
                            type="email"
                            className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"}
                            placeholder="name@company.com"
                        ></input>
                    </div>
                    <div>
                        <label
                            htmlFor="phone_number"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Teléfono
                        </label>
                        <input
                            {...register('phone_number', {required: true})}
                            type={"text"}
                            className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"}
                            placeholder={"809-555-5555"}
                        ></input>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Contraseña
                        </label>
                        <input
                            {...register('password', {required: true})}
                            type="password"
                            placeholder="**********"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        ></input>
                    </div>
                    {/*<div>*/}
                    {/*    <label*/}
                    {/*        htmlFor="password"*/}
                    {/*        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"*/}
                    {/*    >*/}
                    {/*        Confirmar contraseña*/}
                    {/*    </label>*/}
                    {/*    <input*/}
                    {/*        {...register('confirm_password', {required: true})}*/}
                    {/*        type="password"*/}
                    {/*        placeholder="**********"*/}
                    {/*        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"*/}
                    {/*    ></input>*/}
                    {/*</div>*/}
                    
                    <button
                        type="submit"
                        className="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        REGISTRAR
                    </button>
                    <button
                        type="submit"
                        onClick={event => event.preventDefault()}
                        className=" flex w-full justify-center  text-primary  border-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Continuar con Google{" "}
                        <img
                            className="ml-2"
                            src="assets/login/icons-google.svg"
                            height={20}
                            width={20}
                        />
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        ¿Ya tienes una cuenta?{" "}
                        <Link
                            href="/login"
                            className="text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}
