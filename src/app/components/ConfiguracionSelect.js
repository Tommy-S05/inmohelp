import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "opcion1", label: "Opción 1" },
  { value: "opcion2", label: "Opción 2" },
  { value: "opcion3", label: "Opción 3" },
  { value: "opcion4", label: "tetera" },
  { value: "opcion5", label: "trueque" },
  { value: "opcion6", label: "empanada" },
  { value: "opcion7", label: "en tu cara" },
];

export default function SelectComponent() {
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleInputChange = (inputValue) => {
    // Filtrar las opciones según el inputValue
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredOptions(filtered);
  };

  const handleButtonClick = () => {
    // Lógica para manejar el clic en el botón
    console.log("Botón clickeado");
  };

  return (
    <main className="flex items-center">
      <Select
        className="w-10/12"
        options={filteredOptions}
        isSearchable
        isMulti
        onInputChange={handleInputChange}
      />

      <button
        onClick={handleButtonClick}
        className="ml-4 bg-primary p-2 text-white rounded-full px-5  hover:bg-primary/80"
      >
        Buscar
      </button>
    </main>
  );
}
