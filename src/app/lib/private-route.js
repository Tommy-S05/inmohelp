'use client';
import {useEffect, useState} from "react";
import axios from "axios";

export default function PrivateRoute({children}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const authUser = async() => {
            await axios.get('/api/user')
                .then(response => {
                    setUser(response.data.data);
                    console.log(response.data.data, "response");
                })
        }
    }, [user]);
    return children
}

