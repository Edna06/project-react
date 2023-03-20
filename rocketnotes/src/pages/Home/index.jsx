import {FiSearch ,FiPlus} from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import {Header} from '../../components/Header/index'
import { Input } from "../../components/Input/index"
import { Section} from "../../components/Section/index"
import { Note } from "../../components/Note/index"
import { ButtonText } from '../../components/ButtonText/index'

export function Home(){
  return(
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu> 
      <li>
        <ButtonText title="Todos" isActive/>
      </li>

      <li>
      <ButtonText title="Frotend"/>
      </li>

      <li>
      <ButtonText title="Node"/>
      </li>

      <li>
      <ButtonText title="React"/>
      </li>
      </Menu>

      <Search>  
      <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>

        <Section title="Minhas notas">
          <Note data={{
            title:'React', 
            tags: [
              {id: '1', name: 'react'}
            ]
            }}/>
  
          <Note data={{
            title:'Exemplo de Middleware', 
            tags: [
              {id: '1', name: 'express'},
              {id: '2', name: 'nodejs'}
            ]
            }}/>
        </Section>


      </Content>

      <NewNote to='/new'>
        <FiPlus/>
        Criar nota
      </NewNote>
    </Container>
  )
}