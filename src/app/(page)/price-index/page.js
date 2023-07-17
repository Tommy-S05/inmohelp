"use client";
import SelectComponent from "@/app/components/SelectComponent";
import {useState} from "react";
import {usePriceIndex} from "@/app/hooks/price-index";


export default function PriceIndex() {
    const [priceIndex, setPriceIndex] = useState([]);
    const {getPriceIndex} = usePriceIndex();
    let formattedNumber = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    const onSubmit = async(data) => {
        let params = '?';
        for(const [key, value] of Object.entries(data.name)) {
            params += `name[]=${value.value}&`;
        }
        const response = await getPriceIndex({params});
        setPriceIndex(response.data);
    };
    
    return (
        <main className="w-full lg:px-32 md:px-10 px-0 pt-10 pb-36 space-y-12">
            <header className={""}>
                <h1 className={"text-5xl text-primary font-bold"}>Indices de Precios</h1>
            </header>
            <section className={'w-full flex justify-center items-center'}>
                <div className="w-6/12 bg-white p-5 rounded-2xl shadow-2xl ">
                    <SelectComponent onSubmit={onSubmit}/>
                </div>
            </section>
            {priceIndex.length > 0 ? (
                <>
                    <section className="w-full flex justify-center">
                        <div className={'grid grid-cols-2 gap-5'}>
                            {
                                priceIndex.map((item) => {
                                    return (
                                        <>
                                            <div key={item.identifier}
                                                 className="w-72  text-center bg-white  p-5 rounded border-4 border-gray-200  ">
                                                <p className="text-2xl font-bold">RD${formattedNumber.format(item.averagePrice)}</p>
                                                <p className="text-sm text-gray-600">
                                                    Precio por metro cuadrado (m²) en {item.name} apróximadamente
                                                </p>
                                            </div>
                                            
                                            <div key={item.identifier + 1}
                                                 className=" w-72 text-center bg-white  p-5 rounded border-4 border-gray-200  ">
                                                <p className="text-2xl font-bold">{formattedNumber.format(item.maxArea)} (m²)</p>
                                                <p className="text-sm text-gray-600">
                                                    Área máxima a comprar en {item.name} apróximadamente
                                                </p>
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </section>
                </>
            ) : (
                <div className="w-6/12 bg-white p-5 rounded-2xl shadow-2xl mt-4">
                    <p>No se encontraron resultados</p>
                </div>
            )}
        </main>
    );
}
