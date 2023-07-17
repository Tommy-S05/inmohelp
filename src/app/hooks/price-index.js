import UseAxios from "@/app/lib/axios";

export const usePriceIndex = () => {
    const {AxiosInstance} = UseAxios();
    // const getPriceIndex = async({params}) => {
    //     const token = localStorage.getItem('token');
    //     return await fetch(`http://localhost:8000/api/price-index${params}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             //set token
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .catch(error => console.log(error));
    // }
    
    const getPriceIndex = async({params}) => {
        return await AxiosInstance.get(`/api/price-index${params}`);
    }
    //
    // return {priceIndex, getPriceIndex, loading};
    return {getPriceIndex};
    
}