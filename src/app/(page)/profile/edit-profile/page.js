"use client";
export default function EditProfile() {
  return (
    <main className={"w-2/4 ml-52 pb-10"}>
      <section className={"py-4"}>
        <div>
          <p>Editar perfil</p>
        </div>
      </section>

      <form className="space-y-3">
        <div className={"grid grid-cols-1"}>
          <img
            className=""
            src="../assets/perfil/circle-user-regular.svg"
            height={100}
            width={100}
          />
        </div>
        <hr></hr>
        <h1 className="text-lg text-gray-500">Datos Personales</h1>

        <div className={"grid grid-cols-1"}>
          <div className="space-y-2">
            <label className="text-xs"> Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="first"
              required
              className=" w-full h-7 rounded-full"
            ></input>
          </div>
        </div>

        <div className={"grid grid-cols-2 gap-2"}>
          <div className={"space-y-1"}>
            <label className="text-xs"> Telefono</label>
            <input
              type="text"
              id="name"
              name="first"
              required
              className=" w-full h-7 rounded-full"
            ></input>
          </div>

          <div className={"space-y-1"}>
            <label className="text-xs"> celular</label>
            <input
              type="text"
              id="name"
              name="first"
              required
              className=" w-full h-7 rounded-full"
            ></input>
          </div>

          <div className={"space-y-1"}>
            <label className="text-xs"> Pais</label>
            <input
              type="text"
              id="name"
              name="first"
              required
              className=" w-full h-7 rounded-full"
            ></input>
          </div>

          <div className={"space-y-1"}>
            <label className="text-xs"> Direccion</label>
            <input
              type="text"
              id="name"
              name="first"
              required
              className=" w-full h-7 rounded-full"
            ></input>
          </div>

          <div className={"space-y-1"}>
            <label className="text-xs"> cedula</label>
            <input
              type="text"
              id="name"
              name="first"
              required
              className=" w-full h-7 rounded-full"
            ></input>
          </div>

          <div className={"space-y-1"}>
            <label className="text-xs"> Sexo</label>
            <input
              type="text"
              id="name"
              name="first"
              required
              className=" w-full h-7 rounded-full"
            ></input>
          </div>
        </div>

        <div className={"flex flex-row justify-center gap-2 "}>
          <button className="text-sm bg-primary rounded-full  text-white hover:bg-primary/80 px-5 py-2 ">
            Deshacer
          </button>
          <button className="text-sm bg-primary rounded-full  text-white hover:bg-primary/80 px-5 py-2">
            Guardar
          </button>
        </div>
      </form>
    </main>
  );
}
