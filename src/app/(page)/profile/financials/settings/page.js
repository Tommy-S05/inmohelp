export default function Settings() {
  return (
    <main className="w-full flex justify-center mb-20 ">
      <form className="bg-gray-200 p-5 rounded border-2 border-gray-500 ">
        <div className="mb-4 flex justify-center font-bold text-xl">
          Settings
        </div>
        <div class="mb-6">
          <label
            for=" Interest rate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Interest rate
          </label>
          <input
            type="number"
            id=" Interest rate"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="down Payment available"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            down Payment available
          </label>
          <input
            type="number"
            id="down Payment available"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="loan term"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            loan term
          </label>
          <input
            type="number"
            id="loan term"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          ></input>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Guardar
          </button>
        </div>
      </form>
    </main>
  );
}
