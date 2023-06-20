'use client';
import {Select, TextInput} from "flowbite-react";

export const SelectInput = ({name, options}) => {
    return (
        <div className={'space-y-3'}>
            <header>
                <h2 className={'text-lg'}>
                    {name}
                </h2>
            </header>
            <div className={'pl-2'}>
                <Select id="Select" sizing={"sm"}>
                    {
                        options.map((option, index) => {
                            return (
                                <option key={index}>{option}</option>
                            );
                        })
                    }
                </Select>
            </div>
        </div>
    );
}

export const TextsInput = ({id, placeholder, sizing, tipo}) => {
    return (
        <TextInput
            id={id}
            placeholder={placeholder}
            sizing={sizing}
            type={tipo}
        />
    );
}