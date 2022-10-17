import { Container } from './styles'
import { FiPlus, FiX } from 'react-icons/fi'

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    //A baixo eu estou usando o readOnly para dizer que o documento é só leitura, mas note que coloquei um parametro que só vai ativar se o isNew vinher negado, no caso: só vai ativar se não for novo!
    <Container>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        onClick={onClick} //aqui estou dizendo que a propriedade click é do botão!--- já no ternario a baixo estou dizendo: Se isNew retornar positivo eu quero que coloque o incone Fiplus se não o icone Fix
        type="button"
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
