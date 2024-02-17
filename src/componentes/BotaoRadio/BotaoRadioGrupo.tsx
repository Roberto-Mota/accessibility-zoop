import './BotaoRadio.css'

interface BotaoRadioGrupoProps {
    legenda?: string,
    ariaLabel: string,
    children: React.ReactNode
    }

const BotaoRadioGrupo = ({children, legenda, ariaLabel}: BotaoRadioGrupoProps) => {
// arialLabel - O atributo aria-label fornece um rótulo descritivo
    // para o elemento, melhorando sua compreensão por usuários 
        // que dependem de leitores de tela.

// tabIndex - É usado para permitir que o usuário navegue entre os botões de rádio com a tecla Tab
  return (
    <fieldset className='radio__grupo--campos' aria-label={ariaLabel} tabIndex={0}>
        {legenda && <legend className='radio__grupo--legenda'>{legenda}</legend>}
      <ul className='radio__grupo--campos'>{children}</ul>
    </fieldset>
  )
}

export default BotaoRadioGrupo
