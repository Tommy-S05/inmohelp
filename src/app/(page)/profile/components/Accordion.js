'use client'
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {financials} from "@/app/hooks/submit-financial-data";

export default function DefaultAccordion({categories, accounts}) {
    const {submitFinancialData} = financials();
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors}
    } = useForm();
    
    const onSubmit = async data => {
        
        let total_incomes = 0;
        let total_expenses = 0;
        const subCategories = [];
        
        // Recorrer los valores del formulario
        for(const [key, value] of Object.entries(data)) {
            
            // Verificar si el nombre del campo comienza con "expense-"
            if(key.startsWith("amount-")) {
                // Obtener el ID de la subcategoría del nombre del campo
                const subCategory_id = Number(key.split("-")[1]);
                const amount = Number(value);
                if(!isNaN(amount) && value.trim() !== "") {
                    subCategories.push({subCategory_id, amount});
                    if(subCategory_id >= 1 && subCategory_id <= 6) {
                        total_incomes += amount;
                    } else {
                        total_expenses += amount;
                    }
                }
            }
        }
        
        await submitFinancialData({total_incomes, total_expenses, subCategories});
    };
    
    useEffect(() => {
        accounts?.map((account) => {
            account.account_transactions?.map((transaction) => {
                // Establecer el valor del campo con el nombre "amount-{id}" con el valor de la transacción
                // let amount = parseFloat(transaction.amount).toFixed(2);
                let amount = transaction.amount.toFixed(2);
                setValue(`amount-${transaction.sub_category_id}`, amount);
            });
        });
    }, [accounts]);
    const AccordionT = ({title, content}) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div>
                <button type={"button"} className="accordion" onClick={() => setIsOpen(!isOpen)}>
                    {title}
                </button>
                {isOpen &&
                    <div className={"panel space-y-3"}>
                        {
                            content.map((subcategory, index) => {
                                return (
                                    <div key={subcategory.id} className={'flex space-x-8'}>
                                        <h2>{subcategory.name}</h2>
                                        <input type={"number"}
                                               defaultValue={null} {...register(`amount-${subcategory.id}`)}/>
                                    </div>
                                )
                            })
                        }
                    </div>}
            </div>
        )
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                {
                    categories?.map((category, index) => {
                        return (
                            <AccordionT key={category.id} title={category.name} content={category.subcategories}/>
                        )
                    })
                }
                <button type={"submit"}
                        className={"bg-primary p-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80"}>
                    Guardar
                </button>
            </fieldset>
        </form>
    )
}

// import {useState} from "react";
//
// export const Accordion = ({title, content}) => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <fieldset>
//             <button className="accordion" onClick={() => setIsOpen(!isOpen)}>
//                 {title}
//             </button>
//             {isOpen &&
//                 <div className="panel">
//                     <p>{content}</p>
//                 </div>}
//         </fieldset>
//     )
// }