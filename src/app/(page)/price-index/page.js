"use client";
import React from "react";
import SelectComponent from "../../components/ConfiguracionSelect";
import { Main } from "next/document";

export default function PriceIndex() {
  return (
    <main className="flex flex-col justify-center items-center my-36  ">
      <div className="w-6/12  bg-white  p-5 rounded-2xl shadow-2xl ">
        <SelectComponent />
      </div>

      <section className="mt-10 w-full flex justify-center gap-x-2 ">
        <div className="w-72  text-center bg-white  p-5 rounded border-4 border-gray-200  ">
          <p className="text-2xl font-bold">US$ 1204</p>
          <p className="text-sm text-gray-600">
            precio por metro cuadrado (m²) por (3 Hab) en alma rosa
          </p>
        </div>

        <div className=" w-72 text-center bg-white  p-5 rounded border-4 border-gray-200  ">
          <p className="text-2xl font-bold">US$ 1204</p>
          <p className="text-sm text-gray-600">
            precio por metro cuadrado (m²) por (3 Hab) en alma rosa
          </p>
        </div>

        <div className=" w-72 text-center bg-white  p-5 rounded border-4 border-gray-200  ">
          <p className="text-2xl font-bold">US$ 1204</p>
          <p className="text-sm text-gray-600">
            precio por metro cuadrado (m²) por (3 Hab) en alma rosa
          </p>
        </div>
      </section>
    </main>
  );
}
