"use client";
import { api } from "@/services/api";
import { FieldValues, useForm } from "react-hook-form";

export default function Peao() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function formData(data: FieldValues) {
    const payload = {
      name: data.name,
      age: Number(data.age),
      situation: data.situation,
    };
    // http://127.0.0.1:3333/peao
    console.log(payload);
    try {
      const response = await api.post("/peao", payload);
      if (response.status === 201) {
        console.log("Criado com sucesso");
      } else {
        console.error("Erro");
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="w-full h-full  flex flex-col gap-10 items-center justify-center">
      <h1 className="text-gray-300/50 font-medium ">Criar Peão</h1>
      <form
        className=" w-[300px] h-[500px] flex flex-col gap-4"
        onSubmit={handleSubmit(formData)}
      >
        <input
          type="text"
          placeholder="Nome"
          className="h-8 rounded p-2"
          {...register("name")}
        />
        <input
          type="number"
          className="h-8 rounded p-2"
          placeholder="Idade"
          {...register("age")}
        />
        <input type="file" {...register("file")} />
        <select {...register("situation")}>
          <option value="CASA">CASA</option>
          <option value="ROCA">ROÇA</option>
        </select>

        <button
          type="submit"
          className="py-2 px-4 border border-gray-200/30 rounded transition duration-300 hover:bg-white/10"
        >
          {" "}
          Salvar
        </button>
      </form>
    </div>
  );
}
