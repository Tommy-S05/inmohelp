import UseAxios from "@/app/lib/axios";
import {useRouter} from "next/navigation";

export const financials = () => {
    const {AxiosInstance} = UseAxios();
    const router = useRouter();
    const csrf = () => AxiosInstance.get('/sanctum/csrf-cookie');
    const submitFinancialData = async({...props}) => {
        await csrf();
        await AxiosInstance.put('/api/account', {...props})
            .then(response => {
                // console.log(response, "response");
                router.refresh();
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
    
    const submitFinancialSettings = async({...props}, setLoading) => {
        setLoading(true);
        await csrf();
        await AxiosInstance.put('/api/settings', {...props})
            .then(response => {
                router.refresh();
            })
            .catch(error => {
                console.log(error, "error");
            })
            .finally(() => setLoading(false));
    }
    
    const getFinancialSetting = async() => {
        try {
            return await AxiosInstance.get('/api/settings');
        } catch (e) {
            console.log(e);
        }
    }
    return {submitFinancialData, getFinancialData, submitFinancialSettings, getFinancialSetting};
}