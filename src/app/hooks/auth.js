import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useState} from "react";
import {useRouter} from "next/router";
import useSWR from "swr";
import instance from "@/app/lib/axios";

export const useAuth = () => {
    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const router = useRouter();
    
    //User
    const {data: user, error, mutate} = useSWR('/api/user', () =>
        instance.get('/api/user')
            .then(res => res.data.data)
            .catch(error => {
                if(error.response.status !== 409) throw error
            }),
    )
    
    //CSRF
    const csrf = instance.get('/sanctum/csrf-cookie');
    
    return {
        user, csrf, login, logout, loading, error
    };
    // return {
    //     login: async(email, password) => {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 email,
    //                 password
    //             }),
    //             credentials: 'include'
    //         });
    //         const data = await response.json();
    //         return data;
    //     },
    //     register: async(email, password) => {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 email,
    //                 password
    //             }),
    //             credentials: 'include'
    //         });
    //         const data = await response.json();
    //         return data;
    //     },
    //     logout: async() => {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             credentials: 'include'
    //         });
    //         const data = await response.json();
    //         return data;
    //     },
    //     me: async() => {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             credentials: 'include'
    //         });
    //         const data = await response.json();
    //         return data;
    //     }
    // };
}