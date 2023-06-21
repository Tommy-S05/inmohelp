import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath, faBed, faCarSide, faVectorSquare} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useEffect, useState} from "react";


const AptSlider = ({image, name, purpose, price, garages, area, bathrooms, bedrooms}) => {
    return (
        <div className=" relative w-72 h-[400px]">
            <img alt="Propiedad" className=" h-80 object-cover w-72" src={image}/>
            <footer className="flex justify-center w-full absolute -bottom-0 ">
                <div className=" p-3 bg-white w-52 h-36  relative border-black  rounded-xl">
                    <header
                        className="absolute right-0 -top-5 text-white bg-primary p-2 rounded-tr-xl rounded-bl-xl">
                        ${price}/USD
                    </header>
                    <p className="text-xs py-2">{purpose}</p>
                    <h1 className="text-sm py-1">{name}</h1>
                    <hr></hr>
                    <ul className="text-xs grid grid-cols-2 mt-2 gap-1 [&>li]:flex [&>li]:items-center [&>li]:space-x-[2px] [&>li>i]:text-primary">
                        <li>
                            <FontAwesomeIcon icon={faCarSide} className={"text-primary w-[15px]"}/>
                            <p>{garages} Parqueos</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faVectorSquare} className={"text-primary w-[15px]"}
                            />
                            <p>{area} m</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBath} className={"text-primary w-[15px]"}/>
                            <p>{bathrooms} Banos</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBed} className={"text-primary w-[15px]"}/>
                            <p>{bedrooms} Dormitorios</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default function PropertiesOutstanding() {
    const fetchOutstanding = () => {
        fetch('http://127.0.0.1:8000/api/properties/outstanding')
            .then(response => response.json)
            .then(data => console.log(data.json()))
            .catch(error => console.log(error));
        //     return fetch('http://127.0.0.1:8000/api/properties/outstanding', {
        //         next: {
        //             revalidate: 60
        //         }
        //     })
        //         .then(response => response.json());
    }
    
    const [data, setData] = useState({});
    useEffect(() => {
        fetchOutstanding();
    }, []);
    // const properties = await fetchOutstanding();
    
    return (<div></div>
        // data?.map((property) => (
        //     <article key={property.id}>
        //         <Link href={`/properties/${property.id}`}>
        //             <AptSlider
        //                 image={'/assets/destacados/image3.png'}
        //                 name={property.name}
        //                 purpose={property.purpose}
        //                 price={property.price}
        //                 garages={property.garages}
        //                 area={property.area}
        //                 bathrooms={property.bathrooms}
        //                 bedrooms={property.bedrooms}
        //             />
        //         </Link>
        //     </article>
        //
        // ))
    );
};