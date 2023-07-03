import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBath, faBed, faCarSide, faVectorSquare} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const fetchProperties = () => {
    return fetch('http://127.0.0.1:8000/api/properties', {
        next: {
            revalidate: 60
        }
    })
        .then(response => response.json());
}

const fetchAffordableProperties = () => {
    return fetch('http://127.0.0.1:8000/api/affordable/properties', {
        next: {
            revalidate: 60
        }
    })
        .then(response => response.json());
}

const PropertySlide = ({image, name, purpose, price, garages, area, bathrooms, bedrooms}) => {
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
                    <p className="text-xs py-2">{purpose}</p>
                    <h1 className="text-sm py-1">{name}</h1>
                    <hr></hr>
                    <ul className="text-xs grid grid-cols-2 mt-2 gap-1 [&>li]:flex [&>li]:items-center [&>li]:space-x-[2px] [&>li>i]:text-primary">
                        <li>
                            <FontAwesomeIcon icon={faCarSide} className={"text-primary w-[15px]"}/>
                            <p>{garages} Parqueos</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faVectorSquare} className={"text-primary w-[15px]"}/>
                            <p>{area} m</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBath} className={"text-primary w-[15px]"}/>
                            <p>{bathrooms} Baños</p>
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

export async function ListOfProperties({affordable}) {
    let properties = [];
    
    if(affordable === true) {
        const data = await fetchAffordableProperties();
        properties = data.data;
        console.log(properties);
    } else {
        const data = await fetchProperties();
        properties = data.data;
        console.log(properties);
    }
    
    return properties?.map((property) => (
            <article key={property.id}>
                <Link href={`/properties/${property.id}`}>
                    <PropertySlide
                        image={'/assets/destacados/image3.png'}
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
        )
    )
}