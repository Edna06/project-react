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
  const [tagsSelected, setTagsSelected] = useState([])

function handleTagSelected(tagName) {
  const alreadySelected = tagsSelected.includes(tagName)//quero saber se a tag já está selecionada
  console.log(alreadySelected)

  if(alreadySelected){
    const filteredTags = tagsSelected.filter(tag => tag !== tagName)//tags filtradas
    setTagsSelected(filteredTags)
  }else {
    setTagsSelected(prevState => [...prevState, tagName])
    }
  }



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
      onClick={() => handleTagSelected('all')}
      isActive={tagsSelected.length === 0}/>
      </li>

     {
      tags && tags.map( tag => (
        <li key={String(tag.id)}>
         <ButtonText
         title={tag.name}
         onClick={ () => handleTagSelected(tag.name)}
         isActive={tagsSelected.includes(tag.name)}//   includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false .
         />
         </li>
      ))
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