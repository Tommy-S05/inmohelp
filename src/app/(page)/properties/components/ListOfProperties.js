"use client";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBath,
    faBed,
    faCarSide,
    faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useEffect, useState} from "react";

const fetchProperties = () => {
    return fetch(`http://localhost:8000/api/properties`, {
        next: {
            revalidate: 60,
        },
    }).then((response) => response.json());
};

const fetchAffordableProperties = () => {
    return fetch(
        `http://localhost:8000/api/affordable/properties`,
        {
            next: {
                revalidate: 60,
            },
        }
    ).then((response) => response.json());
};

const PropertySlide = ({image, name, purpose, price, garages, area, bathrooms, bedrooms,}) => {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <div className="relative w-64 h-[425px]">
            <img className="h-full object-cover w-64" src={image} alt="Propiedad"/>
            <footer className="flex justify-center w-full absolute bottom-0 ">
                <div className=" p-3 bg-white bg-opacity-80 w-full h-36 relative rounded-tl-xl">
                    <header className="absolute right-0 -top-5 text-white bg-primary p-2 rounded-tr-xl rounded-bl-xl">
                        {USDollar.format(price)} /RD
                    </header>
                    <p className="text-xs py-2">{purpose}</p>
                    <h1 className="text-sm py-1">{name}</h1>
                    <hr></hr>
                    <ul className="text-xs grid grid-cols-2 mt-2 gap-1 [&>li]:flex [&>li]:items-center [&>li]:space-x-[2px] [&>li>i]:text-primary">
                        <li>
                            <FontAwesomeIcon
                                icon={faCarSide}
                                className={"text-primary w-[15px]"}
                            />
                            <p>{garages} Parqueos</p>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faVectorSquare}
                                className={"text-primary w-[15px]"}
                            />
                            <p>{area} m<sup>2</sup></p>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faBath}
                                className={"text-primary w-[15px]"}
                            />
                            <p>{bathrooms} Baños</p>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faBed}
                                className={"text-primary w-[15px]"}
                            />
                            <p>{bedrooms} Habitaciones</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export function ListOfProperties({affordable, newProperties}) {
    const [properties, setProperties] = useState([]);
    
    // useEffect(() => {
    //     const handleAffordable = async() => {
    //         if(affordable === true) {
    //             const data = await fetchAffordableProperties();
    //             setProperties(data.data);
    //             console.log(properties);
    //         } else {
    //             const data = await fetchProperties();
    //             setProperties(data.data);
    //             console.log(properties);
    //         }
    //     };
    //     handleAffordable();
    // }, [affordable]);
    
    useEffect(() => {
        setProperties(newProperties);
    }, [newProperties]);
    
    return properties?.map((property) => (
        <article key={property.id}>
            <Link href={`/properties/${property.id}`}>
                <PropertySlide
                    image={"/assets/destacados/image3.png"}
                    name={property.name}
                    purpose={property.purpose}
                    price={property.price}
                    garages={property.garages}
                    area={property.area}
                    bathrooms={property.bathrooms}
                    bedrooms={property.bedrooms}
                />
            </Link>
        </article>
    ));
}
