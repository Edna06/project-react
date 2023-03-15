import { Container, Links, Content } from './styles'

import {Button} from '../../components/Button/index'
import {Header} from '../../components/Header/index'
import {ButtonText} from '../../components/ButtonText/index'
import {Section} from '../../components/Section/index'
import {Tag} from '../../components/Tags/index'


export function Details(){

return (
  <Container>
  
  <Header/>

  <main>
    <Content>

  <ButtonText title="Excluir nota"/>

    <h1>Introdução ao React</h1>
    <br />
    <p>React é uma biblioteca de JavaScript de código aberto para criação de interfaces de usuário. Desenvolvida pelo Facebook, React permite que os desenvolvedores criem componentes de UI reutilizáveis e interativos para aplicativos web e móveis. O React utiliza uma abordagem declarativa para definir como a interface do usuário deve ser exibida, permitindo que os desenvolvedores se concentrem na lógica da aplicação em vez de se preocupar com a manipulação direta do DOM. React é uma das bibliotecas de JavaScript mais populares e é amplamente utilizada em aplicações web modernas.
    </p>


    
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

  </Content>
  </main>

  </Container>

  )
}