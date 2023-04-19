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
  const [search, setSearch] = useState("")

  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  const [notes, setNotes] = useState([])


function handleTagSelected(tagName) {
 if(tagName === "all"){
   return setTagsSelected([]) 
 }

  const alreadySelected = tagsSelected.includes(tagName)//quero saber se a tag já está selecionada

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

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

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
         isActive={tagsSelected.includes(tag.name)}
         />
         </li>
      ))
    }
      </Menu>


      <Search>
        <Input
        placeholder="Pesquisar pelo título"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
        {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>
      </Content>

      <NewNote to='/new'>
        <FiPlus/>
        Criar nota
      </NewNote>
    </Container>
  )
}