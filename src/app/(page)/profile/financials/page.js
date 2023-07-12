'use client'
import DefaultAccordion from "@/app/(page)/profile/components/Accordion";
import {useEffect, useState} from "react";
import useCategories from "@/app/hooks/Categories";
import {Account} from "@/app/hooks/account";

export default function ProfileFinancials() {
    const [categories, setCategories] = useState([]);
    const [accounts, setAccount] = useState([]);
    const {getAccountTransactions} = Account();
    const {getCategories, loading} = useCategories();
    
    useEffect(() => {
        const handleCategories = async() => {
            const data = await getCategories();
            setCategories(data);
        }
        const handleAccount = async() => {
            const data = await getAccountTransactions();
            setAccount(data);
        }
        handleCategories();
        handleAccount();
    }, []);
    
    return (
        <section className="p-4 w-full">
            {loading ?
                <p>Cargando...</p> :
                <DefaultAccordion categories={categories} accounts={accounts}/>
            }
        </section>
    );
}