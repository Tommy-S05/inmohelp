const fetchProperty = (id) => {
    return fetch(`http://127.0.0.1:8000/api/properties/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(response => response.json());
}

export async function Property({params}) {
    const {id} = params;
    const property = await fetchProperty(id);
    
    return (
        <article key={property.id} className={'cursor-pointer'}>
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
        </article>
    );
}