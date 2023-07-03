import UseAxios from "@/app/lib/axios";

export function Account() {
    const {AxiosInstance} = UseAxios();
    const getAccountTransactions = async() => {
        try {
            const {data} = await AxiosInstance.get('/api/account');
            return data;
        } catch (e) {
            console.log(e);
        }
    }
    
    return {getAccountTransactions};
}