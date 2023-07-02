import UseAxios from "@/app/lib/axios";
import {useRouter} from "next/navigation";

export const financials = () => {
    const {AxiosInstance} = UseAxios();
    const router = useRouter();
    const csrf = () => AxiosInstance.get('/sanctum/csrf-cookie');
    const submitFinancialData = async({...props}) => {
        await csrf();
        await AxiosInstance.post('/api/account', {...props})
            .then(response => {
                console.log(response, "response");
                // router.back();
            })
            .catch(error => {
                console.log(error, "error");
            })
    }
    const getFinancialData = async() => {
        try {
            const {account} = await AxiosInstance.get('/api/account');
            return account;
        } catch (e) {
            console.log(e);
        }
    }
    return {submitFinancialData, getFinancialData};
}