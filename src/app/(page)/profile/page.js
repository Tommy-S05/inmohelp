export default function Profile() {
  return (
    <main className=" w-full space-y-7 bg-gray-200 pb-20">
      <section className="flex justify-center items-center p-4 ">
        <div>
          <p className="text-3xl">Profile</p>
        </div>
      </section>

      <section className="flex justify-center items-center gap-5 space-x-5 bg-white p-5">
        <div>
          <img
            className=""
            src="assets/perfil/circle-user-regular.svg"
            height={70}
            width={70}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="py-2">
            InmolHelp
            <hr></hr>
          </h1>

          <label className="py-1">Tommy Sanchez</label>
          <div className="space-x-1">
            <label>Telefono:</label>
            <span>8094437758</span>
          </div>
          <div className="flex flex-col">
            <label>Correo Electronico</label>
            <span className="pb-2">example@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <button className=" bg-primary rounded-full  text-white hover:bg-primary/80">
            Editar
          </button>
          <button className=" bg-primary rounded-full  text-white hover:bg-primary/80 px-1.5 ">
            cambiar contraseña
          </button>
          <button className=" bg-primary rounded-full  text-white hover:bg-primary/80">
            Salir
          </button>
        </div>
      </section>
    </main>
  );
}
