import UseAxios from "@/app/lib/axios";

export async function getCategories() {
    const {AxiosInstance} = UseAxios();
    try {
        const {data} = await AxiosInstance.get('/api/categories');
        return data;
    } catch (e) {
        console.log(e);
    }
}