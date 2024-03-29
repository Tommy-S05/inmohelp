'use client'
import {useRouter} from "next/navigation";
import UseAxios from "@/app/lib/axios";
import useSWR from "swr";
import {useEffect, useState} from "react";

export const useAuth = () => {
    const {AxiosInstance} = UseAxios();
    const router = useRouter();
    const [user, setUser] = useState(null);
    
    const csrf = () => AxiosInstance.get('/sanctum/csrf-cookie');
    
    const userAsync = async() => {
        const authUser = await AxiosInstance.get('/api/user')
        setUser(authUser.data);
    }
    
    // useEffect(() => {
    //     userAsync();
    // }, [])
    const login = async({email, password}) => {
        await csrf();
        await AxiosInstance.post('/api/login', {
            email: email,
            password: password
        })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                // localStorage.setItem('user', response.data.data);
                // mutate();
                router.push('/');
            })
            .catch(error => {
                console.log(error, "error");
            });
    }
    
    //register
    const registerAuth = async({...props}) => {
        await csrf();
        await AxiosInstance.post('/api/register', props.data)
            .then(response => {
                console.log("response register: ", response.data);
                localStorage.setItem('token', response.data.token);
                router.push('/profile/financials');
            })
            .catch(error => {
                console.log("error register: ", error.response);
                // if(error.response.status !== 422) throw error
                
                // setErrors(Object.values(error.response.data.errors).flat());
            });
    }
    
    //Logout
    const logout = async() => {
        await AxiosInstance.post('/api/logout')
            .then(() => {
                localStorage.removeItem('token');
                router.push('/');
                router.refresh();
            })
    }
    
    return {user, login, registerAuth, logout};
}

// export const useAuth = ({middleware} = {}) => {
//     // const [user, setUser] = useState(null);
//     // const [error, setError] = useState(null);
//
//     const router = useRouter();
//
//     //Loading
//     const [loading, setLoading] = useState(false);
//
//     //User
//     const {data: user, error, mutate} = useSWR('/api/user', () =>
//         AxiosInstance.get('/api/user')
//             .then(res => res.data.data)
//             .catch(error => {
//                 if(error.response.status !== 409) throw error
//             }),
//     )
//
//     //CSRF
//     const csrf = () => AxiosInstance.get('/sanctum/csrf-cookie');
//
//     //Login
//     const login = async({setErrors, email, password}) => {
//         // setErrors([]);
//         await csrf();
//
//         AxiosInstance.post('/api/login', {
//             email,
//             password
//         })
//             .then(() => mutate() && router.push('/'))
//             .catch(error => {
//                 if(error.response.status !== 422) throw error
//
//                 // setErrors(Object.values(error.response.data.errors).flat());
//             });
//         // .then(res => {
//         //         if(res.data.success) {
//         //             router.push('/');
//         //         }
//         //     }
//         // )
//
//         // await instance.post('/login', {
//         //     email,
//         //     password
//         // })
//     }
//
//     //Logout
//     const logout = async() => {
//         await AxiosInstance.post('/api/logout')
//             .then(() => mutate(null) && router.push('/login'))
//         // mutate(null);
//         // router.push('/login');
//     }
//
//     //register
//     const register = async({setErrors, ...props}) => {
//         await csrf();
//         await AxiosInstance.post('/api/register', props)
//             .then(() => mutate() && router.push('/'))
//             .catch(error => {
//                 if(error.response.status !== 422) throw error
//
//                 setErrors(Object.values(error.response.data.errors).flat());
//             });
//     }
//
//     // useEffect(() => {
//     //     if(user || error)
//     //         setLoading(false);
//     //
//     //     if(middleware === 'guest' && user) {
//     //         router.push('/');
//     //     }
//     //
//     //     if(middleware === 'auth' && !user && error) {
//     //         router.push('/login');
//     //     }
//     // })
//
//     return {
//         user, csrf, login, logout, register, loading
//     };
// }