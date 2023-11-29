interface PeosRocaProps {
  idRoca: string;
}

export async function PoesRoca({ idRoca }: PeosRocaProps) {
  const peoes = await fetch(`http://127.0.0.1:3333/peao`);
  const result = await peoes.json();
  console.log(result);
  console.log(idRoca);
  const findByIdRoca = result.map((res) => {
    console.log("varificar", res.rocaId);
    if (res.rocaId === idRoca) {
      return res;
    }
  });
  console.log(findByIdRoca);
  return <h1>Peoes na roca</h1>;
}
