"use client";
import "../borrar.css";
import Link from "next/link";
import {useState} from "react";
import {useAuth} from "@/app/hooks/auth";
import UseAxios from "@/app/lib/axios";

export default function Login() {
    //States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState([]);
    
    //Auth Hook
    // const {user, login, loading} = useAuth({middleware: "guest"});
    const {login} = useAuth();
    
    //Check Loading
    // if(loading) return <div>Loading...</div>
    const handleSubmit = async(e) => {
        e.preventDefault();
        // await login({setErrors, email, password});
        await login({email, password});
    }
    
    return (
        <section className="flex flex-col col items-center mt-32">
            <div
                className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h5 className="flex text-xl justify-center font-medium text-gray-900 dark:text-white">
                        iniciar sesion
                    </h5>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                            value={email}
                            autoFocus={true}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            contraseña
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                ></input>
                            </div>
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Login to your account
                    </button>
                    <button
                        type="submit"
                        className=" flex w-full justify-center  text-primary  border-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Sign In Whith Google{" "}
                        <img
                            className="ml-2"
                            src="assets/login/icons-google.svg"
                            height={20}
                            width={20}
                        />
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{" "}
                        <Link
                            href="/registrar"
                            className="text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Create account
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}
