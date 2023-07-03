'use client'
import UseAxios from "@/app/lib/axios";
import {useState} from "react";

export default function useCategories() {
    const {AxiosInstance} = UseAxios();
    const [loading, setLoading] = useState(false);
    const getCategories = async() => {
        
        try {
            setLoading(true);
            const {data} = await AxiosInstance.get('/api/categories');
            return data;
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    
    return {getCategories, loading};
}