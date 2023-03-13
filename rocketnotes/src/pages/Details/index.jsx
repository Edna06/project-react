import { Container, Links } from './styles'

import {Button} from '../../components/Button/index'
import {Header} from '../../components/Header/index'
import {Section} from '../../components/Section/index'
import {Tag} from '../../components/Tags/index'


export function Details(){

return (
  <Container>
  
  <Header/>
  <Section title= "Links úteis">
    <Links>
       <li>
         <a href="#">https://wwww.rocketseat.com.br</a>
       </li>

       <li>
         <a href="#">https://wwww.rocketseat.com.br</a>
       </li>
     </Links>
  </Section>

  <Section title= "Marcadores">
  <Tag title="express"/>
  <Tag title="nodejs"/>
  </Section>
  
  <Button title="Voltar"/> 

  </Container>
  )
}