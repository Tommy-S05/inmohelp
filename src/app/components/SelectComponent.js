import {useState} from "react";
import Select from "react-select";
import {useForm, Controller} from "react-hook-form";

const options = [
    {value: "1", label: "La Isabela"},
    {value: "2", label: "Arroyo Manzano"},
    {value: "33", label: "Ensanche Naco"},
    {value: "34", label: "Piantini"},
    {value: "49", label: "Bella Vista"},
    {value: "68", label: "Alma Rosa"},
    {value: "77", label: "Los Tres Ojos"},
];

export default function SelectComponent({onSubmit}) {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const {
        formState: {errors},
        handleSubmit,
        control
    } = useForm();
    
    const handleInputChange = (inputValue) => {
        const filtered = options.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredOptions(filtered);
    };
    
    
    return (
        <>
            <form className={'flex items-center'} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name={'name'}
                    control={control}
                    rules={{required: "Este campo es requerido"}}
                    render={({field}) => {
                        return (
                            <Select
                                className="w-10/12"
                                {...field}
                                options={filteredOptions}
                                placeholder={'Sector'}
                                onInputChange={handleInputChange}
                                // isSearchable
                                isMulti
                            />
                        );
                    }}
                />
                <button
                    className="ml-4 bg-primary p-2 text-white rounded-full px-5  hover:bg-primary/80"
                >
                    Buscar
                </button>
            </form>
            {errors.name && <p className={'text-red-700 mt-2'}>{errors.name.message}</p>}
        </>
    );
}
