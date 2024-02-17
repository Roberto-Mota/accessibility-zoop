import './Checkbox.css'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    legenda: string,
    id: string,
    nome: string,
    selecionado: boolean,
    aoSelecionar: () => void
    }

const Checkbox = ({legenda, id, nome, selecionado, aoSelecionar, ...rest}: CheckboxProps) => {
  return (
    <label htmlFor={id} className='checkbox_legenda'>
      <input type='checkbox' id={id} name={nome} checked={selecionado} onChange={aoSelecionar} {...rest}/>
      <span className='checkmark'>{legenda}</span>
    </label>
  )
}

export default Checkbox
