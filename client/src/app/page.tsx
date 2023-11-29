import { PoesRoca } from "@/components/PeosRoca";

export default async function Home() {
  const response = await fetch("http://127.0.0.1:3333/roca");

  const result = await response.json();
  const findRocaIsOpen = result.find((res: any) => res.isOpen === true);

  return (
    <main className=" mx-auto flex h-full w-full p-4 justify-center">
      <h2 className="text-center text-lg text-white/70 mt-20">
        O Id da Roça que estamos em aberto é: <br />
        <span className="text-2xl text-white">{findRocaIsOpen.id}</span>
      </h2>
      <PoesRoca idRoca={findRocaIsOpen.id} />
    </main>
  );
}
