'use client';
import {useForm} from "react-hook-form";
import {financials} from "@/app/hooks/submit-financial-data";
import {useEffect, useState} from "react";

export default function Settings() {
    const [loading, setLoading] = useState(true);
    const [financialSettings, setFinancialSettings] = useState({
        interest_rate: 0,
        down_payment_available: 0,
        loan_term: 0,
    });
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm();
    const {getFinancialSetting, submitFinancialSettings} = financials();
    const onSubmit = async(data) => {
        await submitFinancialSettings(data, setLoading);
        // console.log(data);
    }
    
    useEffect(() => {
        const handleSettings = async() => {
            setLoading(true);
            const data = await getFinancialSetting().finally(() => setLoading(false));
            // console.log(data.data);
            setFinancialSettings(data.data);
        }
        handleSettings();
    }, []);
    useEffect(() => {
        setValue("interest_rate", financialSettings.interest_rate);
        setValue("down_payment_available", financialSettings.down_payment_available);
        setValue("loan_term", financialSettings.loan_term);
    }, [financialSettings]);
    return (
        <main className="w-full flex justify-center mb-20 mt-10">
            {loading ?
                <div className="spinner-container flex justify-center items-center mx-auto">
                    <div className="loading-spinner">
                    </div>
                </div> :
                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 p-5 rounded border-2 border-gray-500 ">
                    <div className="mb-4 flex justify-center font-bold text-xl">
                        Configuración financiera
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="Interest rate"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Tasa de interés (anual)
                        </label>
                        <input
                            type="number"
                            {...register("interest_rate", {valueAsNumber: true, required: true})}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                        ></input>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="down Payment available"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Inicial disponible
                        </label>
                        <input
                            type="number"
                            {...register("down_payment_available", {valueAsNumber: true, required: true})}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                        ></input>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="loan term"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Plazo del préstamo (años)
                        </label>
                        <input
                            type="number"
                            {...register("loan_term", {valueAsNumber: true, required: true})}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                        ></input>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Guardar
                        </button>
                    </div>
                </form>}
        </main>
    );
}
