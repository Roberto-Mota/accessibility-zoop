import Acordeao from "@/componentes/Acordeao/Acordeao";
import "./Faq.css";
import Tipografia from "@/componentes/Tipografia";
import AcordeaoConteudo from "@/componentes/Acordeao/AcordeaoConteudo";
import AcordeaoTitulo from "@/componentes/Acordeao/AcordeaoTitulo";
import faq from "../../../assets/faq.json";
import useAcordeao from "@/hooks/useAcordeao";
import AcordeaoDescricao from "@/componentes/Acordeao/AcordeaoDescricao";

const Faq = () => {
  const { aberturasPorItem, alternarVisibilidade } = useAcordeao();
  return (
    <section className="secao__duvidas">
      <Tipografia elemento="h2" variante="h2" cor="azul">
        Dúvidas frequentes
      </Tipografia>
      <Tipografia elemento="p" variante="corpo" cor="grafite">
        Antes de entrar em contato, verifique se sua dúvida está respondida em
        nossa FAQ!
      </Tipografia>
    <Acordeao>
        {faq.map((duvida) => (
            <AcordeaoConteudo key={duvida.id}>
                <AcordeaoTitulo
                    titulo={duvida.titulo}
                    id={duvida.id}
                    estaAberto={aberturasPorItem[duvida.id] || false}
                    alternarVisibilidade={() => alternarVisibilidade(duvida.id)}
                />
                <AcordeaoDescricao
                    estaAberto={aberturasPorItem[duvida.id] || false}
                    descricao={duvida.descricao}
                    id={duvida.id}
                />
            </AcordeaoConteudo>
            ))}
    </Acordeao>
    </section>
  );
};

export default Faq;
