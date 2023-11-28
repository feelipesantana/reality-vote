import Link from "next/link";

interface PeoesType {
  id: number;
  name: string;
  age: number;
  image: string;
  situation: string;
  pg_eliminated: number;
  rocaId: string;
}

type FetchPeoesType = PeoesType[];

async function getPeoes() {
  const response = await fetch("http://127.0.0.1:3333/peao");
  const result: FetchPeoesType = await response.json();
  return result;
}
export async function Aside() {
  const result: FetchPeoesType = await getPeoes();
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
          <ul className="mx-auto flex flex-col justify-center  text-white w-full mt-2">
            <div className="flex border border-white/10 w-full mb-4">
              <li className="text-center w-[33%] ">Id</li>
              <li className="text-center w-[33%] ">Nome</li>
              <li className="text-center w-[33%]">Idade</li>
              <li className="text-center w-[33%]">Situação</li>
            </div>
            {result.map((item) => {
              return (
                <div className="flex w-full " key={item.id}>
                  <li className="text-center w-[33%] ">{item.id}</li>
                  <li className="text-center w-[33%] ">{item.name}</li>
                  <li className="text-center w-[33%]">{item.age}</li>
                  <li className="text-center w-[33%]">{item.situation}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
