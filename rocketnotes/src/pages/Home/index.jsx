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
      // enviando para a rota /notes através de query o title passando o conteúdo dentro do search e as tags passando o conteúdo dentro de tagsSelected
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);
  // quando mudar o conteúdo do tagsSelected ou do search, executa novamente o useEffect
//[] -> contém as dependências do useEffect
//tudo que eu colocar como dependência do vetor, quando mudar o conteúdo de um dos dois ele vai executar novamente o useEffect

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
        {/* pegando o conteúdo da caixa de texto */}


        {/* //podemos usar as notes para percorrer a coleção e renderizar as notas de acordo com o que foi buscado no banco de dados */}
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