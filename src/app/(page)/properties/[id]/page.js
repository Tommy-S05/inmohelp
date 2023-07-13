const fetchProperty = (id) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(response => response.json());
}

export default async function Property({params}) {
    const {id} = params;
    const property = await fetchProperty(id);
    return (
        <div>
            <h1>Property {params.id}</h1>
            <h2>{property.name}</h2>
        </div>
    );
}