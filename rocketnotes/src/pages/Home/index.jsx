import {useState, useEffect} from 'react'

import { api } from '../../services/api'

import {FiSearch ,FiPlus} from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import {Header} from '../../components/Header/index'
import { Input } from "../../components/Input/index"
import { Section} from "../../components/Section/index"
import { Note } from "../../components/Note/index"
import { ButtonText } from '../../components/ButtonText/index'


export function Home(){

  const [tags, setTags] = useState([])

  useEffect( () => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])


  return(
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu>

      <li>
      <ButtonText
      title="Todos"
      isActive/>
      </li>

     {
      tags && tags.map( tag => (
        <li key={String(tag.id)}>
         <ButtonText
         title={tag.name}/>
         </li>
      ))//verificando se existe tags e, se existir, vou usar o map para percorrer as tags
    }

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