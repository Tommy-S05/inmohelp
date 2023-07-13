"use client";
import { Select, TextInput } from "flowbite-react";
import { useFormContext } from "react-hook-form";

export const SelectInput = ({ name, options, inputName }) => {
  const { register } = useFormContext();
  const optionsProperty = [
    { name: "Departamento", id: 1 },
    { name: "Casa", id: 2 },
    { name: "Comercios", id: 3 },
    { name: "Almacenes", id: 8 },
  ];
  return (
    <div className={"space-y-3"}>
      <header>
        <h2 className={"text-lg"}>{name}</h2>
      </header>
      <div className={"pl-2"}>
        <Select id={inputName} sizing={"sm"} {...register(inputName)}>
          <option value={""}>Selecciona</option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export const TextsInput = ({ id, placeholder, sizing, tipo, inputName }) => {
  const { register } = useFormContext();
  return (
    <TextInput
      id={id}
      placeholder={placeholder}
      sizing={sizing}
      type={tipo}
      {...register(inputName)}
    />
  );
};
