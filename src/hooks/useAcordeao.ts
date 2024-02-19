import { useState } from "react";

const useAcordeao = () => {
  const [aberturasPorItem, setAberturasPorItem] = useState<
    Record<string | number, boolean>
    // Record é do TS, é um objeto que tem uma chave (string) e um valor (boolean ou number) -?-
  >({});

  const alternarVisibilidade = (id: string | number) => {
    setAberturasPorItem((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return {
    aberturasPorItem,
    alternarVisibilidade,
  };
};

export default useAcordeao;

