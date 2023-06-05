"use client";
import { Textarea, TextInput, Select, Checkbox } from "flowbite-react";
import { Dropdown } from "flowbite-react";

export default function AddProperty() {
  return (
    <section>
      {/* Titulo y Descripcion */}
      <div className=" ml-5 text-5xl">
        <h1>Postea tus propiedades</h1>
        <p className="w-1/4 ml-1 mt-6 mb-6 text-sm  ">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
      </div>

      {/* Informacion Cliente */}
      <div className="ml-5 mb-4 text-3xl ">
        <h1>Informacion Cliente</h1>

        <div className="grid mt-4 mr-4 gap-4 grid-cols-2">
          <TextInput
            id="email4"
            placeholder="Nombre Completo"
            sizing={"lg"}
            required
            type="text"
          />
          <TextInput
            id="email4"
            placeholder="Coreo Electronico"
            sizing={"lg"}
            required
            type="email"
          />

          <TextInput
            id="email4"
            placeholder="Numero de telefono"
            sizing={"lg"}
            required
            type="number"
          />
        </div>
      </div>

      {/* Informacion de la propiedad */}
      <div className="ml-5 mb-4 text-3xl ">
        <h1>Informacion De la Propiedad</h1>

        <div className="grid mt-4 mr-4 gap-4 grid-cols-2">
          <TextInput
            id="text"
            placeholder="Nombre del inmueble"
            sizing={"lg"}
            required
            type="text"
          />

          <Select id="Select" sizing={"lg"}>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Solar</option>
            <option>Local</option>
          </Select>

          <Select id="Select" sizing={"lg"}>
            <option>Vender</option>
            <option>Alquilar</option>
          </Select>

          <TextInput
            id="text"
            placeholder="Localizacion"
            sizing={"lg"}
            required
            type="text"
          />
          <TextInput
            id="email4"
            placeholder="Coreo Electronico"
            sizing={"lg"}
            required
            type="email"
          />

          <TextInput
            id="email4"
            placeholder="Precio"
            sizing={"lg"}
            required
            type="number"
          />

          <TextInput
            id="email4"
            placeholder="Habitaciones"
            sizing={"lg"}
            required
            type="number"
          />

          <TextInput
            id="email4"
            placeholder="Parqueos"
            sizing={"lg"}
            required
            type="number"
          />
        </div>
        <div className="mt-4 mr-4">
          <Textarea
            id="comment"
            placeholder="Descripcio(Opcional)."
            required
            rows={4}
          />
        </div>
      </div>

      <div className="ml-5 mb-4 text-3xl ">
        <h1>Caracteristicas de la propiedades</h1>

        {/* <div className="grid mt-4 mr-4 gap-4 grid-cols-2">
          <Checkbox defaultChecked id="accept" />
          <Checkbox defaultChecked id="accept" />
          <Checkbox defaultChecked id="accept" />
        </div> */}
      </div>
      <div className="grid ml-5 gap-1 grid-cols-4 w-1/2 mb-4" id="checkbox">
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Gardin</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Piscina</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Vigilancia</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Camara de seguridad</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Area de lavado</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Video de vigilancia</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Internet</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Elevador</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Jacuzzi</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Garage</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>Gazebo</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="accept" />
          <p>I agree with the</p>
        </div>
      </div>

      <div className="flex ml-4 mb-4 ">
        <button className="bg-primary p-3 text-white rounded-tl-xl rounded-br-xl">
          Enviar
        </button>
      </div>
    </section>
  );
}
