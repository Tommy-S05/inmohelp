'use client'
import DefaultAccordion from "@/app/perfil/components/Accordion";
import {useEffect, useState} from "react";
import useCategories from "@/app/hooks/Categories";

export default function Perfil() {
    const [categories, setCategories] = useState([]);
    
    const {getCategories} = useCategories();
    useEffect(() => {
        const handleCategories = async() => {
            const data = await getCategories();
            setCategories(data);
        }
        handleCategories();
    }, []);
    
    return (
        <section className="p-4 w-full">
            <DefaultAccordion categories={categories}/>
        </section>
    );
}