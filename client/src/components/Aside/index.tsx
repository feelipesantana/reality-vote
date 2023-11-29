import Link from "next/link";
import { PeoesList } from "./PeoesList";

export async function Aside() {
  return (
    <aside className="border-r border-gray-100/10 h-full w-[500px] py-10 px-4">
      <div>
        <h1 className="font-semibold text-center text-white/50">
          Configurações{" "}
        </h1>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Link
            href="/peao"
            className="bg-green-800 text-white mx-auto px-10 py-2 rounded-[16px]"
          >
            Criar Peao
          </Link>
          <button className="bg-red-800 text-white mx-auto px-10 py-2 rounded-[16px]">
            Criar Roca
          </button>
        </div>
        <div className="mt-20 flex flex-col items-center justify-center">
          <h3 className="font-semibold text-center text-white/50">
            Lista de Peaos
          </h3>
          <PeoesList />
        </div>
      </div>
    </aside>
  );
}
