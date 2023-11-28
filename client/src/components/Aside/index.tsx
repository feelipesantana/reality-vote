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
    <aside className="border h-full">
      <div>
        <h1>Sidebar</h1>
        <button>Criar Peao</button>
        <button>Criar Roca</button>
        <div>
          <h3>Lista de Peaos</h3>
          <ul>
            {result.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
