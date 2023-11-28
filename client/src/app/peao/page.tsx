export default function Peao() {
  return (
    <div className="w-full h-full  flex flex-col gap-10 items-center justify-center">
      <h1 className="text-gray-300/50 font-medium ">Criar Peão</h1>
      <form action="" className=" w-[300px] h-[500px] flex flex-col gap-4">
        <input type="text" placeholder="Nome" className="h-8 rounded p-2" />
        <input type="number" className="h-8 rounded p-2" placeholder="Idade" />
        <input type="file" />
        <select>
          <option value="">CASA</option>
          <option value="">ROÇA</option>
        </select>
      </form>
    </div>
  );
}
