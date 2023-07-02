import UseAxios from "@/app/lib/axios";

export default function useCategories() {
    const {AxiosInstance} = UseAxios();
    
    const getCategories = async() => {
        try {
            const {data} = await AxiosInstance.get('/api/categories');
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    
    return {getCategories};
}