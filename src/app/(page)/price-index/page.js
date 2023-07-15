"use client";
import React from "react";
import SelectComponent from "../../components/ConfiguracionSelect";
import { Main } from "next/document";

export default function PriceIndex() {
  return (
    <main className="w-full flex justify-center items-center my-36  ">
      <div className="w-6/12  bg-white  p-5 rounded-2xl shadow-2xl ">
        <SelectComponent />
      </div>
    </main>
  );
}
