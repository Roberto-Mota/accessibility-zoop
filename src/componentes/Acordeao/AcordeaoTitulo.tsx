import React from 'react'
import Tipografia from '../Tipografia'
import { IconeSetaBaixo, IconeSetaCima } from '../Icones'

interface AcordeaoTitulo {
    id: string;
    estaAberto: boolean;
    titulo: string;
    alternarVisibilidade: () => void;
  }

const AcordeaoTitulo = ({estaAberto, id, alternarVisibilidade, titulo}: AcordeaoTitulo) => {
    // aria-expanded -> Ajuda dando contexto para leitores de tela
  return (
    <summary
    role='button'
    className="acordeao__titulo"
    aria-expanded={estaAberto}
    aria-controls={id}
    onClick={alternarVisibilidade}> 
        <Tipografia elemento='h2' variante='h3' cor='cinza'>
            {titulo}
        </Tipografia>
        <span>{estaAberto ? <IconeSetaCima/> : <IconeSetaBaixo/>}</span>
    </summary>
  )
}

export default AcordeaoTitulo
