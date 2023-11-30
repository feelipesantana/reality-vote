"use client";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PeosRocaProps {
  idRoca: string;
}

interface PeaoType {
  id: number;
  name: string;
  age: number;
  image: string;
  situation: string;
  pg_eliminated: number;
  rocaId: string;
}

export function PoesRoca({ idRoca }: PeosRocaProps) {
  const [peoesRoca, setPeoesRoca] = useState<PeaoType[]>([]);
  const [peaoToEliminate, setPeaoToEliminate] = useState<boolean>(false);

  const { isLoading, error, data } = useQuery<PeaoType[]>({
    queryKey: ["peoes"],
    queryFn: fetchPeoes,
  });

  async function fetchPeoes() {
    try {
      const response = await api.get("/peao");

      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (data) {
      const filteredPeoes = data.filter((res) => res.rocaId === idRoca);
      setPeoesRoca(filteredPeoes);
    }
  }, [data]);

  return (
    <div className="mt-20">
      <div></div>
      <h2 className="text-white/90 text-lg bg-blue-950 px-4 py-2 rounded-[16px] shadow-md text-center">
        Peões na Roça - Votação para Eliminar
      </h2>{" "}
      <div className="flex gap-10">
        {peoesRoca.map((res) => {
          return (
            <div
              key={res.id}
              className={`${
                peaoToEliminate && "border-white"
              } p-6 rounded mt-10 border border-transparent `}
              onClick={() => setPeaoToEliminate(!peaoToEliminate)}
            >
              <h2 className="text-lg text-white">{res.name}</h2>

              <div className="relative mt-10 group">
                <div
                  className={` absolute -inset-1 rounded-full opacity-75 blur bg-gradient-to-tr from-pink-500 to-purple-500 transition duration-200 animate-tilt`}
                ></div>
                {/* Sua imagem aqui */}
                <div className="w-52 h-44">
                  <Image
                    src={res.image}
                    alt="Sua Imagem"
                    width={0}
                    height={0}
                    className="relative  rounded-full w-full h-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
