import { Container } from './styles'

// usando o meu componente botão
import {Button} from '../../components/Button/index'

export function Details(){

return (
  <Container>
  <h1>Hello word!</h1>
  <span> Edna Maria</span>

  <Button title="Entrar" loading/> 
  <Button title="Cadastrar"/> 
  <Button title="Voltar"/> 

  </Container>
  )
}