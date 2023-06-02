import { Dropdown } from "flowbite-react";
import { useState } from "react";

export default function Search() {
  const [contractType, setContractType] = useState("Tipo de Contrato");
  const [stateType, setStateType] = useState("Tipo de inmobiliaria");
  const [currency, setCurrency] = useState("Moneda");
  const [rooms, setRooms] = useState("Habitaciones");

  const [value, setValue] = useState(400);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className=" bg-white md:w-9/12 lg:w-7/12 hidden md:block p-5 rounded-2xl space-y-4 shadow-2xl ">
      <div className="flex space-x-4">
        <Dropdown label={contractType} color="gray" pill>
          <Dropdown.Item onClick={() => setContractType("Compra")}>
            Compra
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setContractType("Alquiler")}>
            Alquiler
          </Dropdown.Item>
        </Dropdown>
        <input
          type="search"
          className="rounded-full p-2 flex-grow bg-neutral-50 text-gray-900 pl-3 border-gray-200"
          placeholder="Naco, Paraiso, Piantini..."
        />
        <Dropdown label={stateType} color="gray" pill>
          <Dropdown.Item onClick={() => setStateType("Apartamento")}>
            Apartamento
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setStateType("Casa")}>
            Casa
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setStateType("Solares")}>
            Solares
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setStateType("Penthouse")}>
            Penthouse
          </Dropdown.Item>
        </Dropdown>
      </div>

      <div className="flex items-center space-x-4 w-full">
        <Dropdown label={currency} color="gray" pill>
          <Dropdown.Item onClick={() => setCurrency("USD")}>USD</Dropdown.Item>
          <Dropdown.Item onClick={() => setCurrency("PESO")}>DOM</Dropdown.Item>
        </Dropdown>
        <div class="price-range p-4 flex-grow">
          <span class="text-sm">$</span>
          <span class="text-sm">{value}</span>
          <input
            class="w-full accent-primary"
            type="range"
            value={value}
            min="0"
            max="1000"
            onChange={handleChange}
          />
          <div class="-mt-2 flex w-full justify-between">
            <span class="text-sm text-gray-600">0</span>
            <span class="text-sm text-gray-600">1000</span>
          </div>
        </div>
        <Dropdown label={rooms} color="gray" pill>
          <Dropdown.Item onClick={() => setRooms("1")}>1</Dropdown.Item>
          <Dropdown.Item onClick={() => setRooms("2")}>2</Dropdown.Item>
          <Dropdown.Item onClick={() => setRooms("3")}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => setRooms("4")}>4</Dropdown.Item>
        </Dropdown>
      </div>
    </form>
  );
}
