import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useRouter} from "next/navigation";
import {useAuth} from "@/app/hooks/auth";

export default function UseAxios() {
    const router = useRouter();
    
    const AxiosInstance = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            // 'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        withCredentials: true
    });
    
    AxiosInstance.interceptors.response.use(async function(config) {
        const token = localStorage.getItem('token');
        if(token) {
            console.log(token, "token");
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, function(error) {
        if(error.response.status === 401) {
            router.push('/login');
        }
    });
    
    return {AxiosInstance};
}
