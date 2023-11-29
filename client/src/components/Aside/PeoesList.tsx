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

export async function PeoesList() {
  const result: FetchPeoesType = await getPeoes();

  return (
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
  );
}
